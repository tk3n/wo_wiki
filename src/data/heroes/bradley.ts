import type { Hero } from '@/types/hero'

export const bradley = {
  id: 'bradley',
  name: 'ブラッドリー',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 7,
  icon: '/images/heroes/20240222_3.jpg',

  exploration: {
    stats: { atk: 8656, def: 7126, hp: 53446 },
    skills: [
    {
      name: '破壊重砲',
      desc: '重砲を殲滅モードに変化させ、驚異的な威力の砲弾を発射する。攻撃力300%/330%/360%/390%/420%の範囲ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500331.png',
    },
    {
      name: '焼夷弾',
      desc: '特殊な砲弾を発射し、ターゲットに攻撃力60%/66%/72%/78%/84%の範囲ダメージを与え、さらに燃焼エリアを作り出す。燃焼エリアは2秒間燃え続け、0.5秒毎のエリアにいる敵に攻撃力17%/19%/21%/23%/25%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500332.png',
    },
    {
      name: '不屈の勇将',
      desc: '百戦錬磨のブラッドリーは危機に屈しない。攻撃力が10%/14%/18%/22%/26%上昇する。',
      icon: '/images/skills/hero_skill_icon_500333.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '650.52%', def: '650.52%' },
    skills: [
    {
      name: '老兵の誇り',
      desc: '豊富な作戦経験により、ブラッドリーは敵を効率的に殲滅する方法を熟知している。彼の指揮により味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500334.png',
    },
    {
      name: '正面突破',
      desc: 'ブラッドリーは砲火で敵軍の前衛を崩すことを得意としている。味方全部隊の槍兵に対する与ダメージが6%/12%/18%/24%/30%、盾兵に対する与ダメージが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500335.png',
    },
    {
      name: '戦局洞察',
      desc: 'ブラッドリーは敵の一瞬の気の緩みをも見逃さない。4ターン毎に、味方全部隊の与ダメージが6%/12%/18%/24%/30%上昇する。2ターン持続。',
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
      desc: '耳をつんざくような大砲の轟音は敵を威圧するだけでなく、味方の士気をも高める！「破壊重砲」を発射すると、味方の英雄と護衛の攻撃速度が6%/8%/10%/12%/14%上昇する。5秒持続。',
      icon: '/images/skills/hero_skill_icon_500337.png',
    },
    {
      name: '精密な布陣',
      desc: '攻城のプロとして、ブラッドリーはどのような防衛線が攻城側を思い悩ませるか熟知している。彼が敷いた防衛線により防衛部隊の攻撃力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500338.png',
    },
  ],
  },
} satisfies Hero
