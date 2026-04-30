import type { Hero } from '@/types/hero'

export const norah = {
  id: 'norah',
  name: 'ノラ',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 5,
  icon: '/images/heroes/1690429616480_2.jpg',

  exploration: {
    stats: { atk: 4928, def: 4928, hp: 49284 },
    skills: [
    {
      name: '雷の猛攻',
      desc: '同時に強力な威力の手榴弾を5個投げ、ランダムなターゲット（英雄優先）に攻撃力60%/66%/72%/78%/84%の範囲ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500251.png',
    },
    {
      name: '閃光弾',
      desc: '閃光弾を投げ、一定範囲内のターゲットに攻撃力 50%/55%/60%/65%/70%のダメージを与え、眩暈状態にする。1.5秒持続。',
      icon: '/images/skills/hero_skill_icon_500252.png',
    },
    {
      name: '電光石火',
      desc: '鳴り響くエンジン音の中、激しい攻撃を仕掛ける。味方全体の攻撃力が3%/3.5%/4%/4.5%/5%上昇する。',
      icon: '/images/skills/hero_skill_icon_500253.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '444.35%', def: '444.35%' },
    skills: [
    {
      name: '多兵種戦術',
      desc: 'ノラは多兵種の共同作戦を得意とする。彼女の指揮により、盾兵と弓兵の被ダメージが3%/6%/9%/12%/15%低下し、与ダメージが3%/6%/9%/12%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500255.png',
    },
    {
      name: '急所突き',
      desc: 'ノラは奇襲の達人。槍兵が攻撃する際、20%の確率で敵全体に20%/40%/60%/80%/100%の追加ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500254.png',
    },
    {
      name: '追撃攻勢',
      desc: 'ノラの鼓舞が兵士たちを戦うほどに勇猛にする。彼女の率いる部隊が5回攻撃する度に、味方全部隊の与ダメージが 5%/10%/15%/20%/25%上昇し、被ダメージが5%/10%/15%/20%/25%低下する。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500256.png',
    },
  ],
  },
} satisfies Hero
