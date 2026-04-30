import { useState } from 'preact/hooks'
import type { Hero, ExpeditionStats, ExplorationStats } from '@/types/hero'
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
  badgeSeason,
  badgeTroop,
  badgeTroopShield,
  badgeTroopSpear,
  badgeTroopArcher,
  toggle,
  toggleBtn,
  toggleBtnActive,
  section,
  sectionTitle,
  statsRow,
  statLabel,
  statValueText,
  statSep,
  skillList,
  skillItem,
  skillNameRow,
  skillIcon,
  skillName,
  skillDesc,
  skillDescNumber,
  specialSection,
  specialSectionTitle,
  equipmentNameMeta,
  equipmentStatsGrid,
  equipmentStatChip,
  equipmentStatChipLabel,
  equipmentStatChipValue,
} from '@/styles/heroDetail.css'

type Mode = 'expedition' | 'exploration'

const TROOP_LABELS: Record<string, string> = {
  shield: '盾',
  spear: '槍',
  archer: '弓',
}

const rarityBadgeClass: Record<string, string> = {
  SSR: badgeSSR,
  SR: badgeSR,
  R: badgeR,
}

const TROOP_BADGE_CLASSES: Record<string, string> = {
  shield: badgeTroopShield,
  spear: badgeTroopSpear,
  archer: badgeTroopArcher,
}

const STAT_KEYWORDS = ['与ダメージ', '被ダメージ', '攻撃力', '防御力', 'ダメージ', '攻撃', '防御', 'HP']
const HIGHLIGHT_REGEX = new RegExp(
  `(${STAT_KEYWORDS.join('|')}|\\d+(?:\\.\\d+)?%?)`,
  'g'
)

function simplifyToMax(desc: string): string {
  return desc.replace(
    /\d+(?:\.\d+)?%?(?:\/\d+(?:\.\d+)?%?)+/g,
    (match) => {
      const parts = match.split('/')
      return parts[parts.length - 1]
    }
  )
}

function renderHighlightedDesc(desc: string) {
  const simplified = simplifyToMax(desc)
  const parts = simplified.split(HIGHLIGHT_REGEX)
  return parts.map((part, i) => {
    if (/^\d+(?:\.\d+)?%?$/.test(part) && part !== '' && !STAT_KEYWORDS.includes(part)) {
      return <span key={i} class={skillDescNumber}>{part}</span>
    }
    return part
  })
}

function StatsLine({ mode, stats }: { mode: Mode; stats: ExpeditionStats | ExplorationStats }) {
  if (mode === 'expedition') {
    const s = stats as ExpeditionStats
    return (
      <>
        <span class={statLabel}>攻撃・防御</span>
        <span class={statValueText}>{s.atk}</span>
      </>
    )
  }
  const s = stats as ExplorationStats
  return (
    <>
      <span class={statLabel}>攻撃</span>
      <span class={statValueText}>{s.atk.toLocaleString()}</span>
      <span class={statSep}>·</span>
      <span class={statLabel}>防御</span>
      <span class={statValueText}>{s.def.toLocaleString()}</span>
      <span class={statSep}>·</span>
      <span class={statLabel}>HP</span>
      <span class={statValueText}>{s.hp.toLocaleString()}</span>
    </>
  )
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
              {hero.rarity}
            </span>
            {hero.season != null && (
              <span class={`${badge} ${badgeSeason}`}>S{hero.season}</span>
            )}
            <span class={`${badge} ${TROOP_BADGE_CLASSES[hero.troopType] ?? badgeTroop}`}>{TROOP_LABELS[hero.troopType]}</span>
          </div>
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

      <div class={section}>
        <div class={statsRow}>
          <span class={sectionTitle}>ステータス</span>
          <StatsLine mode={mode} stats={data.stats} />
        </div>
      </div>

      <div class={section}>
        <div class={sectionTitle}>スキル</div>
        <div class={skillList}>
          {data.skills.map((skill, i) => (
            <div key={i} class={skillItem}>
              <div class={skillNameRow}>
                {skill.icon && (
                  <img class={skillIcon} src={resolveImg(skill.icon, baseUrl)} alt="" aria-hidden="true" />
                )}
                <span class={skillName}>{skill.name}</span>
              </div>
              <div class={skillDesc}>{renderHighlightedDesc(skill.desc)}</div>
            </div>
          ))}
        </div>
      </div>

      {hero.specialEquipment && (() => {
        const eq = hero.specialEquipment!
        const modeStats = mode === 'expedition' ? eq.expeditionStats : eq.explorationStats
        const modeSkill = mode === 'expedition' ? eq.skills[1] : eq.skills[0]
        return (
          <div class={specialSection}>
            <div class={specialSectionTitle}>専用装備</div>
            {modeStats && Object.keys(modeStats).length > 0 && (
              <div class={equipmentStatsGrid}>
                {Object.entries(modeStats).map(([label, value]) => (
                  <div class={equipmentStatChip}>
                    <span class={equipmentStatChipLabel}>{label}</span>
                    <span class={equipmentStatChipValue}>{value}</span>
                  </div>
                ))}
              </div>
            )}
            {modeSkill && (
              <div class={skillList}>
                <div class={skillItem}>
                  <div class={skillNameRow}>
                    {modeSkill.icon && (
                      <img class={skillIcon} src={resolveImg(modeSkill.icon, baseUrl)} alt="" aria-hidden="true" />
                    )}
                    <span class={skillName}>{modeSkill.name}</span>
                  </div>
                  <div class={skillDesc}>{renderHighlightedDesc(modeSkill.desc)}</div>
                </div>
              </div>
            )}
          </div>
        )
      })()}
    </div>
  )
}
