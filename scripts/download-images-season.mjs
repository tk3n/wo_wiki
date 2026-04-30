import { createWriteStream, mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'
import https from 'https'
import http from 'http'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const season = parseInt(process.argv[2] ?? '2', 10)
if (isNaN(season) || season < 1) {
  console.error('使用方法: node download-images-season.mjs <season番号>')
  process.exit(1)
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (existsSync(dest)) {
      console.log(`  スキップ(既存): ${basename(dest)}`)
      return resolve()
    }
    const client = url.startsWith('https') ? https : http
    const file = createWriteStream(dest)
    client.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        return download(res.headers.location, dest).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) {
        file.close()
        return reject(new Error(`HTTP ${res.statusCode}`))
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', err => {
      file.close()
      reject(err)
    })
  })
}

function urlToLocalPath(url, heroIconFilenames) {
  if (!url || !url.match(/\.(png|jpg|jpeg|webp|gif)(\?.*)?$/i)) return null

  let filename
  try {
    filename = decodeURIComponent(basename(new URL(url).pathname))
  } catch {
    return null
  }

  const isHeroIcon = heroIconFilenames.has(filename)
  if (isHeroIcon) {
    return { localPath: `public/images/heroes/${filename}`, publicPath: `/images/heroes/${filename}` }
  } else {
    return { localPath: `public/images/skills/${filename}`, publicPath: `/images/skills/${filename}` }
  }
}

mkdirSync(join(ROOT, 'public/images/heroes'), { recursive: true })
mkdirSync(join(ROOT, 'public/images/skills'), { recursive: true })

const rawDataPath = join(__dirname, `s${season}-heroes-raw.json`)
const rawData = JSON.parse(readFileSync(rawDataPath, 'utf-8'))

// ヒーローアイコンのファイル名セットを作成
const heroIconFilenames = new Set(
  rawData.map(h => {
    if (!h.iconImg) return null
    try {
      return decodeURIComponent(basename(new URL(h.iconImg).pathname))
    } catch {
      return null
    }
  }).filter(Boolean)
)

const urlMapPath = join(__dirname, 'image-url-map.json')
const existingUrlMap = existsSync(urlMapPath)
  ? JSON.parse(readFileSync(urlMapPath, 'utf-8'))
  : {}
const urlMap = new Map(Object.entries(existingUrlMap))

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
    const mapped = urlToLocalPath(url, heroIconFilenames)
    if (!mapped) {
      console.warn(`  スキップ(非画像): ${url}`)
      continue
    }
    urlMap.set(url, mapped.publicPath)
    downloads.push({ url, dest: join(ROOT, mapped.localPath), publicPath: mapped.publicPath })
  }
}

console.log(`S${season}: ダウンロード対象 ${downloads.length}枚\n`)
for (const { url, dest, publicPath } of downloads) {
  process.stdout.write(`  ${publicPath} ... `)
  try {
    await download(url, dest)
    console.log('OK')
  } catch (e) {
    console.log(`FAIL: ${e.message}`)
  }
}

writeFileSync(urlMapPath, JSON.stringify(Object.fromEntries(urlMap), null, 2))
console.log(`\nURLマップ更新: scripts/image-url-map.json`)
