import puppeteer from 'puppeteer'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const RARITY_MAP = { 'レア': 'R', 'エピック': 'SR', 'レジェンド': 'SSR' }
const TROOP_MAP = { '盾兵': 'shield', '槍兵': 'spear', '弓兵': 'archer' }

const season = parseInt(process.argv[2] ?? '2', 10)
if (isNaN(season) || season < 1) {
  console.error('使用方法: node scrape-heroes-season.mjs <season番号>')
  process.exit(1)
}

function cleanDesc(html) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

function extractIdFromHref(href) {
  // https://www.whiteoutsurvival.wiki/ja/heroes/natalia/ → natalia
  const match = href.match(/\/heroes\/([^/]+)\/?$/)
  return match ? match[1] : null
}

async function scrapeHeroDetail(page, heroInfo) {
  console.log(`  取得中: ${heroInfo.name} (${heroInfo.href})`)
  await page.goto(heroInfo.href, { waitUntil: 'networkidle2', timeout: 30000 })

  const raw = await page.evaluate(() => {
    const attrItems = Array.from(document.querySelectorAll('.hero-attr-item'))
    const attrs = {}
    attrItems.forEach(item => {
      const label = item.querySelector('.hero-attr-label')?.innerText?.trim()
      const value = item.querySelector('.hero-attr-value span')?.innerText?.trim()
      if (label && value) attrs[label] = value
    })

    const iconImg = document.querySelector('.hero-left-box-top img')?.src

    function parseStatsGroup(groupEl) {
      const rows = Array.from(groupEl.querySelectorAll('.hero-stats-row'))
      const result = {}
      rows.forEach(row => {
        const label = row.querySelector('.hero-stats-label span')?.innerText?.trim()
        const value = row.querySelector('.hero-stats-value')?.innerText?.trim()
        if (label && value) result[label] = value
      })
      return result
    }

    const group1 = document.querySelector('.hero-stats-group.group-box-1')
    const group2 = document.querySelector('.hero-stats-group.group-box-2')
    const explorationStats = group1 ? parseStatsGroup(group1) : null
    const expeditionStats = group2 ? parseStatsGroup(group2) : null

    function extractSkills(sectionId) {
      const section = document.querySelector(`#${sectionId}`)
      if (!section) return []
      return Array.from(section.querySelectorAll('.bg-dark.rounded')).map(card => ({
        name: card.querySelector('h5')?.innerText?.trim() ?? '',
        desc: card.querySelector('p')?.innerHTML ?? '',
        icon: card.querySelector('img')?.src ?? '',
      })).filter(s => s.name)
    }

    return {
      attrs,
      iconImg,
      explorationStats,
      expeditionStats,
      explorationSkills: extractSkills('exploration-skills'),
      expeditionSkills: extractSkills('expedition-skills'),
      specialSkills: extractSkills('special-skills'),
    }
  })

  const parseStats = (raw) => {
    if (!raw) return null
    const result = {}
    for (const [k, v] of Object.entries(raw)) {
      if (k.includes('攻撃') || k.includes('殺傷力')) result.atk = v
      else if (k.includes('防御')) result.def = v
      else if (k === 'HP') result.hp = v
    }
    return result
  }

  const cleanSkills = (skills) => skills.map(s => ({
    name: s.name,
    desc: cleanDesc(s.desc),
    icon: s.icon,
  }))

  // ページURLからウィキページURLのパターンをフィルタ（スキルicon誤爬取対策）
  const wikiPagePattern = /whiteoutsurvival\.wiki\/ja\/heroes\//
  const filterSkillIcon = (skills) => skills.map(s => ({
    ...s,
    icon: s.icon && !wikiPagePattern.test(s.icon) ? s.icon : undefined,
  }))

  const urlId = extractIdFromHref(heroInfo.href)

  return {
    name: heroInfo.name,
    href: heroInfo.href,
    urlId,
    rarity: RARITY_MAP[raw.attrs['レアリティ']] ?? raw.attrs['レアリティ'],
    troopType: TROOP_MAP[raw.attrs['兵種']] ?? raw.attrs['兵種'],
    heroType: raw.attrs['タイプ'],
    iconImg: raw.iconImg,
    explorationStats: parseStats(raw.explorationStats),
    expeditionStats: parseStats(raw.expeditionStats),
    explorationSkills: filterSkillIcon(cleanSkills(raw.explorationSkills)),
    expeditionSkills: filterSkillIcon(cleanSkills(raw.expeditionSkills)),
    specialSkills: filterSkillIcon(cleanSkills(raw.specialSkills)),
  }
}

async function main() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  const sectionId = `generation-${season}-en`
  console.log(`S${season}ヒーロー一覧を取得中 (section: #${sectionId})...`)
  await page.goto('https://www.whiteoutsurvival.wiki/ja/heroes/', {
    waitUntil: 'networkidle2',
    timeout: 30000,
  })

  const heroes = await page.evaluate((sectionId) => {
    const section = document.querySelector(`#${sectionId}`)
    if (!section) return []
    return Array.from(section.querySelectorAll('.pet-card-item')).map(card => ({
      href: card.querySelector('a')?.href ?? '',
      name: card.innerText.trim().split('\n')[0],
    }))
  }, sectionId)

  if (heroes.length === 0) {
    console.error(`セクション #${sectionId} が見つからないか、ヒーローがいないのだ`)
    await browser.close()
    process.exit(1)
  }

  console.log(`S${season}ヒーロー: ${heroes.map(h => h.name).join(', ')}`)

  const results = []
  for (const hero of heroes) {
    try {
      const detail = await scrapeHeroDetail(page, hero)
      results.push(detail)
    } catch (e) {
      console.error(`  エラー: ${hero.name}: ${e.message}`)
    }
  }

  await browser.close()

  const outPath = join(__dirname, `s${season}-heroes-raw.json`)
  writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8')
  console.log(`\n保存完了: ${outPath}`)
  results.forEach(h => {
    console.log(`  ${h.name} (${h.urlId}): ${h.rarity}/${h.troopType} 探検ATK=${h.explorationStats?.atk} 遠征ATK=${h.expeditionStats?.atk} スキル(探検=${h.explorationSkills.length}/遠征=${h.expeditionSkills.length}/スペシャル=${h.specialSkills.length})`)
  })
}

main().catch(console.error)
