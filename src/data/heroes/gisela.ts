import type { Hero } from '@/types/hero'

export const gisela = {
  id: 'gisela',
  name: 'ギーゼラ',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 13,
  icon: '/images/heroes/20250519%E8%8B%B1%E9%9B%84%E5%A4%B4%E5%83%8Fgisela.jpg',

  exploration: {
    stats: { atk: 16416, def: 21400, hp: 321012 },
    skills: [
    {
      name: 'オーバードライブ・アサルト(Lv.5)',
      desc: 'エナジーを50獲得する。5秒間持続し、その間攻撃速度が20%/30%/40%/50%/60%上昇し、防御力が50%/75%/100%/125%/150%上昇する',
      icon: '/images/skills/hero_skill_icon_500501.png',
    },
    {
      name: 'アイアンヘビーブロー(Lv.5)',
      desc: '攻撃力*100%/110%/120%/130%/140%の範囲ダメージを与え、エナジーを25獲得する',
      icon: '/images/skills/hero_skill_icon_500502.png',
    },
    {
      name: 'ポータブルシールド(Lv.5)',
      desc: '通常攻撃する度に3/6/9/12/15のエナジーを獲得し、100に達すると自身の攻撃力*70%/100%/130%/160%/190%に相当するシールドを発動可能。3秒持続',
      icon: '/images/skills/hero_skill_icon_500503.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1621.29%', def: '1621.29%' },
    skills: [
    {
      name: '合金シールド(Lv.5)',
      desc: '味方盾兵の防御力を6%/12%/18%/24%/30%強化する',
      icon: '/images/skills/hero_skill_icon_500504.png',
    },
    {
      name: '臨時防衛工事(Lv.5)',
      desc: '盾兵が攻撃する際、40%の確率で味方全体の防御力が10%/20%/30%/40%/50%上昇する。1ターン持続',
      icon: '/images/skills/hero_skill_icon_500505.png',
    },
    {
      name: '試作型シールド(Lv.5)',
      desc: '40%の確率で被ダメージを10%/20%/30%/40%/50%軽減する',
      icon: '/images/skills/hero_skill_icon_500506.png',
    },
  ],
  },
  specialEquipment: {
    name: 'ヘラクレス(Lv.10)',
    explorationStats: {
      '攻撃': '3,325',
      '防御': '4,338',
      'HP': '65,070',
    },
    expeditionStats: {
      '殺傷力': '405.00%',
      'HP': '405.00%',
    },
    skills: [
    {
      name: 'エナジー精錬(Lv.5)',
      desc: '通常攻撃毎の獲得エナジーが3/6/9/12/15上昇し、エナジーが100に達すると獲得するシールドが攻撃力*70/100/130/160/190%に上昇する',
      icon: '/images/skills/hero_skill_icon_500507.png',
    },
    {
      name: '自動砲台(Lv.5)',
      desc: '防衛部隊の攻撃力が5/7.5/10/12.5/15%上昇する',
      icon: '/images/skills/hero_skill_icon_500508.png',
    },
  ],
  },
} satisfies Hero
