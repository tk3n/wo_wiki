import type { Hero } from '@/types/hero'

export const wayne = {
  id: 'wayne',
  name: 'ウェイン',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 6,
  icon: '/images/heroes/wayne.jpg',

  exploration: {
    stats: { atk: 7200, def: 5926, hp: 44454 },
    skills: [
    {
      name: 'ハリケーンスピン',
      desc: '回転ブーメランを投げ、前方の直線上の敵に攻撃力100%/110%/120%/130%/140%の範囲ダメージを与える。ブーメランが戻る際、途中のターゲットに再度同じダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500311.png',
    },
    {
      name: 'ファントムフラッシュ',
      desc: 'ウェインは常人には見えない速度で早撃ちする。通常攻撃時、15%/20%/25%/30%/35%の確率で再度素早く攻撃し、対象に追加で1回のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500312.png',
    },
    {
      name: '正午の刻！',
      desc: 'ウェインの銃の腕が神業の域に達する。ダメージを与える際3%/6%/9%/12%/15%の確率で会心が発生する。',
      icon: '/images/skills/hero_skill_icon_500313.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '540.43%', def: '540.43%' },
    skills: [
    {
      name: 'サンダーサプライズ',
      desc: '味方全部隊が4ターン毎に1度追加攻撃を行い、20%/40%/60%/80%/100%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500314.png',
    },
    {
      name: '迂回攻撃',
      desc: '弓兵が2回攻撃する毎に、敵槍兵に8%/16%/24%/32%/40%、敵弓兵に4%/8%/12%/16%/20%の追加ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500315.png',
    },
    {
      name: '電光石火',
      desc: '味方全部隊の通常攻撃で5%/10%/15%/20%/25%の確率で会心を発生させる。',
      icon: '/images/skills/hero_skill_icon_500316.png',
    },
  ],
  },
  specialEquipment: {
    name: 'パワーブーメラン(Lv.10)',
    explorationStats: {
      '攻撃': '1457',
      '防御': '1201',
      'HP': '9011',
    },
    expeditionStats: {
      '殺傷力': '133.50%',
      'HP': '133.50%',
    },
    skills: [
    {
      name: '銃闘術',
      desc: 'ウェインは射撃と体術を完璧に組み合わせ、瞬時に5連射撃を繰り出す。ランダムなターゲットに攻撃力の40%/44%/48%/52%/56%のダメージを与える。対象が護衛の場合、40%/55%/70%/85%/100%の確率で即死させる。',
      icon: '/images/skills/hero_skill_icon_500317.png',
    },
    {
      name: '先手必勝',
      desc: '防衛部隊の殺傷力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500318.png',
    },
  ],
  },
} satisfies Hero
