import type { Hero } from '@/types/hero'

export const hector = {
  id: 'hector',
  name: 'ヘクトー',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 5,
  icon: '/images/heroes/hector.jpg',

  exploration: {
    stats: { atk: 3780, def: 4928, hp: 73926 },
    skills: [
    {
      name: '鋼刃戦舞',
      desc: '戦刃を振り回し、力強い舞のような攻撃を仕掛け、4秒間攻撃速度が80%/90%/100%/110%/120%上昇する。その間は凍結、眩暈などの制御効果を無効化する。',
      icon: '/images/skills/hero_skill_icon_500241.png',
    },
    {
      name: '決死の戦い',
      desc: 'HPが50%以下の時、被ダメージが20%/30%/40%/50%/60%低下する。',
      icon: '/images/skills/hero_skill_icon_500242.png',
    },
    {
      name: '不屈の勇者',
      desc: 'HPが50%以下の時、攻撃力が16%/24%/32%/40%/48%上昇する。',
      icon: '/images/skills/hero_skill_icon_500243.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '444.35%', def: '444.35%' },
    skills: [
    {
      name: '生存本能',
      desc: '味方全部隊の被ダメージが40%の確率で10%/20%/30%/40%/50%低下する。',
      icon: '/images/skills/hero_skill_icon_500244.png',
    },
    {
      name: '雷の突撃',
      desc: '盾兵の与ダメージが100%/125%/150%/175%/200%、弓兵の与ダメージが20%/40%/60%/80%/100%上昇。攻撃の度に強化効果が前回の85%になり、10回攻撃する間有効。',
      icon: '/images/skills/hero_skill_icon_500245.png',
    },
    {
      name: '疾風猛襲',
      desc: '味方全部隊の攻撃時に25%の確率で120%/140%/160%/180%/200%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500246.png',
    },
  ],
  },
  specialEquipment: {
    name: '鋼牙戦刃(Lv.10)',
    explorationStats: {
      '攻撃': '765',
      '防御': '999',
      'HP': '14985',
    },
    expeditionStats: {
      '殺傷力': '111.00%',
      'HP': '111.00%',
    },
    skills: [
    {
      name: '血の舞',
      desc: '鋼刃戦舞の持続時間を1.5秒延長する。その間、自身のHPを与ダメージの7%/9%/11%/13%/15%回復。',
      icon: '/images/skills/hero_skill_icon_500247.png',
    },
    {
      name: '難攻不落',
      desc: '防衛部隊の攻撃力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500248.png',
    },
  ],
  },
} satisfies Hero
