import type { Hero } from '@/types/hero'

export const gwen = {
  id: 'gwen',
  name: 'グエン',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 5,
  icon: '/images/heroes/1690429616472_1.jpg',

  exploration: {
    stats: { atk: 5987, def: 4928, hp: 36962 },
    skills: [
    {
      name: '砲火砲撃',
      desc: '強力な火力で後列の敵ターゲット（英雄優先）を砲撃し、攻撃力180%/198%/216%/234%/252%の範囲ダメージを与える。爆発による衝撃波がターゲットの攻撃速度を50%低下させる。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500261.png',
    },
    {
      name: '空中狙撃',
      desc: '空中で広い視野を利用してターゲット（英雄優先）を正確に射撃し、攻撃力100%/110%/120%/130%/140%のダメージを与える。50%の確率で要害に命中し、ダメージが2倍になる。',
      icon: '/images/skills/hero_skill_icon_500262.png',
    },
    {
      name: '天火降臨',
      desc: '焼夷弾を発射し、燃焼範囲内の敵ターゲットに毎秒攻撃力35%/38.5%/42%/45.5%/49%のダメージを与える。3秒持続。',
      icon: '/images/skills/hero_skill_icon_500263.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '444.35%', def: '444.35%' },
    skills: [
    {
      name: 'ホークアイ',
      desc: '飛行が得意なグエンは敵の弱点を正確に捕捉できる。そのため味方全部隊の攻撃時、ターゲットの被ダメージが 5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500264.png',
    },
    {
      name: '空中制圧',
      desc: 'グエンは制空権を利用して敵を圧倒できる。このおかげで味方全部隊が5回攻撃する度、ターゲットに20%/40%/60%/80%/100%の追加ダメージを与え、次回ターゲットに攻撃された際に5%/7.5%/10%/12.5%/15%の追加ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500265.png',
    },
    {
      name: '空中制圧',
      desc: 'グエンの兵士たちは手榴弾を装備している。弓兵は4回攻撃する度に敵全体に10%/20%/30%/40%/50%の追加ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500266.png',
    },
  ],
  },
} satisfies Hero
