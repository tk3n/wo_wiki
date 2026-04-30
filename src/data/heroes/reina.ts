import type { Hero } from '@/types/hero'

export const reina = {
  id: 'reina',
  name: 'レイナ',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 4,
  icon: '/images/heroes/1690429616516_7.jpg',

  exploration: {
    stats: { atk: 4106, def: 4106, hp: 41070 },
    skills: [
    {
      name: '幻影急襲',
      desc: '敵の後方に分身を召喚して奇襲を仕掛け、攻撃力300%/330%/360%390%/420%の範囲ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500141.png',
    },
    {
      name: '隠身の秘術',
      desc: '通常攻撃を受けた際、5%/10%/15%/20%/25%の確率で幻術で相手を騙し、ダメージを免れる。',
      icon: '/images/skills/hero_skill_icon_500142.png',
    },
    {
      name: '魍魎の毒',
      desc: '敵（英雄が優先ターゲット）に幻術を施し、攻撃力100%/110%/120%/130%/140%のダメージを与える。さらに行動不能状態を付与する。1.5秒持続。',
      icon: '/images/skills/hero_skill_icon_500143.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '370.29%', def: '370.29%' },
    skills: [
    {
      name: '暗殺者の本能',
      desc: 'レイナはどのように敵の弱点を猛撃すれば最も効果的か知っている。味方全部隊の通常攻撃の与ダメージを10%/15%/20%/25%/30%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500144.png',
    },
    {
      name: '残像の足跡',
      desc: 'レイナの指揮は軽快で変化に富む。味方全部隊が通常攻撃を受けた際、4%/8%/12%/16%/20%の確率でダメージを回避する。',
      icon: '/images/skills/hero_skill_icon_500145.png',
    },
    {
      name: '影刃',
      desc: 'レイナの戦術は変幻自在。槍兵が25%の確率で1回追加攻撃を行い、120%/140%/160%/180%/200%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500146.png',
    },
  ],
  },
} satisfies Hero
