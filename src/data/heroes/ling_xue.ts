import type { Hero } from '@/types/hero'

export const ling_xue = {
  id: 'ling_xue',
  name: 'リンセツ',
  rarity: 'SR',
  troopType: 'spear',
  heroType: '発展型',
  icon: '/images/heroes/ling_xue.jpg',

  exploration: {
    stats: { atk: 1776, def: 2220, hp: 17760 },
    skills: [
    {
      name: '狂風の突撃',
      desc: '前方直線範囲内の敵に攻撃300%/330%/360%/390%/420%のダメージ与える。',
      icon: '/images/skills/ling_xue_1.png',
    },
    {
      name: '高天の気勢',
      desc: 'HPが50%以上の時、攻撃力が16%/24%/32%/40%/48%上昇。',
      icon: '/images/skills/ling_xue_3.png',
    },
    {
      name: '破釜沈船の覚悟',
      desc: 'HPが50%以下の時、防御力が50%/75%/100%/125%/150%上昇。',
      icon: '/images/skills/ling_xue_4.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '140.11%', def: '140.11%' },
    skills: [
    {
      name: '威風八面',
      desc: '敵部隊全体の攻撃力が4%/8%/12%/16%/20%低下。',
      icon: '/images/skills/ling_xue_5.png',
    },
    {
      name: '整軍経武',
      desc: '訓練速度が4%/8%/12%/16%/20%上昇。',
      icon: '/images/skills/ling_xue_2.png',
    },
  ],
  },
} satisfies Hero
