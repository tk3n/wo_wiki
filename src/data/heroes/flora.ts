import type { Hero } from '@/types/hero'

export const flora = {
  id: 'flora',
  name: 'フローラ',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 13,
  icon: '/images/heroes/20250519%E8%8B%B1%E9%9B%84%E5%A4%B4%E5%83%8FFlora.jpg',

  exploration: {
    stats: { atk: 21400, def: 21400, hp: 214008 },
    skills: [
    {
      name: '藤蔓の拘束(Lv.5)',
      desc: '強力な蔓を召喚して敵を絡め取る。攻撃力*100%/110%/120%/130%/140%の範囲ダメージを与え、2秒間眩暈状態にする',
      icon: '/images/skills/hero_skill_icon_500511.png',
    },
    {
      name: '百花繚乱(Lv.5)',
      desc: '花の種を投げつけ、攻撃力*20%/25%/30%/35%/40%の範囲ダメージを与える。英雄に命中した場合、瞬時に肉食性の「エイドリアローズ」が開花する。この花はフローラの10%/15%/20%/25%/30%のステータスを持ち、周囲の敵を攻撃する',
      icon: '/images/skills/hero_skill_icon_500512.png',
    },
    {
      name: '自然の力(Lv.5)',
      desc: 'フローラと彼女の召喚した植物のHPが 2%/4%/6%/8%/10%、防御力が4%/8%/12%/16%/20%上昇する',
      icon: '/images/skills/hero_skill_icon_500513.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1621.29%', def: '1621.29%' },
    skills: [
    {
      name: '刺蔓の舞(Lv.5)',
      desc: '味方全体の攻撃時に敵が受けるダメージを50%の確率で10%/20%/30%/40%/50%上昇させる',
      icon: '/images/skills/hero_skill_icon_500514.png',
    },
    {
      name: '茨の花園(Lv.5)',
      desc: '味方盾兵の被ダメージを 5%/10%/15%/20%/25%軽減する。また、槍兵の与ダメージが5%/10%/15%/20%/25%上昇する',
      icon: '/images/skills/hero_skill_icon_500515.png',
    },
    {
      name: '芳香の霧(Lv.5)',
      desc: '4ターン毎に発動し、敵の盾兵の被ダメージを6%/12%/18%/24%/30%, 上昇させ、敵の弓兵の与ダメージを6%/12%/18%/24%/30%低下させる。2ターン持続',
      icon: '/images/skills/hero_skill_icon_500516.png',
    },
  ],
  },
  specialEquipment: {
    name: '豊穣の種(Lv.10)',
    explorationStats: {
      '攻撃': '4338',
      '防御': '4338',
      'HP': '43380',
    },
    expeditionStats: {
      '殺傷力': '405.00%',
      'HP': '405.00%',
    },
    skills: [
    {
      name: '劇毒の花蔓(Lv. 5)',
      desc: '藤蔓とエイドリアローズに毒素を付与し、命中した敵に0.5秒毎に攻撃力*5/10/15/20/25%のダメージを与える。2秒間持続',
      icon: '/images/skills/hero_skill_icon_500517.png',
    },
    {
      name: '自然の祝福(Lv. 5)',
      desc: '防衛部隊のHPが5/7.5/10/12.5/15%増加する',
      icon: '/images/skills/hero_skill_icon_500518.png',
    },
  ],
  },
} satisfies Hero
