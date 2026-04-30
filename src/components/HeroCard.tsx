import type { Hero } from '@/types/hero'
import { card, iconBox, placeholderIcon, cardBody, heroName, cardMeta, rarityBadge, troopBadge } from '@/styles/heroCard.css'

const rarityColors: Record<string, string> = {
  SSR: '#7c3aed',
  SR: '#0369a1',
  R: '#374151',
}

const TROOP_LABELS: Record<string, string> = {
  shield: '盾兵',
  spear: '槍兵',
  archer: '弓兵',
}

function resolveImg(path: string | undefined, baseUrl: string): string | undefined {
  if (!path) return undefined
  if (path.startsWith('http')) return path
  const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${base}${path.startsWith('/') ? path : '/' + path}`
}

type Props = { hero: Hero; baseUrl: string }

export function HeroCard({ hero, baseUrl }: Props) {
  const bgColor = rarityColors[hero.rarity] ?? '#374151'
  const heroIcon = resolveImg(hero.icon, baseUrl)
  return (
    <a href={`${baseUrl.replace(/\/$/, '')}/heroes/${hero.id}`} class={card}>
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
          <span class={rarityBadge} style={{ backgroundColor: bgColor }}>
            {hero.rarity}{hero.season != null ? ` S${hero.season}` : ''}
          </span>
          {hero.troopType && (
            <span class={troopBadge}>{TROOP_LABELS[hero.troopType] ?? hero.troopType}</span>
          )}
        </div>
      </div>
    </a>
  )
}
