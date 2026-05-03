import type { Hero } from '@/types/hero'
import {
  row, rowSelected,
  heroSection, heroIconBox, heroIconImg, heroIconPlaceholder,
  heroInfo, heroNameText, heroBadges,
  skillSection, skillDesc, skillDescNumber,
} from '@/styles/skillListRow.css'
import {
  rarityBadge, rarityBadgeSSR, rarityBadgeSR, rarityBadgeR,
  seasonBadge,
  troopBadgeShield, troopBadgeSpear, troopBadgeArcher,
} from '@/styles/heroCard.css'

const RARITY_BADGE_CLASSES: Record<string, string> = {
  SSR: rarityBadgeSSR,
  SR:  rarityBadgeSR,
  R:   rarityBadgeR,
}

const TROOP_LABELS: Record<string, string> = {
  shield: '盾',
  spear:  '槍',
  archer: '弓',
}

const TROOP_BADGE_CLASSES: Record<string, string> = {
  shield: troopBadgeShield,
  spear:  troopBadgeSpear,
  archer: troopBadgeArcher,
}

const STAT_KEYWORDS = ['与ダメージ', '被ダメージ', '攻撃力', '防御力', 'ダメージ', '攻撃', '防御', 'HP']
const HIGHLIGHT_REGEX = new RegExp(`(${STAT_KEYWORDS.join('|')}|\\d+(?:\\.\\d+)?%?)`, 'g')

function simplifyToMax(desc: string): string {
  return desc.replace(
    /\d+(?:\.\d+)?%?(?:\/\d+(?:\.\d+)?%?)+/g,
    (match) => match.split('/').at(-1)!
  )
}

function renderHighlightedDesc(desc: string) {
  const simplified = simplifyToMax(desc)
  return simplified.split(HIGHLIGHT_REGEX).map((part, i) => {
    if (/^\d+(?:\.\d+)?%?$/.test(part) && part !== '' && !STAT_KEYWORDS.includes(part)) {
      return <span key={i} class={skillDescNumber}>{part}</span>
    }
    return part
  })
}

function resolveImg(path: string | undefined, baseUrl: string): string | undefined {
  if (!path) return undefined
  if (path.startsWith('http')) return path
  const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${base}${path.startsWith('/') ? path : '/' + path}`
}

type Props = { hero: Hero; baseUrl: string; onSelect?: (id: string) => void; isSelected?: boolean }

export function SkillListRow({ hero, baseUrl, onSelect, isSelected }: Props) {
  const heroIcon = resolveImg(hero.icon, baseUrl)
  const skill = hero.expedition.skills[0]
  const rarityClass = `${rarityBadge} ${RARITY_BADGE_CLASSES[hero.rarity] ?? rarityBadgeR}`
  const rowClass = [row, isSelected ? rowSelected : ''].filter(Boolean).join(' ')

  return (
    <a
      href={`${baseUrl.replace(/\/$/, '')}/heroes/${hero.id}`}
      class={rowClass}
      onClick={(e) => { if (onSelect) { e.preventDefault(); onSelect(hero.id) } }}
    >
      <div class={heroSection}>
        <div class={heroIconBox}>
          {heroIcon
            ? <img class={heroIconImg} src={heroIcon} alt={hero.name} />
            : <span class={heroIconPlaceholder}>?</span>
          }
        </div>
        <div class={heroInfo}>
          <span class={heroNameText}>{hero.name}</span>
          <div class={heroBadges}>
            <span class={rarityClass}>{hero.rarity}</span>
            {hero.season != null && (
              <span class={`${rarityBadge} ${seasonBadge}`}>S{hero.season}</span>
            )}
            {hero.troopType && (
              <span class={TROOP_BADGE_CLASSES[hero.troopType] ?? rarityBadge}>
                {TROOP_LABELS[hero.troopType] ?? hero.troopType}
              </span>
            )}
          </div>
        </div>
      </div>

      <div class={skillSection}>
        <p class={skillDesc}>{renderHighlightedDesc(skill.desc)}</p>
      </div>
    </a>
  )
}
