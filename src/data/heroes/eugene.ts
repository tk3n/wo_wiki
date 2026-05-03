import type { Hero } from '@/types/hero'

export const eugene = {
  id: 'eugene',
  name: 'ユージーン',
  rarity: 'R',
  troopType: 'shield',
  heroType: '発展型',
  icon: '/images/heroes/eugene.png',

  exploration: {
    stats: { atk: 1106, def: 2220, hp: 21644 },
    skills: [
    {
      name: '斧旋風',
      desc: '素早く振り回し、0.5秒毎に周囲の敵に攻撃80%/88%/96%/104%/110%のダメージを与える。3秒持続。',
      icon: '/images/skills/hero_skill_icon_500001.png',
    },
    {
      name: '鋭刃',
      desc: '与ダメージが10%/15%/20%25%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500002.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '90.07%', def: '90.07%' },
    skills: [
    {
      name: '一子相伝',
      desc: '都市内の伐採場生産量が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500004.png',
    },
    {
      name: '伐採名人',
      desc: '出征時の木材採集速度が5%/10%/15%20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500005.png',
    },
  ],
  },
} satisfies Hero
