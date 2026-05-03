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
      desc: '味方全体の攻撃力が3%/3.5%/4%/4.5%/5%上昇する。',
      icon: '/images/skills/hero_skill_icon_500253.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '444.35%', def: '444.35%' },
    skills: [
    {
      name: '多兵種戦術',
      desc: '盾兵と弓兵の被ダメージが3%/6%/9%/12%/15%低下し、与ダメージが3%/6%/9%/12%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500255.png',
    },
    {
      name: '急所突き',
      desc: '槍兵が攻撃する際、20%の確率で敵全体に20%/40%/60%/80%/100%の追加ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500254.png',
    },
    {
      name: '追撃攻勢',
      desc: '部隊が5回攻撃する度に、味方全部隊の与ダメージが 5%/10%/15%/20%/25%上昇し、被ダメージが5%/10%/15%/20%/25%低下する。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500256.png',
    },
  ],
  },
  specialEquipment: {
    name: '雪原の放浪者(Lv.10)',
    explorationStats: {
      '攻撃': '999',
      '防御': '999',
      'HP': '9990',
    },
    expeditionStats: {
      '殺傷力': '111.00%',
      'HP': '111.00%',
    },
    skills: [
    {
      name: '震撼手榴弾',
      desc: '雷の猛攻発動時の手榴弾が25%/27.5%/30%/32.5%/35%の確率でターゲットを眩暈状態にする。0.6/0.7/0.8/0.9/1秒間持続。',
      icon: '/images/skills/hero_skill_icon_500257.png',
    },
    {
      name: '冷静沈着',
      desc: '防衛部隊の防御力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500258.png',
    },
  ],
  },
} satisfies Hero
