export type Rarity = 'R' | 'SR' | 'SSR'

export type TroopType = 'shield' | 'spear' | 'archer'

export type HeroTypeLabel = '戦闘' | '発展型' | string

export type Skill = {
  name: string
  desc: string
  icon?: string
}

export type ExplorationStats = {
  atk: number
  def: number
  hp: number
}

// 遠征ステータスはSSRだと百分率ボーナス
export type ExpeditionStats = {
  atk: string
  def?: string
  hp?: string
}

export type HeroMode<TStats = ExplorationStats> = {
  stats: TStats
  skills: Skill[]
}

export type Hero = {
  id: string
  name: string
  rarity: Rarity
  troopType: TroopType
  heroType?: HeroTypeLabel
  season?: number
  icon?: string
  exploration: HeroMode<ExplorationStats>
  expedition: HeroMode<ExpeditionStats>
  special?: Skill[]
}
