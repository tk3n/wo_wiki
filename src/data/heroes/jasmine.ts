import type { Hero } from '@/types/hero'

export const jasmine = {
  id: 'jasmine',
  name: 'ジャスミン',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 1,
  icon: '/images/heroes/molly.png',

  exploration: {
    stats: { atk: 2220, def: 2220, hp: 22200 },
    skills: [
    {
      name: '超大型雪玉',
      desc: '巨大な雪玉を発射し、円形範囲内のターゲットに攻撃力の180%/198%/216%/234%/252%相当のダメージを与える。さらに凍結状態にする。1.5秒持続。',
      icon: '/images/skills/hero_skill_icon_500121.png',
    },
    {
      name: '不意打ち',
      desc: 'ターゲットに攻撃150%/165%/180%/195%/210%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500122.png',
    },
    {
      name: '少女の執念',
      desc: 'HPが50%以下の時、攻撃速度が20%/30%/40%/50%/60%上昇する。',
      icon: '/images/skills/hero_skill_icon_500123.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '200.16%', def: '200.16%' },
    skills: [
    {
      name: '雪霧の庇護',
      desc: '40%の確率で味方全部隊の被ダメージを10%/20%/30%/40%/50%軽減する。',
      icon: '/images/skills/hero_skill_icon_500124.png',
    },
    {
      name: '氷結の領域',
      desc: '味方全部隊の攻撃時、50%の確率で今回の攻撃によるダメージが10%/20%/30%/40%/50%上昇する。',
      icon: '/images/skills/hero_skill_icon_500125.png',
    },
    {
      name: '不機嫌少女',
      desc: '味方全部隊の与ダメージが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500126.png',
    },
  ],
  },
  specialEquipment: {
    name: '雪の精霊(Lv.10)',
    explorationStats: {
      '攻撃': '450',
      '防御': '450',
      'HP': '4500',
    },
    expeditionStats: {
      '殺傷力': '50%',
      'HP': '50%',
    },
    skills: [
    {
      name: '改造発射機',
      desc: '自身の与ダメージを10%/15%/20%/25%/30%上昇させる',
      icon: '/images/skills/hero_skill_icon_500127.png',
    },
    {
      name: '雪の庇護',
      desc: '防衛部隊の殺傷力を5%/7.5%/10%/12.5%/15%上昇させる',
      icon: '/images/skills/hero_skill_icon_500128.png',
    },
  ],
  },
} satisfies Hero
