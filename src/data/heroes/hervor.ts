import type { Hero } from '@/types/hero'

export const hervor = {
  id: 'hervor',
  name: 'ヘルヴィル',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 12,
  icon: '/images/heroes/20250519%E8%8B%B1%E9%9B%84%E5%A4%B4%E5%83%8FHervor-1.jpg',

  exploration: {
    stats: { atk: 13674, def: 17826, hp: 267398 },
    skills: [
    {
      name: 'グラウンドシェイク',
      desc: '前方扇形範囲内の敵に攻撃力*100%/110%/120%/130%/140%のダメージを与え、1秒間眩暈状態にする。さらに恐怖により攻撃力を25%減少させる。3秒間持続。',
      icon: '/images/skills/hero_skill_icon_500471.png',
    },
    {
      name: 'スカイクラッシュ',
      desc: '通常攻撃時に5%/10%/15%/20%/25%の確率で「恐怖」を与える。効果が強化されると対象の被ダメージを3%/6%/9%/12%/15%上昇。最大3回まで重複可能。',
      icon: '/images/skills/hero_skill_icon_500472.png',
    },
    {
      name: 'ロックボディ',
      desc: '被ダメージを5%/10%/15%/20%/25%減少する。さらに戦闘開始後9秒間、眩暈・麻痺・凍結などの中断効果の影響を受けない。',
      icon: '/images/skills/hero_skill_icon_500473.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1451.16%', def: '1451.16%' },
    skills: [
    {
      name: 'ウォーラウド',
      desc: '味方全部隊のダメージが5%/10%/15%/20%/25%上昇。',
      icon: '/images/skills/hero_skill_icon_500474.png',
    },
    {
      name: '不滅の軍団',
      desc: '盾兵が受ける通常攻撃ダメージを5%/10%/15%/20%/25%低下、スキルダメージを6%/12%/18%/24%/30%低下。',
      icon: '/images/skills/hero_skill_icon_500475.png',
    },
    {
      name: '戦火の意志',
      desc: '盾兵の被ダメージが3%/6%/9%/12%/15%減少、与ダメージが2%/4%/6%/8%/10%上昇。',
      icon: '/images/skills/hero_skill_icon_500476.png',
    },
  ],
  },
  specialEquipment: {
    name: 'サスラのハンマー（Lv.10）',
    explorationStats: {
      '攻撃': '2770',
      '防御': '3613',
      'HP': '54202',
    },
    expeditionStats: {
      '殺傷力': '362.50%',
      'HP': '362.50%',
    },
    skills: [
    {
      name: '先祖の栄光',
      desc: '攻撃速度が30%上昇、通常攻撃による「恐怖」の発生確率が25%上昇。',
      icon: '/images/skills/hero_skill_icon_500477.png',
    },
    {
      name: 'フロストガード',
      desc: '防衛部隊の防御力が15%上昇。',
      icon: '/images/skills/hero_skill_icon_500478.png',
    },
  ],
  },
} satisfies Hero
