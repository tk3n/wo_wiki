import type { Hero } from '@/types/hero'

export const jasser = {
  id: 'jasser',
  name: 'ジャセル',
  rarity: 'SR',
  troopType: 'archer',
  heroType: '発展型',
  icon: '/images/heroes/jasser.jpg',

  exploration: {
    stats: { atk: 2157, def: 2220, hp: 13320 },
    skills: [
    {
      name: '多重射撃',
      desc: '精密ロックオンをした後、連続で弾を3発発射する。それぞれ攻撃力100%、125%/137.5%/150%/162.5%/175%、 150%/165%/180%/195%/210%のダメージを与える。3発目は範囲ダメージとなる。',
      icon: '/images/skills/hero_skill_icon_500281.png',
    },
    {
      name: '火力制圧',
      desc: '巧みな銃撃と強力な火力で敵を抑え込む。ターゲットに攻撃力100%/110%/120%/130%/140%のダメージを与え、相手の攻撃速度を30%/35%/40%/45%/50%低下させる。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500282.png',
    },
    {
      name: '弓兵の本能',
      desc: '達人の域の射撃技術は既にジャセルの本能と一体化している。ジャセルの攻撃力が8%/12%/16%/20%/24%上昇する。',
      icon: '/images/skills/hero_skill_icon_500283.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '140.11%', def: '140.11%' },
    skills: [
    {
      name: '戦術演習',
      desc: 'ジャセルは勇気と知恵を兼ね備えている。その優れた戦術と指揮能力により、味方全部隊のダメージが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500284.png',
    },
    {
      name: '博学多識',
      desc: 'ジャセルの博識が町に恩恵をもたらす。科学研究の速度が 3%/6%/9%/12%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500285.png',
    },
  ],
  },
} satisfies Hero
