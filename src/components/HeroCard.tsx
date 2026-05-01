import type { Hero } from '@/types/hero'
import {
  card, cardSSR, cardSelected,
  iconBox, placeholderIcon,
  cardBody, heroName, cardMeta,
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

function resolveImg(path: string | undefined, baseUrl: string): string | undefined {
  if (!path) return undefined
  if (path.startsWith('http')) return path
  const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${base}${path.startsWith('/') ? path : '/' + path}`
}

type Props = { hero: Hero; baseUrl: string; onSelect?: (id: string) => void; isSelected?: boolean }

export function HeroCard({ hero, baseUrl, onSelect, isSelected }: Props) {
  const heroIcon = resolveImg(hero.icon, baseUrl)
  const isSSR = hero.rarity === 'SSR'
  const rarityClass = `${rarityBadge} ${RARITY_BADGE_CLASSES[hero.rarity] ?? rarityBadgeR}`
  const cardClass = [
    isSSR ? `${card} ${cardSSR}` : card,
    isSelected ? cardSelected : '',
  ].join(' ').trim()

  return (
    <a
      href={`${baseUrl.replace(/\/$/, '')}/heroes/${hero.id}`}
      class={cardClass}
      onClick={(e) => { if (onSelect) { e.preventDefault(); onSelect(hero.id) } }}
    >
      <div class={iconBox}>
        {heroIcon ? (
          <img src={heroIcon} alt={hero.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <span class={placeholderIcon}>?</span>
        )}
      </div>
      <div class={cardBody}>
        <span class={heroName}>{hero.name}</span>
        <div class={cardMeta}>
          <span class={rarityClass}>{hero.rarity}</span>
          {hero.season != null && (
            <span class={`${rarityBadge} ${seasonBadge}`}>S{hero.season}</span>
          )}
          {hero.troopType && (
            <span class={TROOP_BADGE_CLASSES[hero.troopType] ?? `${rarityBadge}`}>
              {TROOP_LABELS[hero.troopType] ?? hero.troopType}
            </span>
          )}
        </div>
      </div>
    </a>
  )
}
