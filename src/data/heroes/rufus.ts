import type { Hero } from '@/types/hero'

export const rufus = {
  id: 'rufus',
  name: 'ルーファス',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 11,
  icon: '/images/heroes/rufus.jpg',

  exploration: {
    stats: { atk: 18042, def: 14850, hp: 111388 },
    skills: [
    {
      name: '星屑の衝撃',
      desc: '榴弾を流星の如く降り注がせる。攻撃力200/220/240/260/280%の範囲ダメージを与え、地面を燃焼させる。範囲内のターゲットは0.5秒毎に攻撃力20/22.5/25/27.5/30%のダメージを受ける。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500461.png',
    },
    {
      name: '破片爆弾',
      desc: '破片をばら撒く爆発弾を発射する。ターゲットに攻撃力100/110/120/130/140%のダメージを与え、周囲のターゲットに攻撃力50/55/60/65/70%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500462.png',
    },
    {
      name: '爆怒の暴狂',
      desc: '会心率が7/10/13/16/20%上昇。',
      icon: '/images/skills/hero_skill_icon_500463.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1281.02%', def: '1281.02%' },
    skills: [
    {
      name: '火焔戦団',
      desc: '味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500464.png',
    },
    {
      name: '砕鎧の一撃',
      desc: '弓兵が攻撃する度にターゲットに12%/24%/36%/48%/50%の追加ダメージを与え、さらに被ダメージを5%/10%/15%/20%/25%上昇させる。1ターン持続。',
      icon: '/images/skills/hero_skill_icon_500465.png',
    },
    {
      name: '苛烈震撼',
      desc: '味方全部隊の攻撃時に、20%の確率で敵の殺傷力を10%/20%/30%/40%/50%低下させる。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500466.png',
    },
  ],
  },
  specialEquipment: {
    name: '燃焼隕石(Lv.10)',
    explorationStats: {
      '攻撃': '3652',
      '防御': '3010',
      'HP': '22578',
    },
    expeditionStats: {
      '殺傷力': '320%',
      'HP': '320%',
    },
    skills: [
    {
      name: '戦争の火',
      desc: '通常攻撃時に灼熱の弾丸を射出する。ターゲットを燃焼させ、攻撃力10/15/20/25/30%のダメージを毎秒与える。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500467.png',
    },
    {
      name: '烈火旅団',
      desc: '集結部隊の攻撃力が5/7.5/10/12.5/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500468.png',
    },
  ],
  },
} satisfies Hero
