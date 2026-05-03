import type { Hero } from '@/types/hero'

export const bradley = {
  id: 'bradley',
  name: 'ブラッドリー',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 7,
  icon: '/images/heroes/bradley.jpg',

  exploration: {
    stats: { atk: 8656, def: 7126, hp: 53446 },
    skills: [
    {
      name: '破壊重砲',
      desc: '攻撃力300%/330%/360%/390%/420%の範囲ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500331.png',
    },
    {
      name: '焼夷弾',
      desc: '特殊な砲弾を発射し、ターゲットに攻撃力60%/66%/72%/78%/84%の範囲ダメージを与え、さらに燃焼エリアを作り出す。燃焼エリアは2秒間燃え続け、0.5秒毎のエリアにいる敵に攻撃力17%/19%/21%/23%/25%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500332.png',
    },
    {
      name: '不屈の勇将',
      desc: '攻撃力が10%/14%/18%/22%/26%上昇する。',
      icon: '/images/skills/hero_skill_icon_500333.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '650.52%', def: '650.52%' },
    skills: [
    {
      name: '老兵の誇り',
      desc: '味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500334.png',
    },
    {
      name: '正面突破',
      desc: '味方全部隊の槍兵に対する与ダメージが6%/12%/18%/24%/30%、盾兵に対する与ダメージが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500335.png',
    },
    {
      name: '戦局洞察',
      desc: '4ターン毎に、味方全部隊の与ダメージが6%/12%/18%/24%/30%上昇する。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500336.png',
    },
  ],
  },
  specialEquipment: {
    name: '雷霆重砲(Lv.10)',
    explorationStats: {
      '攻撃': '1752',
      '防御': '1444',
      'HP': '10833',
    },
    expeditionStats: {
      '殺傷力': '160.50%',
      'HP': '160.50%',
    },
    skills: [
    {
      name: '集中砲火',
      desc: '「破壊重砲」を発射すると、味方の英雄と護衛の攻撃速度が6%/8%/10%/12%/14%上昇する。5秒持続。',
      icon: '/images/skills/hero_skill_icon_500337.png',
    },
    {
      name: '精密な布陣',
      desc: '防衛部隊の攻撃力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500338.png',
    },
  ],
  },
} satisfies Hero
