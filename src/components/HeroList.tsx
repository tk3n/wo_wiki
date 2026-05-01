import { useState, useEffect } from 'preact/hooks'
import type { Hero, Rarity } from '@/types/hero'
import { HeroCard } from './HeroCard'
import { HeroDetail } from './HeroDetail'
import {
  page,
  header,
  headerTitle,
  contentWrapper,
  contentWrapperWithDetail,
  sidebarContainer,
  gridArea,
  detailPane,
  detailEmpty,
  detailCloseBtn,
  closeBtnInner,
  filters,
  filterRow,
  filterLabel,
  filterBtn,
  filterBtnActive,
  seasonRow,
  seasonScroll,
  grid,
  emptyMessage,
} from '@/styles/heroList.css'

type Props = {
  heroes: Hero[]
  baseUrl: string
}

const RARITIES: Rarity[] = ['SSR', 'SR', 'R']

function getInitialParams() {
  if (typeof window === 'undefined') return { rarity: 'SSR' as Rarity, season: 'all', heroId: null as string | null }
  const p = new URLSearchParams(window.location.search)
  return {
    rarity: (p.get('rarity') as Rarity) ?? 'SSR',
    season: p.get('season') ?? 'all',
    heroId: p.get('hero') ?? null,
  }
}

function isPC() {
  return typeof window !== 'undefined' && window.innerWidth >= 768
}

export function HeroList({ heroes, baseUrl }: Props) {
  // サーバーレンダリングとクライアント初期状態を一致させてhydrationミスマッチを防ぐ
  const [rarity, setRarity] = useState<Rarity>('SSR')
  const [season, setSeason] = useState<string>('all')
  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(null)

  const selectedHero = selectedHeroId ? (heroes.find(h => h.id === selectedHeroId) ?? null) : null

  useEffect(() => {
    function syncFromUrl() {
      const { rarity: r, season: s, heroId } = getInitialParams()
      setRarity(r)
      setSeason(s)
      setSelectedHeroId(heroId)
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

  function updateUrl(r: Rarity, s: string, heroId: string | null = null) {
    const p = new URLSearchParams()
    if (r !== 'SSR') p.set('rarity', r)
    if (s !== 'all') p.set('season', s)
    if (heroId) p.set('hero', heroId)
    const qs = p.toString()
    window.history.pushState({}, '', qs ? '?' + qs : window.location.pathname)
  }

  function onRarity(r: Rarity) {
    setRarity(r)
    const newSeason = r === 'SSR' ? season : 'all'
    setSeason(newSeason)
    setSelectedHeroId(null)
    updateUrl(r, newSeason, null)
  }

  function onSeason(s: string) {
    setSeason(s)
    updateUrl(rarity, s, selectedHeroId)
  }

  function onHeroSelect(heroId: string) {
    setSelectedHeroId(heroId)
    updateUrl(rarity, season, heroId)
  }

  function onCloseDetail() {
    setSelectedHeroId(null)
    updateUrl(rarity, season, null)
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
        <a href={baseUrl} class={headerTitle}>ホワサバ非公式Wiki</a>
      </div>

      <div class={selectedHero ? contentWrapperWithDetail : contentWrapper}>
        <div class={sidebarContainer}>
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
        </div>

        <div class={gridArea}>
          {filtered.length === 0 ? (
            <p class={emptyMessage}>該当する英雄がいません。</p>
          ) : (
            <div class={grid}>
              {filtered.map((hero) => (
                <HeroCard
                  key={hero.id}
                  hero={hero}
                  baseUrl={baseUrl}
                  onSelect={isPC() ? onHeroSelect : undefined}
                  isSelected={hero.id === selectedHeroId}
                />
              ))}
            </div>
          )}
        </div>

        <div class={detailPane}>
          {selectedHero ? (
            <>
              <div class={detailCloseBtn}>
                <button class={closeBtnInner} onClick={onCloseDetail}>✕ 閉じる</button>
              </div>
              <HeroDetail hero={selectedHero} baseUrl={baseUrl} variant="panel" />
            </>
          ) : (
            <p class={detailEmpty}>← ヒーローを選択</p>
          )}
        </div>
      </div>
    </div>
  )
}
