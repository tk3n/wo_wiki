import { useState } from 'preact/hooks'
import type { Hero } from '@/types/hero'
import {
  page,
  backBtn,
  heroHeader,
  iconWrapper,
  iconImg,
  iconPlaceholder,
  heroInfo,
  heroName,
  heroBadges,
  badge,
  badgeSSR,
  badgeSR,
  badgeR,
  badgeTroop,
  toggle,
  toggleBtn,
  toggleBtnActive,
  section,
  sectionTitle,
  statsGrid,
  statBox,
  statLabel,
  statValue,
  skillList,
  skillItem,
  skillName,
  skillDesc,
} from '@/styles/heroDetail.css'

type Mode = 'expedition' | 'exploration'

const TROOP_LABELS: Record<string, string> = {
  shield: '盾兵',
  spear: '槍兵',
  archer: '弓兵',
}

const rarityBadgeClass: Record<string, string> = {
  SSR: badgeSSR,
  SR: badgeSR,
  R: badgeR,
}

function formatStat(val: number | string | undefined): string {
  if (val === undefined) return '-'
  if (typeof val === 'number') return val.toLocaleString()
  return val
}

// ローカルパス（/images/...）はbaseUrlを付けて解決。外部URLはそのまま。
function resolveImg(path: string | undefined, baseUrl: string): string | undefined {
  if (!path) return undefined
  if (path.startsWith('http')) return path
  const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${base}${path.startsWith('/') ? path : '/' + path}`
}

type Props = { hero: Hero; baseUrl: string }

export function HeroDetail({ hero, baseUrl }: Props) {
  const [mode, setMode] = useState<Mode>('expedition')
  const data = hero[mode]
  const heroIcon = resolveImg(hero.icon, baseUrl)

  return (
    <div class={page}>
      <a href={baseUrl} class={backBtn}>← 一覧へ戻る</a>

      <div class={heroHeader}>
        <div class={iconWrapper}>
          {heroIcon ? (
            <img class={iconImg} src={heroIcon} alt={hero.name} />
          ) : (
            <div class={iconPlaceholder}>?</div>
          )}
        </div>

        <div class={heroInfo}>
          <h1 class={heroName}>{hero.name}</h1>
          <div class={heroBadges}>
            <span class={`${badge} ${rarityBadgeClass[hero.rarity] ?? badgeR}`}>
              {hero.rarity}{hero.season != null ? ` S${hero.season}` : ''}
            </span>
            <span class={`${badge} ${badgeTroop}`}>{TROOP_LABELS[hero.troopType]}</span>
          </div>
          <div class={toggle}>
            <button
              class={`${toggleBtn} ${mode === 'expedition' ? toggleBtnActive : ''}`}
              onClick={() => setMode('expedition')}
            >
              遠征
            </button>
            <button
              class={`${toggleBtn} ${mode === 'exploration' ? toggleBtnActive : ''}`}
              onClick={() => setMode('exploration')}
            >
              探検
            </button>
          </div>
        </div>
      </div>

      <div class={section}>
        <div class={sectionTitle}>ステータス</div>
        <div class={statsGrid}>
          <div class={statBox}>
            <div class={statLabel}>攻撃</div>
            <div class={statValue}>{formatStat(data.stats.atk)}</div>
          </div>
          <div class={statBox}>
            <div class={statLabel}>防御</div>
            <div class={statValue}>{formatStat(data.stats.def)}</div>
          </div>
          {data.stats.hp !== undefined && (
            <div class={statBox}>
              <div class={statLabel}>HP</div>
              <div class={statValue}>{formatStat(data.stats.hp)}</div>
            </div>
          )}
        </div>
      </div>

      <div class={section}>
        <div class={sectionTitle}>スキル</div>
        <div class={skillList}>
          {data.skills.map((skill, i) => (
            <div key={i} class={skillItem}>
              <div class={skillName}>{skill.name}</div>
              <div class={skillDesc}>{skill.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
