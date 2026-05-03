import type { Hero } from '@/types/hero'

export const charlie = {
  id: 'charlie',
  name: 'チャーリー',
  rarity: 'R',
  troopType: 'spear',
  heroType: '発展型',
  icon: '/images/heroes/charlie.png',

  exploration: {
    stats: { atk: 1442, def: 2220, hp: 14430 },
    skills: [
    {
      name: '自家製爆弾',
      desc: '自家製爆弾を投げて、ターゲットとその周囲の敵に攻撃140%/154%/168%/182%/196%のダメージを与える',
      icon: '/images/skills/hero_skill_icon_500021.png',
    },
    {
      name: '投擲爆弾',
      desc: '敵に投げた爆弾が10%/15%/15%/20%/20%の確率でターゲットを眩暈状態にする。0.5/0.5/1/1/1.5秒持続。',
      icon: '/images/skills/hero_skill_icon_500022.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '90.07%', def: '90.07%' },
    skills: [
    {
      name: '発破技士',
      desc: '都市内の石炭工場生産量が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500024.png',
    },
    {
      name: '採掘のコツ',
      desc: '出征時に石炭採集速度が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500025.png',
    },
  ],
  },
} satisfies Hero
