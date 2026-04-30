import { readFileSync, writeFileSync, unlinkSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rawData = JSON.parse(readFileSync(join(__dirname, 's1-heroes-raw.json'), 'utf-8'))

function toId(name) {
  const map = {
    'ナタリア': 'natalia',
    'ジェロニモ': 'jeronimo',
    'ジャスミン': 'jasmine',
    'ジンマン': 'zinman',
  }
  return map[name] ?? name
}

function skillsToTs(skills, indent = '    ') {
  if (!skills || skills.length === 0) return '[]'
  const items = skills.map(s => {
    const iconLine = s.icon ? `\n${indent}  icon: '${s.icon}',` : ''
    return `{\n${indent}  name: '${s.name.replace(/'/g, "\\'")}',\n${indent}  desc: '${s.desc.replace(/'/g, "\\'")}',${iconLine}\n${indent}}`
  })
  return `[\n${indent}${items.join(`,\n${indent}`)},\n${indent.slice(2)}]`
}

function heroToTs(hero) {
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
  season: 1,
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

const srcDir = join(__dirname, '../src/data/heroes')

// 古いダミーファイルを削除
const oldFiles = ['charlie.ts', 'hank.ts', 'cloris.ts', 'vivika.ts']
for (const f of oldFiles) {
  try {
    unlinkSync(join(srcDir, f))
    console.log(`削除: ${f}`)
  } catch {
    // ファイルが存在しない場合は無視
  }
}

// S1ヒーローのTSファイルを生成
const exports = []
for (const hero of rawData) {
  const id = toId(hero.name)
  const ts = heroToTs(hero)
  const filePath = join(srcDir, `${id}.ts`)
  writeFileSync(filePath, ts, 'utf-8')
  console.log(`生成: ${id}.ts`)
  exports.push({ id, name: hero.name })
}

// index.tsを更新
const indexContent = exports.map(e => `import { ${e.id} } from './${e.id}'`).join('\n')
  + '\n\nexport const ALL_HEROES = ['
  + exports.map(e => e.id).join(', ')
  + ']\n'

writeFileSync(join(srcDir, 'index.ts'), indexContent, 'utf-8')
console.log('更新: index.ts')

console.log('\n完了なのだ！')
