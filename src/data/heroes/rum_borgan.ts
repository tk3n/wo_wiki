import type { Hero } from '@/types/hero'

export const rum_borgan = {
  id: 'rum_borgan',
  name: 'ルム・ボーガン',
  rarity: 'SR',
  troopType: 'spear',
  heroType: '戦闘',
  icon: '/images/heroes/rum_borgan.png',

  exploration: {
    stats: { atk: 1776, def: 2220, hp: 17760 },
    skills: [
    {
      name: '群山咆哮',
      desc: '山々を揺るがすほどの雄叫びを発して敵を威圧する。敵全体の攻撃力を1%/2%/3%/4%/5%低下させる。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500291.png',
    },
    {
      name: '戦吼鼓舞',
      desc: '雄叫びは敵を威嚇するだけでなく、仲間を鼓舞する。「群山咆哮」を発動すると、自身と自身周辺の味方の攻撃力が15%/20%/25%/30%/35%上昇する。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500292.png',
    },
    {
      name: '林間戦舞',
      desc: '長年に渡るジャングルと山岳地帯での戦闘経験により、ルム・ボーガンは敏捷な動きを身につけた。攻撃速度が10%/15%/20%/25%/30%上昇する',
      icon: '/images/skills/hero_skill_icon_500293.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '140.11%', def: '140.11%' },
    skills: [
    {
      name: '誘惑戦術',
      desc: 'ルム・ボーガンは巧妙なゲリラ戦術で敵を欺く。敵全体の与ダメージを4%/8%/12%/16%/20%低下させる',
      icon: '/images/skills/hero_skill_icon_500294.png',
    },
    {
      name: 'エメラルドの勇者',
      desc: 'ルム・ボーガンが原住民の狩猟技術を兵士達に伝授する。獣討伐部隊の出征速度が20%/40%/60%/80%/100%上昇する',
      icon: '/images/skills/hero_skill_icon_500295.png',
    },
  ],
  },
} satisfies Hero
