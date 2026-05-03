import type { Hero } from '@/types/hero'

export const lyon = {
  id: 'lyon',
  name: 'リオン',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 4,
  icon: '/images/heroes/1690429616507_5.jpg',

  exploration: {
    stats: { atk: 4989, def: 4106, hp: 30802 },
    skills: [
    {
      name: 'シドラク戦歌',
      desc: '味方全体の異常状態(凍結、眩暈など)を解除し、攻撃力を3%/4%/5%/6%/7% 上昇させる。3/3.5/4/4.5/5秒持続。その間、あらゆる異常状態の影響を受けない。',
      icon: '/images/skills/hero_skill_icon_500221.png',
    },
    {
      name: '絶命の終曲',
      desc: '射線上の敵に攻撃力220%/240%/260%/280%/300%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500222.png',
    },
    {
      name: '不協和音',
      desc: '敵全体の攻撃速度を 1%/1.5%/2%/2.5%/3%低下させる。治療効果を40%/45%/50%/55%/60%低下させる',
      icon: '/images/skills/hero_skill_icon_500223.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '370.29%', def: '370.29%' },
    skills: [
    {
      name: '獅子の歌',
      desc: '40%の確率で味方全部隊のダメージが10%/20%/30%/40%/50%上昇する。',
      icon: '/images/skills/hero_skill_icon_500224.png',
    },
    {
      name: '悲しき音色',
      desc: '敵軍全部隊のダメージを4%/8%/12%/16%/20%低下させる。',
      icon: '/images/skills/hero_skill_icon_500225.png',
    },
    {
      name: 'オーナイのカデンツァ',
      desc: '弓兵が3回攻撃する毎に自身の攻撃力が1%/2%/3%/4%/5%上昇する。重ね掛け可能、戦闘終了まで持続。',
      icon: '/images/skills/hero_skill_icon_500226.png',
    },
  ],
  },
  specialEquipment: {
    name: 'エラの涙(Lv.10)',
    explorationStats: {
      '攻撃': '1010',
      '防御': '832',
      'HP': '6243',
    },
    expeditionStats: {
      '殺傷力': '92.50%',
      'HP': '92.50%',
    },
    skills: [
    {
      name: 'エラの挽歌',
      desc: '「シドラク戦歌」を発動後、自身の攻撃力が7%/9%/11%/13%/15%上昇する。戦闘終了まで持続。',
      icon: '/images/skills/hero_skill_icon_500227.png',
    },
    {
      name: 'イラノンの執念',
      desc: '防衛部隊の殺傷力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500228.png',
    },
  ],
  },
} satisfies Hero
