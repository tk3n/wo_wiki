import type { Hero } from '@/types/hero'

export const sonya = {
  id: 'sonya',
  name: 'ソニヤ',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 8,
  icon: '/images/heroes/6.jpg',

  exploration: {
    stats: { atk: 8568, def: 8568, hp: 85692 },
    skills: [
    {
      name: '極度厳寒',
      desc: '冷凍液を噴射し、ターゲット1体を1.5秒凍結させ、さらにターゲットとその周辺に攻撃力220%/240%/260%/280%/300%の範囲ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500351.png',
    },
    {
      name: '冷凍弾',
      desc: '冷凍弾を1つ投射し、単体ターゲットに攻撃力100%/110%/120%/130%/140%のダメージを与え、その周辺のターゲットの攻撃速度を15%低下させる。3秒持続',
      icon: '/images/skills/hero_skill_icon_500352.png',
    },
    {
      name: '金の亡者',
      desc: '攻撃速度が10%/15%/20%/25%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500353.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '+780.62%', def: '+780.62%' },
    skills: [
    {
      name: 'トレジャーハンター',
      desc: '味方全部隊の与ダメージが4%/8%/12%/16%/20%上昇する。',
      icon: '/images/skills/hero_skill_icon_500354.png',
    },
    {
      name: '賞金の誘惑',
      desc: '率いる槍兵が2回攻撃する度にターゲットに15%/30%/45%/60%/75%の追加ダメージを与える。さらに、味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。1ターン持続。',
      icon: '/images/skills/hero_skill_icon_500355.png',
    },
    {
      name: '激流衝撃',
      desc: '槍兵は5ターン毎にターゲットに50%/100%/150%/200%/250%のダメージを与え、1ターン眩暈状態にする。',
      icon: '/images/skills/hero_skill_icon_500356.png',
    },
  ],
  },
  specialEquipment: {
    name: '海蛙(Lv.10)',
    explorationStats: {
      '攻撃': '1,737',
      '防御': '1,737',
      'HP': '17,370',
    },
    expeditionStats: {
      '殺傷力': '+193.00%',
      'HP': '+193.00%',
    },
    skills: [
    {
      name: '骨の髄まで凍る',
      desc: '自身の攻撃力が8%/12%/16%/20%/24%上昇する。さらに、極度厳寒の凍結効果が終了した際、周囲に攻撃力50%/55%/60%/65%/70%の砕氷ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500357.png',
    },
    {
      name: '渦潮砲台',
      desc: '水柱を発射する防御砲台を設置する。防衛部隊の殺傷力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500358.png',
    },
  ],
  },
} satisfies Hero
