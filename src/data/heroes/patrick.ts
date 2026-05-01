import type { Hero } from '@/types/hero'

export const patrick = {
  id: 'patrick',
  name: 'パトリック',
  rarity: 'SR',
  troopType: 'spear',
  heroType: '戦闘',
  icon: '/images/heroes/patrick.png',

  exploration: {
    stats: { atk: 1776, def: 2220, hp: 17760 },
    skills: [
    {
      name: 'バーベキュー',
      desc: '大量の豪華な食事で、味方全体のHPをパトリックの攻撃力200%/220%/240%/260%/280%分回復する。さらに味方全体の攻撃力が5%/5.5%/6%/6.5%/7%上昇する。4秒持続。',
      icon: '/images/skills/hero_skill_icon_500051.png',
    },
    {
      name: '肉厚脂肪',
      desc: '料理人の肉厚脂肪により、自身の被ダメージが10%/15%/20%/25%/30%低下する。',
      icon: '/images/skills/hero_skill_icon_500052.png',
    },
    {
      name: '非常食',
      desc: 'いつもおやつを持っている。5秒毎に攻撃50%/55%/60%/65%/70%分のHPを回復する。',
      icon: '/images/skills/hero_skill_icon_500053.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '140.11%', def: '140.11%' },
    skills: [
    {
      name: '幸せグルメ',
      desc: 'パトリックは美味しい料理で味方を励ます。味方全部隊のHPが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500054.png',
    },
    {
      name: 'カロリー吸収',
      desc: '美食が戦意と潜在能力を刺激し、味方全部隊の攻撃力を5%/10%/15%/20%/25%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500055.png',
    },
  ],
  },
} satisfies Hero
