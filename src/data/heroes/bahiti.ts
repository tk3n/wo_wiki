import type { Hero } from '@/types/hero'

export const bahiti = {
  id: 'bahiti',
  name: 'バシティ',
  rarity: 'R',
  troopType: 'archer',
  heroType: '戦闘',
  icon: '/images/heroes/bahiti.png',

  exploration: {
    stats: { atk: 2157, def: 2220, hp: 13320 },
    skills: [
    {
      name: '弱点狙い',
      desc: '鋭い眼差しでターゲットの弱点を見出し、攻撃400%/440%/480%/520%/560%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500061.png',
    },
    {
      name: 'クイックショット',
      desc: '攻撃速度が10%/15%/20%/25%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500062.png',
    },
    {
      name: 'シャープスコープ',
      desc: '与ダメージが 10%/15%/20%/25%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500063.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '140.11%', def: '140.11%' },
    skills: [
    {
      name: '危険予知',
      desc: '味方全部隊の被ダメージが4%/8%/12%/16%/20%減少する。',
      icon: '/images/skills/hero_skill_icon_500064.png',
    },
    {
      name: '運否天賦',
      desc: '味方全部隊が攻撃時、50%の確率でダメージが10%/20%/30%/40%/50%上昇する。',
      icon: '/images/skills/hero_skill_icon_500065.png',
    },
  ],
  },
} satisfies Hero
