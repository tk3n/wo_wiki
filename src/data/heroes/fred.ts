import type { Hero } from '@/types/hero'

export const fred = {
  id: 'fred',
  name: 'フレッド',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 9,
  icon: '/images/heroes/fred.jpg',

  exploration: {
    stats: { atk: 10300, def: 10300, hp: 103008 },
    skills: [
    {
      name: '人工降雨',
      desc: '0.5秒毎に範囲内のターゲットに攻撃力60%66%72%/78%/84%のダメージを与え、被ダメージを15%上昇させる。3秒間持続。',
      icon: '/images/skills/hero_skill_icon_500391.png',
    },
    {
      name: '高圧水銃',
      desc: 'フレッドの攻撃力200%/220%/240%/260%/280%に相当するダメージを与え、敵に付与されている強化効果を洗い流す。',
      icon: '/images/skills/hero_skill_icon_500392.png',
    },
    {
      name: '特級警戒',
      desc: 'HPが50%未満の時、攻撃力が8%/12%/16%/20%/24%、防御力が25%/37.5%/50%/62.5%/75%上昇する。',
      icon: '/images/skills/hero_skill_icon_500393.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '940.75%', def: '940.75%' },
    skills: [
    {
      name: '放水砲制圧',
      desc: '敵全部隊の殺傷力を 4%/8%/12%/16%/20%低下させる。',
      icon: '/images/skills/hero_skill_icon_500394.png',
    },
    {
      name: '酸性溶液',
      desc: '敵盾兵の被ダメージを4%/8%/12%/16%/20%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500395.png',
    },
    {
      name: '猛烈な攻勢',
      desc: '槍兵の攻撃4回毎にターゲットへ40%/80%/120%/160%/200%の追加ダメージを与え、さらに敵全体の次ターンの与ダメージを4%/8%/12%/16%/20% 低下させる。',
      icon: '/images/skills/hero_skill_icon_500396.png',
    },
  ],
  },
  specialEquipment: {
    name: '浴炎者(Lv.10)',
    explorationStats: {
      '攻撃': '2088',
      '防御': '2088',
      'HP': '20880',
    },
    expeditionStats: {
      '殺傷力': '232.00%',
      'HP': '232.00%',
    },
    skills: [
    {
      name: '烈火の英豪',
      desc: '攻撃力が8%/12%/16%/20%/24%上昇し、強化効果を1つ消去する度に防御力が2%/4%/6%/8%/10%上昇する。5回まで重ね掛け可能、戦闘終了まで持続。',
      icon: '/images/skills/hero_skill_icon_500397.png',
    },
    {
      name: '英傑の鼓舞',
      desc: '集結部隊の攻撃力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500398.png',
    },
  ],
  },
} satisfies Hero
