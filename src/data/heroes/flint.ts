import type { Hero } from '@/types/hero'

export const flint = {
  id: 'flint',
  name: 'フリント',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 2,
  icon: '/images/heroes/flint.png',

  exploration: {
    stats: { atk: 2043, def: 2664, hp: 39960 },
    skills: [
    {
      name: '復讐の焔',
      desc: '0.5秒毎に攻撃力60%/66%/72%/78%/84%のダメージを与え、ターゲットの被ダメージを10%/15%/20%/25%/30%上昇させる。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500211.png',
    },
    {
      name: '怒りの火',
      desc: 'HPが50%を下回った際、即座に自分のHP上限の20%/25%/30%/35%/40%を回復する。1回の戦闘で1度しか発動しない。',
      icon: '/images/skills/hero_skill_icon_500212.png',
    },
    {
      name: '熱源拡散',
      desc: '自軍全体の英雄の攻撃速度が3%/4%/5%/6%/7%上昇する。',
      icon: '/images/skills/hero_skill_icon_500213.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '240.19%', def: '240.19%' },
    skills: [
    {
      name: '野火',
      desc: 'フリント率いる盾兵の与ダメージが20%/40%/60%/80%/100%上昇する。',
      icon: '/images/skills/hero_skill_icon_500214.png',
    },
    {
      name: '森林火災',
      desc: '味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500215.png',
    },
    {
      name: '灼熱の魂',
      desc: '味方全部隊の殺傷力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500216.png',
    },
  ],
  },
  specialEquipment: {
    name: 'グラウルング(Lv.10)',
    explorationStats: {
      '攻撃': '414',
      '防御': '540',
      'HP': '8100',
    },
    expeditionStats: {
      '殺傷力': '60%',
      'HP': '60%',
    },
    skills: [
    {
      name: '復讐狂熱',
      desc: '”怒りの火”発動後、攻撃力が戦闘終了まで8%/12%/16%/20%/24%上昇する。',
      icon: '/images/skills/hero_skill_icon_500217.png',
    },
    {
      name: '竜の吐息',
      desc: '防衛部隊の攻撃を5%/7.5%/10%/12.5%/15%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500218.png',
    },
  ],
  },
} satisfies Hero
