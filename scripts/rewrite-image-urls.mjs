import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const urlMap = JSON.parse(readFileSync(join(__dirname, 'image-url-map.json'), 'utf-8'))

const heroesDir = join(ROOT, 'src/data/heroes')
const files = readdirSync(heroesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts')

for (const file of files) {
  const filePath = join(heroesDir, file)
  let content = readFileSync(filePath, 'utf-8')
  let changed = false

  for (const [original, local] of Object.entries(urlMap)) {
    if (content.includes(original)) {
      content = content.replaceAll(original, local)
      changed = true
    }
  }

  if (changed) {
    writeFileSync(filePath, content, 'utf-8')
    console.log(`書き換え: ${file}`)
  }
}

console.log('完了なのだ！')
