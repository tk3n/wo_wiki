import type { Hero } from '@/types/hero'

export const natalia = {
  id: 'natalia',
  name: 'ナタリア',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 1,
  icon: '/images/heroes/natalia.png',

  exploration: {
    stats: { atk: 1873, def: 2220, hp: 36630 },
    skills: [
    {
      name: '獣の怒り',
      desc: '白熊が立ち上がって地面を叩き、攻撃160%/176%/192%/208%/224%の範囲ダメージを与える。さらに範囲内の敵を撃退して眩暈状態にする。',
      icon: '/images/skills/hero_skill_icon_500091.png',
    },
    {
      name: '激励',
      desc: '鞭を振り回し、ターゲットに攻撃150%/165%/180%/195%/210%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500092.png',
    },
    {
      name: '狂乱の炎',
      desc: 'ダメージを受けた際、ナタリアは10%の確率で攻撃力が4%/6%/8%/10%/12%上昇する。3秒持続（5回まで重ね掛け可能）。',
      icon: '/images/skills/hero_skill_icon_500093.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '200.16%', def: '200.16%' },
    skills: [
    {
      name: '野性の守護',
      desc: '40%の確率で味方全部隊の被ダメージを10%/20%/30%/40%/50%軽減する。',
      icon: '/images/skills/hero_skill_icon_500095.png',
    },
    {
      name: '獣群の王',
      desc: '味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500094.png',
    },
    {
      name: '野獣召喚',
      desc: '味方全部隊のダメージが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500096.png',
    },
  ],
  },
  special: [
    {
      name: '白熊の力',
      desc: 'ナタリアが出征するかどうかに関わらず、味方全部隊の攻撃力と防御力が2%/4%/6%/8%/10%上昇する。',
      icon: '/images/skills/%E5%A8%9C%E5%A1%94%E8%8E%89%E4%BA%9A%E5%A4%A9%E8%B5%8B.png',
    },
  ],
  specialEquipment: {
    name: '狂風を操る者(Lv.10)',
    explorationStats: {
      '攻撃': '379',
      '防御': '495',
      'HP': '7425',
    },
    expeditionStats: {
      '殺傷力': '55.50%',
      'HP': '55.50%',
    },
    skills: [
    {
      name: '一心',
      desc: '与ダメージが10%/15%/20%/25%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500097.png',
    },
    {
      name: '不敗の軍',
      desc: '集結部隊の殺傷力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500098.png',
    },
  ],
  },
} satisfies Hero
