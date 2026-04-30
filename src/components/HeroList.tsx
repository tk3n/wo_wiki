import { useState, useEffect } from 'preact/hooks'
import type { Hero, Rarity } from '@/types/hero'
import { HeroCard } from './HeroCard'
import {
  page,
  header,
  headerTitle,
  filters,
  filterRow,
  filterLabel,
  filterBtn,
  filterBtnActive,
  seasonRow,
  seasonScroll,
  grid,
  emptyMessage,
  navRow,
  navLink,
} from '@/styles/heroList.css'

type Props = {
  heroes: Hero[]
  baseUrl: string
}

const RARITIES: Rarity[] = ['SSR', 'SR', 'R']

function getInitialParams() {
  if (typeof window === 'undefined') return { rarity: 'SSR' as Rarity, season: 'all' }
  const p = new URLSearchParams(window.location.search)
  return {
    rarity: (p.get('rarity') as Rarity) ?? 'SSR',
    season: p.get('season') ?? 'all',
  }
}

export function HeroList({ heroes, baseUrl }: Props) {
  // サーバーレンダリングとクライアント初期状態を一致させてhydrationミスマッチを防ぐ
  const [rarity, setRarity] = useState<Rarity>('SSR')
  const [season, setSeason] = useState<string>('all')

  useEffect(() => {
    function syncFromUrl() {
      const { rarity: r, season: s } = getInitialParams()
      setRarity(r)
      setSeason(s)
    }
    // マウント時に URL から正しい状態を読み込む（hydration 後）
    syncFromUrl()
    // popstate: pushState で変えた URL を戻る/進む操作
    // pageshow: bfcache からの復元
    window.addEventListener('popstate', syncFromUrl)
    window.addEventListener('pageshow', syncFromUrl)
    return () => {
      window.removeEventListener('popstate', syncFromUrl)
      window.removeEventListener('pageshow', syncFromUrl)
    }
  }, [])

  function updateUrl(r: Rarity, s: string) {
    const p = new URLSearchParams()
    p.set('rarity', r)
    if (s !== 'all') p.set('season', s)
    window.history.pushState({}, '', '?' + p.toString())
  }

  function onRarity(r: Rarity) {
    setRarity(r)
    const newSeason = r === 'SSR' ? season : 'all'
    setSeason(newSeason)
    updateUrl(r, newSeason)
  }

  function onSeason(s: string) {
    setSeason(s)
    updateUrl(rarity, s)
  }

  const ssrSeasons = Array.from(
    new Set(heroes.filter((h) => h.rarity === 'SSR' && h.season != null).map((h) => h.season!))
  ).sort((a, b) => a - b)

  const filtered = heroes.filter((h) => {
    if (h.rarity !== rarity) return false
    if (rarity === 'SSR' && season !== 'all' && h.season !== Number(season)) return false
    return true
  })

  return (
    <div class={page}>
      <div class={header}>
        <h1 class={headerTitle}>ホワサバ非公式Wiki</h1>
        <nav class={navRow}>
          <a href={`${baseUrl.replace(/\/$/, '')}/skills`} class={navLink}>スキル図鑑</a>
        </nav>
      </div>

      <div class={filters}>
        <div class={filterRow}>
          <span class={filterLabel}>レア</span>
          {RARITIES.map((r) => (
            <button
              key={r}
              class={`${filterBtn} ${rarity === r ? filterBtnActive : ''}`}
              onClick={() => onRarity(r)}
            >
              {r}
            </button>
          ))}
        </div>

        <div class={seasonRow}>
          <span class={filterLabel}>世代</span>
          <div class={seasonScroll}>
            <button
              class={`${filterBtn} ${season === 'all' ? filterBtnActive : ''}`}
              onClick={() => onSeason('all')}
              disabled={rarity !== 'SSR'}
            >
              全
            </button>
            {ssrSeasons.map((s) => (
              <button
                key={s}
                class={`${filterBtn} ${season === String(s) ? filterBtnActive : ''}`}
                onClick={() => onSeason(String(s))}
                disabled={rarity !== 'SSR'}
              >
                S{s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p class={emptyMessage}>該当する英雄がいないのだ。</p>
      ) : (
        <div class={grid}>
          {filtered.map((hero) => (
            <HeroCard key={hero.id} hero={hero} baseUrl={baseUrl} />
          ))}
        </div>
      )}
    </div>
  )
}
