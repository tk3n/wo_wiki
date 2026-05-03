import type { Hero } from '@/types/hero'

export const sergey = {
  id: 'sergey',
  name: 'セルゲイ',
  rarity: 'SR',
  troopType: 'shield',
  heroType: '戦闘',
  icon: '/images/heroes/sergey.png',

  exploration: {
    stats: { atk: 1361, def: 2220, hp: 26640 },
    skills: [
    {
      name: '盾インパクト',
      desc: '重い盾を敵に投げつけて200%/220%/240%/260%/280%の範囲ダメージを与え、ノックバックさせる。',
      icon: '/images/skills/hero_skill_icon_500041.png',
    },
    {
      name: '盾の壁',
      desc: '味方英雄全員の防御が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500042.png',
    },
    {
      name: '盾ブロック',
      desc: '盾を強化し、自身の被ダメージが10%/15%/20%/25%/30%低下する。',
      icon: '/images/skills/hero_skill_icon_500043.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '140.11%', def: '140.11%' },
    skills: [
    {
      name: 'プロテクト',
      desc: '味方全部隊の被ダメージが4%/8%/12%/16%/20%減少する。',
      icon: '/images/skills/hero_skill_icon_500044.png',
    },
    {
      name: '弱体化打撃',
      desc: '敵全部隊の攻撃力を4%/8%/12%/16%/20%低下させる。',
      icon: '/images/skills/hero_skill_icon_500045.png',
    },
  ],
  },
} satisfies Hero
