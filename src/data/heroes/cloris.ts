import type { Hero } from '@/types/hero'

export const cloris = {
  id: 'cloris',
  name: 'クラリス',
  rarity: 'R',
  troopType: 'archer',
  heroType: '発展型',
  icon: '/images/heroes/cloris.png',

  exploration: {
    stats: { atk: 1752, def: 2220, hp: 10822 },
    skills: [
    {
      name: '矢の雨',
      desc: '雨のように矢を発して、攻撃180%/198%/216%/234%/252%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500031.png',
    },
    {
      name: '狩人の印',
      desc: 'ターゲットに狩人の印を付与し、今回の攻撃の与ダメージが10%/15%/20%25%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500032.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '90.07%', def: '90.07%' },
    skills: [
    {
      name: 'ベテラン狩人',
      desc: '都市内のハンターの家生産量が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500034.png',
    },
    {
      name: '捕食者',
      desc: '出征時に生肉採集速度が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500035.png',
    },
  ],
  },
} satisfies Hero
