import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const season = parseInt(process.argv[2] ?? '2', 10)
if (isNaN(season) || season < 1) {
  console.error('使用方法: node generate-hero-ts-season.mjs <season番号>')
  process.exit(1)
}

// 日本語名 → 英語ID マッピング
const NAME_TO_ID = {
  // S1
  'ナタリア': 'natalia',
  'ジェロニモ': 'jeronimo',
  'ジャスミン': 'jasmine',
  'ジンマン': 'zinman',
  // S2
  'フリント': 'flint',
  'フレンダー': 'philly',
  'アロンゾ': 'alonso',
  // S3
  'ローガン': 'logan',
  'ミア': 'mia',
  'グレッグ': 'greg',
  // S4
  'アクモス': 'ahmos',
  'レイナ': 'reina',
  'リオン': 'lyon',
  // S5
  'ヘクトー': 'hector',
  'ノラ': 'norah',
  'グエン': 'gwen',
}

function toId(name) {
  return NAME_TO_ID[name] ?? name.toLowerCase().replace(/\s+/g, '_')
}

function skillsToTs(skills, indent = '    ') {
  if (!skills || skills.length === 0) return '[]'
  const items = skills.map(s => {
    const iconLine = s.icon && !s.icon.includes('whiteoutsurvival.wiki/ja/heroes/')
      ? `\n${indent}  icon: '${s.icon}',`
      : ''
    return `{\n${indent}  name: '${s.name.replace(/'/g, "\\'")}',\n${indent}  desc: '${s.desc.replace(/'/g, "\\'")}',${iconLine}\n${indent}}`
  })
  return `[\n${indent}${items.join(`,\n${indent}`)},\n${indent.slice(2)}]`
}

function heroToTs(hero, season) {
  const id = toId(hero.name)
  const exStats = hero.explorationStats ?? { atk: 0, def: 0, hp: 0 }
  const expStats = hero.expeditionStats ?? { atk: '0%' }

  const specialLines = hero.specialSkills && hero.specialSkills.length > 0
    ? `\n  special: ${skillsToTs(hero.specialSkills, '    ')},`
    : ''

  return `import type { Hero } from '@/types/hero'

export const ${id} = {
  id: '${id}',
  name: '${hero.name}',
  rarity: '${hero.rarity}',
  troopType: '${hero.troopType}',
  heroType: '${hero.heroType ?? ''}',
  season: ${season},
  icon: '${hero.iconImg ?? ''}',

  exploration: {
    stats: { atk: ${exStats.atk}, def: ${exStats.def}, hp: ${exStats.hp} },
    skills: ${skillsToTs(hero.explorationSkills)},
  },

  expedition: {
    stats: { atk: '${expStats.atk}'${expStats.def ? `, def: '${expStats.def}'` : ''}${expStats.hp ? `, hp: '${expStats.hp}'` : ''} },
    skills: ${skillsToTs(hero.expeditionSkills)},
  },${specialLines}
} satisfies Hero
`
}

const rawDataPath = join(__dirname, `s${season}-heroes-raw.json`)
const rawData = JSON.parse(readFileSync(rawDataPath, 'utf-8'))

const srcDir = join(__dirname, '../src/data/heroes')

const newExports = []
for (const hero of rawData) {
  const id = toId(hero.name)
  const ts = heroToTs(hero, season)
  const filePath = join(srcDir, `${id}.ts`)
  writeFileSync(filePath, ts, 'utf-8')
  console.log(`生成: ${id}.ts (${hero.name})`)
  newExports.push({ id, name: hero.name })
}

// index.tsを更新（既存エントリを保持しつつ新規追加）
const indexPath = join(srcDir, 'index.ts')
const existingContent = existsSync(indexPath) ? readFileSync(indexPath, 'utf-8') : ''

// 既存のimportとエクスポートを解析
const existingImports = existingContent
  .split('\n')
  .filter(line => line.startsWith('import {'))
  .map(line => {
    const m = line.match(/import \{ (\w+) \} from '\.\/(\w+)'/)
    return m ? { id: m[1], file: m[2] } : null
  })
  .filter(Boolean)

const existingExportMatch = existingContent.match(/export const ALL_HEROES = \[([^\]]+)\]/)
const existingHeroIds = existingExportMatch
  ? existingExportMatch[1].split(',').map(s => s.trim()).filter(Boolean)
  : []

// 新規ヒーローを追加（重複チェック）
const allImports = [...existingImports]
const allHeroIds = [...existingHeroIds]

for (const e of newExports) {
  if (!allImports.find(i => i.id === e.id)) {
    allImports.push({ id: e.id, file: e.id })
  }
  if (!allHeroIds.includes(e.id)) {
    allHeroIds.push(e.id)
  }
}

const newIndexContent = allImports.map(i => `import { ${i.id} } from './${i.file}'`).join('\n')
  + '\n\nexport const ALL_HEROES = ['
  + allHeroIds.join(', ')
  + ']\n'

writeFileSync(indexPath, newIndexContent, 'utf-8')
console.log('更新: index.ts')
console.log('\n完了なのだ！')
