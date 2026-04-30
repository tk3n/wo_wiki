import type { Hero } from '@/types/hero'

export const zinman = {
  id: 'zinman',
  name: 'ジンマン',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '発展型',
  season: 1,
  icon: '/images/heroes/zinman.png',

  exploration: {
    stats: { atk: 2697, def: 2220, hp: 16650 },
    skills: [
    {
      name: '連続釘打ち',
      desc: 'ターゲットに複数の釘を連打し、毎回攻撃55%/60%/65%/70%/75%のダメージを与える。さらに眩暈状態にする。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500171.png',
    },
    {
      name: '緊急補強',
      desc: 'HPが50%を下回った際、すばやく簡易防御工事を行う。自身の防御が50%/75%/100%/125%/150%上昇する。',
      icon: '/images/skills/hero_skill_icon_500172.png',
    },
    {
      name: 'ヤル気',
      desc: 'ヤル気満々！攻撃速度が10%/15%/20%/25%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500173.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '200.16%', def: '200.16%' },
    skills: [
    {
      name: '堅固',
      desc: 'ジンマンが築いた防衛線は堅固で頼できる。味方全部隊の防御力が2%/4%/6%/8%/10%、HPが2%/4%/6%/8%/10%上昇する。',
      icon: '/images/skills/ziman-new-1.png',
    },
    {
      name: '建築の芸術',
      desc: 'ジンマンは施工プロセスを合理的にコントロールする。建設に必要な基本資源(生肉、木材、石炭、鉄鋼)の消費を3%/6%/9%/12%/15%削減し、建築のLvUP速度が3%/6%/9%/12%/15%上昇',
      icon: '/images/skills/hero_skill_icon_500174.png',
    },
    {
      name: '陣地戦の強者',
      desc: 'ジンマンは実戦において味方に有利な地形を構築できる。味方全部隊の殺傷力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/ziman-new-2.png',
    },
  ],
  },
  specialEquipment: {
    name: 'キツツキ(Lv.10)',
    explorationStats: {
      '攻撃': '546',
      '防御': '450',
      'HP': '3375',
    },
    expeditionStats: {
      '殺傷力': '50%',
      'HP': '50%',
    },
    skills: [
    {
      name: '高圧力釘銃',
      desc: '圧力釘銃が過負荷モードに移行し、攻撃を8%/12%/16%/20%/24%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500177.png',
    },
    {
      name: '攻撃は最大の防御',
      desc: '攻撃型櫓を築き上げ、防衛部隊の攻撃を5%/7.5%/10%/12.5%/15%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500178.png',
    },
  ],
  },
} satisfies Hero
