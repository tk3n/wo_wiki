import type { Hero } from '@/types/hero'

export const seo_yoon = {
  id: 'seo_yoon',
  name: 'ソユン',
  rarity: 'SR',
  troopType: 'archer',
  heroType: '発展型',
  icon: '/images/heroes/seo_yoon.jpg',

  exploration: {
    stats: { atk: 2157, def: 2220, hp: 13320 },
    skills: [
    {
      name: '夜明けの太鼓',
      desc: '太鼓で人々を奮い立たせ、戦意を高める。味方全体の英雄と護衛が1.5%/2%/2.5%/3%/3.5%、攻撃速度が2.5%/3%/3.5%/4%/4.5%上昇する。4秒持続。',
      icon: '/images/skills/hero_skill_icon_500271.png',
    },
    {
      name: '真向勝負',
      desc: 'ターゲットの弱点を狙い、全力で太鼓のばちを投げつける。相手に攻撃力の150%/165%/180%/195%/210%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500272.png',
    },
    {
      name: '烈風のリズム',
      desc: '風のようなステップを踏み、攻勢をますます激しくさせる。通常攻撃を3回行う度、自身の攻撃速度が 1%/2%/3%/4%/5%上昇する。戦闘終了まで持続。',
      icon: '/images/skills/hero_skill_icon_500273.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '140.11%', def: '140.11%' },
    skills: [
    {
      name: '征伐の陣太鼓',
      desc: '出征時、ソユンは士気を高めるために太鼓を叩く。味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500274.png',
    },
    {
      name: '治癒の舞',
      desc: '古来の伝統的な医学で負傷兵を治療する。軍医所の治療速度が10%/20%/30%/40%/50%上昇する。',
      icon: '/images/skills/hero_skill_icon_500275.png',
    },
  ],
  },
} satisfies Hero
