import type { Hero } from '@/types/hero'

export const lloyd = {
  id: 'lloyd',
  name: 'ロイド',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 11,
  icon: '/images/heroes/Lloyd.jpg',

  exploration: {
    stats: { atk: 14850, def: 14850, hp: 148518 },
    skills: [
    {
      name: '飽和爆撃',
      desc: 'プロペラ付きの爆弾ロボットを3体召喚し、ターゲットを爆撃する。それぞれのロボットが攻撃力70/77/84/91/98%の範囲ダメージを与える',
      icon: '/images/skills/hero_skill_icon_500451.png',
    },
    {
      name: '弱点痛撃',
      desc: '攻撃力100/110/120/130/140%のダメージを与え、ターゲットの被ダメージが10/12,5/15/17.5/20%上昇。3秒持続',
      icon: '/images/skills/hero_skill_icon_500452.png',
    },
    {
      name: '熟練技術',
      desc: 'ロイドの攻撃速度が10/15/20/25/30%上昇',
      icon: '/images/skills/hero_skill_icon_500453.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1281.02%', def: '1281.02%' },
    skills: [
    {
      name: '群鳥の侵襲',
      desc: '敵全体の殺傷力を4/8/12/16/20%低下させる',
      icon: '/images/skills/hero_skill_icon_500454.png',
    },
    {
      name: '氷霧爆弾',
      desc: '3ターン毎に、槍兵のダメージが30/60/90/120/150%上昇し、敵軍の殺傷力を6/12/18/24/30%低下させる。1ターン持続',
      icon: '/images/skills/hero_skill_icon_500455.png',
    },
    {
      name: '千変万化',
      desc: '40%の確率で味方全部隊の殺傷力が10/20/30/40/50%上昇する',
      icon: '/images/skills/hero_skill_icon_500456.png',
    },
  ],
  },
  specialEquipment: {
    name: '巧匠の秘宝(Lv.10)',
    explorationStats: {
      '攻撃': '3,010',
      '防御': '3,010',
      'HP': '30,105',
    },
    expeditionStats: {
      '殺傷力': '320%',
      'HP': '320%',
    },
    skills: [
    {
      name: '霜凍の吐息',
      desc: '通常攻撃時に攻撃力*3/6/9/12/15%の追加ダメージを与え、ターゲットの攻撃速度を3/6/9/12/15%低下させる。2秒持続。効果は重複しない',
      icon: '/images/skills/hero_skill_icon_500457.png',
    },
    {
      name: '鋼鉄の迷城',
      desc: '防衛部隊の攻撃力が5/7.5/10/12.5/15%上昇する',
      icon: '/images/skills/hero_skill_icon_500458-1.png',
    },
  ],
  },
} satisfies Hero
