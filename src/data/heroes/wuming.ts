import type { Hero } from '@/types/hero'

export const wuming = {
  id: 'wuming',
  name: '無名',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 6,
  icon: '/images/heroes/wuming.jpg',

  exploration: {
    stats: { atk: 4546, def: 5926, hp: 88910 },
    skills: [
    {
      name: '広域展開',
      desc: '長杖を高速で回し、風をも通さない障壁を作り出す。自身を2秒間無敵状態にする。その後、前方を横払いして、攻撃力100%/110%/120%/130%/140%の範囲ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500191.png',
    },
    {
      name: '練気集中',
      desc: '雑念を取り除き、戦いに集中する。自身の攻撃力が8%/12%/16%/20%/24%、防御力が16%/24%/32%/40%/48%上昇する。4秒持続。',
      icon: '/images/skills/hero_skill_icon_500192.png',
    },
    {
      name: '隔山打牛',
      desc: '深い内功により、無名の通常攻撃に貫通力が満ちる。通常攻撃する毎に、ランダムな敵に攻撃力20%/22%/24%/26%/28%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500193.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '540.43%', def: '540.43%' },
    skills: [
    {
      name: '避風補雨',
      desc: '無名は、敵の鋭い刃を避けて無力化する術を熟知している。盾兵が受ける通常攻撃ダメージが5%/10%/15%/20%/25% 、スキルダメージが6%/12%/18%/24%/30%減少する。',
      icon: '/images/skills/hero_skill_icon_500194.png',
    },
    {
      name: '半月飛翔',
      desc: '無名は兵士たちに巧みな技を教える。味方全部隊が与えるダメージが4/%8%/12%/16%/20%上昇する。',
      icon: '/images/skills/hero_skill_icon_500195.png',
    },
    {
      name: '四象明晰',
      desc: '無名の指導により、皆の戦闘スキルに対する理解が更に深まる。味方全部隊のスキルダメージが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500196.png',
    },
  ],
  },
  specialEquipment: {
    name: '降龍棒(Lv.10)',
    explorationStats: {
      '攻撃': '921',
      '防御': '1201',
      'HP': '18022',
    },
    expeditionStats: {
      '殺傷力': '133.50%',
      'HP': '133.50%',
    },
    skills: [
    {
      name: '武学宗師',
      desc: '無名の武技が達人の領域に達し、与ダメージが10/15/20/25/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500197.png',
    },
    {
      name: '経絡浄化',
      desc: '無名の訓練により、防衛部隊は鋼のような意志と体力を獲得する。彼らの防御力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500198.png',
    },
  ],
  },
} satisfies Hero
