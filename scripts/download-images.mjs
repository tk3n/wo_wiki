import { createWriteStream, mkdirSync, existsSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'
import https from 'https'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const HERO_ICONS = new Set(['natalia.png', 'jeronimo.png', 'molly.png', 'zinman.png'])

function urlToLocalPath(url) {
  // 画像URLでなければスキップ
  if (!url.match(/\.(png|jpg|jpeg|webp|gif)(\?.*)?$/i)) return null

  const filename = decodeURIComponent(basename(new URL(url).pathname))
  const isHeroIcon = HERO_ICONS.has(filename) || !filename.startsWith('hero_skill')

  if (isHeroIcon && HERO_ICONS.has(filename)) {
    return { localPath: `public/images/heroes/${filename}`, publicPath: `/images/heroes/${filename}` }
  } else {
    return { localPath: `public/images/skills/${filename}`, publicPath: `/images/skills/${filename}` }
  }
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (existsSync(dest)) {
      console.log(`  スキップ(既存): ${basename(dest)}`)
      return resolve()
    }
    const file = createWriteStream(dest)
    https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        return download(res.headers.location, dest).then(resolve).catch(reject)
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', err => {
      file.close()
      reject(err)
    })
  })
}

// ディレクトリ作成
mkdirSync(join(ROOT, 'public/images/heroes'), { recursive: true })
mkdirSync(join(ROOT, 'public/images/skills'), { recursive: true })

// s1-heroes-raw.jsonから全画像URLを収集
const { readFileSync, writeFileSync } = await import('fs')
const rawData = JSON.parse(readFileSync(join(__dirname, 's1-heroes-raw.json'), 'utf-8'))

const urlMap = new Map() // originalUrl -> publicPath
const downloads = []

for (const hero of rawData) {
  const allUrls = [
    hero.iconImg,
    ...hero.explorationSkills.map(s => s.icon),
    ...hero.expeditionSkills.map(s => s.icon),
    ...hero.specialSkills.map(s => s.icon),
  ].filter(Boolean)

  for (const url of allUrls) {
    if (!url || urlMap.has(url)) continue
    const mapped = urlToLocalPath(url)
    if (!mapped) {
      console.warn(`  スキップ(非画像): ${url}`)
      continue
    }
    urlMap.set(url, mapped.publicPath)
    downloads.push({ url, dest: join(ROOT, mapped.localPath), publicPath: mapped.publicPath })
  }
}

console.log(`ダウンロード対象: ${downloads.length}枚\n`)
for (const { url, dest, publicPath } of downloads) {
  process.stdout.write(`  ${publicPath} ... `)
  try {
    await download(url, dest)
    console.log('OK')
  } catch (e) {
    console.log(`FAIL: ${e.message}`)
  }
}

// URLマップをJSONで保存（TSファイル書き換え用）
writeFileSync(join(__dirname, 'image-url-map.json'), JSON.stringify(Object.fromEntries(urlMap), null, 2))
console.log('\nURLマップ保存: scripts/image-url-map.json')
