import type { Hero } from '@/types/hero'

export const rene = {
  id: 'rene',
  name: 'レネ',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 6,
  icon: '/images/heroes/rene.jpg',

  exploration: {
    stats: { atk: 5926, def: 5926, hp: 59274 },
    skills: [
    {
      name: '幻覚の雲霧',
      desc: '範囲内の敵に攻撃力100%/110%/120%/130%/140%のダメージを与え、1秒間混乱状態にする。混乱状態の敵は敵味方問わず、周囲のターゲットを無差別に攻撃する。',
      icon: '/images/skills/hero_skill_icon_500301.png',
    },
    {
      name: '星空の油絵',
      desc: '範囲内のターゲットに攻撃力50%/55%/60%/65%/70%のダメージを与え、星状の印を付与する。印を付与されたターゲットは、被ダメージが2%/3%/4%/5%/6%上昇する。4秒持続。',
      icon: '/images/skills/hero_skill_icon_500302.png',
    },
    {
      name: '夢の視界',
      desc: '印が存在している間レネの攻撃力が8%/12%/16%/20%/24%上昇し、印のついたターゲットに対するレネの与ダメージが4%/6%/8%/10%/12%上昇する。',
      icon: '/images/skills/hero_skill_icon_500303.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '540.43%', def: '540.43%' },
    skills: [
    {
      name: '夢の痕跡',
      desc: '槍兵は2ターン毎にターゲットに夢の痕跡を付与する。夢の痕跡が付与されたターゲットは、次のターンに追加で40%/80%/120%/160%/200%の槍兵ダメージを受ける。夢の痕跡は1ターン持続。',
      icon: '/images/skills/hero_skill_icon_500304.png',
    },
    {
      name: 'ドリームイーター',
      desc: '夢の痕跡のあるターゲットに対する槍兵の与ダメージが30%/60%/90%/120%/150%上昇する。',
      icon: '/images/skills/hero_skill_icon_500305.png',
    },
    {
      name: '夢の欠片',
      desc: '夢の痕跡のあるターゲットに対する味方全部隊の与ダメージが15%/30%/45%/60%/75%上昇する。',
      icon: '/images/skills/hero_skill_icon_500306.png',
    },
  ],
  },
  specialEquipment: {
    name: 'マジカルカラーボール(Lv.5)',
    explorationStats: {
      '攻撃': '1201',
      '防御': '1201',
      'HP': '12015',
    },
    expeditionStats: {
      '殺傷力': '133.50%',
      'HP': '133.50%',
    },
    skills: [
    {
      name: '幻の夢',
      desc: '混乱の粉末を鋼の針に塗布し、攻撃時に 2%/3.5%/5%/6.5%/8% の確率でターゲットを1秒間混乱させる。混乱状態の敵は周囲のターゲットを無差別に攻撃する。',
      icon: '/images/skills/hero_skill_icon_500307.png',
    },
    {
      name: '美しい幻想',
      desc: '結集した部隊の殺傷力が 5%/7.5%/10%/12.5%/15% 上昇する。',
      icon: '/images/skills/hero_skill_icon_500308.png',
    },
  ],
  },
} satisfies Hero
