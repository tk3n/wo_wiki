import type { Hero } from '@/types/hero'

export const edith = {
  id: 'edith',
  name: 'エディス',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 7,
  icon: '/images/heroes/20240222_2.jpg',

  exploration: {
    stats: { atk: 5466, def: 7126, hp: 106892 },
    skills: [
    {
      name: '怒りの鉄拳',
      desc: '前方扇形範囲内の敵に攻撃力100%/110%/120%/130%/140%のダメージを与える。さらに1秒間眩暈状態にする。同時に自身の攻撃力を100%/110%/120%/130%/140%上昇させる。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500321.png',
    },
    {
      name: '緊急避難',
      desc: 'HPが0になった際、周囲の敵に攻撃力200%/220%/240%/260%/280%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500322.png',
    },
    {
      name: '危険予知',
      desc: 'Mr.Tinの被ダメージが10%/20%/30%/40%/50%の確率で50%軽減する。',
      icon: '/images/skills/hero_skill_icon_500323.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '650.52%', def: '650.52%' },
    skills: [
    {
      name: '攻守両立',
      desc: '味方の弓兵の被ダメージが4%/8%/12%/16%/20%低下する。また、味方の槍兵のダメージが4%/8%/12%/16%/20%上昇する。',
      icon: '/images/skills/hero_skill_icon_500324.png',
    },
    {
      name: '銅頭鉄腕',
      desc: '盾兵の被ダメージが4%/8%/12%/16%/20%低下する。',
      icon: '/images/skills/hero_skill_icon_500325.png',
    },
    {
      name: '鋼甲護体',
      desc: '味方全部隊のHPが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500326.png',
    },
  ],
  },
  specialEquipment: {
    name: '仁愛工具箱(Lv.10)',
    explorationStats: {
      '攻撃': '1107',
      '防御': '1444',
      'HP': '21667',
    },
    expeditionStats: {
      '殺傷力': '160.50%',
      'HP': '160.50%',
    },
    skills: [
    {
      name: '小さなエンジニア',
      desc: 'HPが50%以下になった際、即座に一定のHPを回復する（最大HPの&gt;15%/20%/25%/30%/35%相当）。さらに戦闘終了まで防御力が10%/15%/20%/25%/30%上昇する。各戦闘で1回のみ発動。',
      icon: '/images/skills/hero_skill_icon_500327.png',
    },
    {
      name: '堅固な工事',
      desc: '防衛部隊のHPが5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500328.png',
    },
  ],
  },
} satisfies Hero
