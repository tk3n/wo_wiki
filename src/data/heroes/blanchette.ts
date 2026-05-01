import type { Hero } from '@/types/hero'

export const blanchette = {
  id: 'blanchette',
  name: 'ブランシュ',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 10,
  icon: '/images/heroes/blanchette350.jpg',

  exploration: {
    stats: { atk: 15021, def: 12364, hp: 92740 },
    skills: [
    {
      name: '緋紅の一閃',
      desc: '特殊な猟銃と卓越した射撃技術により、彼女は一瞬で異なる3つの目標に命中させ、攻撃力200/220/240/260/280%のダメージを与える。さらに5秒治療不可状態にする。',
      icon: '/images/skills/%E5%B0%8F%E7%BA%A2%E5%B8%BD8.png',
    },
    {
      name: '深紅の破片',
      desc: '無数の小さな結晶弾を発射し、攻撃力100/110/120/130/140%の範囲ダメージを与える。',
      icon: '/images/skills/%E5%B0%8F%E7%BA%A2%E5%B8%BD7.png',
    },
    {
      name: '猩紅の追跡',
      desc: 'ブランシュは手負いの獲物を決して逃がさない。ターゲットのHP値が低いほど、ブランシュの通常攻撃のダメージが高くなる。最大10/20/30/40/50%上昇する。',
      icon: '/images/skills/%E5%B0%8F%E7%BA%A2%E5%B8%BD6.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1110.88%', def: '1110.88%' },
    skills: [
    {
      name: '真紅の刃',
      desc: '兵士に更なる威力を持つ武器を持たせ、味方全部隊の殺傷力が5/10/15/20/25%上昇する。',
      icon: '/images/skills/%E5%B0%8F%E7%BA%A2%E5%B8%BD5.png',
    },
    {
      name: '熾紅爆裂',
      desc: '弓兵の攻撃時、3ターン毎にクリスタルの刃を放ち、対象に15/30/45/60/75%の追加ダメージを与える。',
      icon: '/images/skills/%E5%B0%8F%E7%BA%A2%E5%B8%BD4.png',
    },
    {
      name: '黒紅の狙撃',
      desc: 'ブランシュの熟達した狙撃指揮により、弓兵は2回攻撃する毎に敵槍兵に8/16/24/32/40%、敵弓兵に 4/8/12/16/20% の追加ダメージを与える。',
      icon: '/images/skills/%E5%B0%8F%E7%BA%A2%E5%B8%BD3.png',
    },
  ],
  },
  specialEquipment: {
    name: 'ウルフハンター(Lv.10)',
    explorationStats: {
      '攻撃': '3,041',
      '防御': '2,506',
      'HP': '18,798',
    },
    expeditionStats: {
      '殺傷力': '277.50%',
      'HP': '277.50%',
    },
    skills: [
    {
      name: '赤紅の狂熱',
      desc: '熱狂的なブランシュの狩猟により、攻撃速度が10/15/20/25/30%上昇する。さらに緋紅の一閃による治療禁止効果が5秒延長する。',
      icon: '/images/skills/%E5%B0%8F%E7%BA%A2%E5%B8%BD2.png',
    },
    {
      name: '炎紅の雷霆',
      desc: 'ブランシュの効率的な攻撃作戦により、集結部隊は灼熱の稲妻となって敵防衛線を引き裂き、殺傷力が5/7.5/10/12.5/15%上昇する。',
      icon: '/images/skills/%E5%B0%8F%E7%BA%A2%E5%B8%BD1.png',
    },
  ],
  },
} satisfies Hero
