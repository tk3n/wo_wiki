import { useState, useMemo, useEffect } from 'preact/hooks'
import type { Hero } from '@/types/hero'
import {
  page,
  pageHeader,
  backBtn,
  pageTitle,
  filterSection,
  filterBar,
  filterBtn,
  filterBtnActive,
  filterBtnIcon,
  filterBtnLabel,
  content,
  heroSection,
  heroSectionHeader,
  heroSectionIcon,
  heroSectionIconPlaceholder,
  heroSectionName,
  skillGrid,
  skillCard,
  skillCardIcon,
  skillCardPlaceholder,
  skillCardName,
  categoryTag,
  tooltipStyle,
  tooltipCategory,
  tooltipTitle,
  tooltipDesc,
  tooltipDescNumber,
} from '@/styles/skillGallery.css'

type SkillEntry = {
  heroId: string
  heroName: string
  heroIcon: string | undefined
  skillName: string
  skillDesc: string
  skillIcon: string | undefined
  category: 'exploration' | 'expedition' | 'special' | 'equipment'
}

type HeroGroup = {
  heroName: string
  heroIcon: string | undefined
  skills: SkillEntry[]
}

const CATEGORY_LABELS: Record<SkillEntry['category'], string> = {
  exploration: '探検',
  expedition:  '遠征',
  special:     '特殊',
  equipment:   '装備',
}

const STAT_KEYWORDS = ['与ダメージ', '被ダメージ', '攻撃力', '防御力', 'ダメージ', '攻撃', '防御', 'HP']
const HIGHLIGHT_REGEX = new RegExp(`(${STAT_KEYWORDS.join('|')}|\\d+(?:\\.\\d+)?%?)`, 'g')

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
      return <span key={i} class={tooltipDescNumber}>{part}</span>
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

type Props = { heroes: Hero[]; baseUrl: string }

export function SkillGallery({ heroes, baseUrl }: Props) {
  const [activeHero, setActiveHero] = useState<string>('all')
  const [tooltipData, setTooltipData] = useState<{ entry: SkillEntry; rect: DOMRect } | null>(null)

  const isTooltipOpen = tooltipData !== null

  useEffect(() => {
    if (!isTooltipOpen) return
    function close() { setTooltipData(null) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [isTooltipOpen])

  const allSkills = useMemo<SkillEntry[]>(() => {
    return heroes.flatMap(hero => [
      ...hero.exploration.skills.map(s => ({
        heroId: hero.id, heroName: hero.name, heroIcon: hero.icon,
        skillName: s.name, skillDesc: s.desc, skillIcon: s.icon,
        category: 'exploration' as const,
      })),
      ...hero.expedition.skills.map(s => ({
        heroId: hero.id, heroName: hero.name, heroIcon: hero.icon,
        skillName: s.name, skillDesc: s.desc, skillIcon: s.icon,
        category: 'expedition' as const,
      })),
      ...(hero.special ?? []).map(s => ({
        heroId: hero.id, heroName: hero.name, heroIcon: hero.icon,
        skillName: s.name, skillDesc: s.desc, skillIcon: s.icon,
        category: 'special' as const,
      })),
      ...(hero.specialEquipment?.skills ?? []).map(s => ({
        heroId: hero.id, heroName: hero.name, heroIcon: hero.icon,
        skillName: s.name, skillDesc: s.desc, skillIcon: s.icon,
        category: 'equipment' as const,
      })),
    ])
  }, [heroes])

  const filteredSkills = activeHero === 'all'
    ? allSkills
    : allSkills.filter(s => s.heroId === activeHero)

  const grouped: Record<string, HeroGroup> = {}
  for (const s of filteredSkills) {
    if (!grouped[s.heroId]) {
      grouped[s.heroId] = { heroName: s.heroName, heroIcon: s.heroIcon, skills: [] }
    }
    grouped[s.heroId].skills.push(s)
  }

  function handleCardClick(entry: SkillEntry, e: MouseEvent) {
    e.stopPropagation()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setTooltipData(prev => prev?.entry === entry ? null : { entry, rect })
  }

  function getTooltipPosition(rect: DOMRect): { [key: string]: string } {
    const w = typeof window !== 'undefined' ? window.innerWidth : 375
    const tooltipW = 280
    const margin = 8
    const left = Math.max(margin, Math.min(rect.left + rect.width / 2 - tooltipW / 2, w - tooltipW - margin))
    if (rect.top > 140) {
      return { left: `${left}px`, top: `${rect.top - margin}px`, transform: 'translateY(-100%)' }
    }
    return { left: `${left}px`, top: `${rect.bottom + margin}px` }
  }

  return (
    <div class={page}>
      <div class={pageHeader}>
        <a href={baseUrl} class={backBtn}>← 一覧へ戻る</a>
        <h1 class={pageTitle}>スキル図鑑</h1>
      </div>

      <div class={filterSection}>
        <div class={filterBar}>
          <button
            class={`${filterBtn} ${activeHero === 'all' ? filterBtnActive : ''}`}
            onClick={() => { setActiveHero('all'); setTooltipData(null) }}
          >
            <span style={{ fontSize: '1.1rem', lineHeight: '1' }}>全</span>
            <span class={filterBtnLabel}>すべて</span>
          </button>
          {heroes.map(hero => {
            const icon = resolveImg(hero.icon, baseUrl)
            return (
              <button
                key={hero.id}
                class={`${filterBtn} ${activeHero === hero.id ? filterBtnActive : ''}`}
                onClick={() => { setActiveHero(hero.id); setTooltipData(null) }}
              >
                {icon ? (
                  <img class={filterBtnIcon} src={icon} alt="" aria-hidden="true" />
                ) : (
                  <span style={{ fontSize: '1.1rem', lineHeight: '1' }}>?</span>
                )}
                <span class={filterBtnLabel}>{hero.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div class={content}>
        {Object.entries(grouped).map(([heroId, group]) => {
          const hIcon = resolveImg(group.heroIcon, baseUrl)
          return (
            <div key={heroId} class={heroSection}>
              <div class={heroSectionHeader}>
                {hIcon ? (
                  <img class={heroSectionIcon} src={hIcon} alt="" aria-hidden="true" />
                ) : (
                  <div class={heroSectionIconPlaceholder}>?</div>
                )}
                <span class={heroSectionName}>{group.heroName}</span>
              </div>
              <div class={skillGrid}>
                {group.skills.map((entry, idx) => {
                  const icon = resolveImg(entry.skillIcon, baseUrl)
                  return (
                    <div
                      key={`${activeHero}-${entry.heroId}-${entry.category}-${entry.skillName}`}
                      class={skillCard}
                      style={{ animationDelay: `${idx * 25}ms` }}
                      onClick={(e) => handleCardClick(entry, e as MouseEvent)}
                    >
                      {icon ? (
                        <img class={skillCardIcon} src={icon} alt="" aria-hidden="true" />
                      ) : (
                        <div class={skillCardPlaceholder}>?</div>
                      )}
                      <span class={skillCardName}>{entry.skillName}</span>
                      <span class={categoryTag}>{CATEGORY_LABELS[entry.category]}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {tooltipData && (
        <div class={tooltipStyle} style={getTooltipPosition(tooltipData.rect)}>
          <div class={tooltipCategory}>{CATEGORY_LABELS[tooltipData.entry.category]}</div>
          <div class={tooltipTitle}>{tooltipData.entry.skillName}</div>
          <div class={tooltipDesc}>{renderHighlightedDesc(tooltipData.entry.skillDesc)}</div>
        </div>
      )}
    </div>
  )
}
