import type { Hero } from '@/types/hero'

export const jessie = {
  id: 'jessie',
  name: 'ジェシー',
  rarity: 'SR',
  troopType: 'spear',
  heroType: '戦闘',
  icon: '/images/heroes/jessie.png',

  exploration: {
    stats: { atk: 1776, def: 2220, hp: 17760 },
    skills: [
    {
      name: '機関銃掃射',
      desc: 'ガトリング砲で掃射し、0.5秒毎に扇形範囲内の敵に攻撃55%/60%/65%/70%/75%のダメージを与える。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500071.png',
    },
    {
      name: '防具改造',
      desc: '防御力が25%/37.5%/50%/62.5%/70%上昇する。',
      icon: '/images/skills/hero_skill_icon_500072.png',
    },
    {
      name: '武器改造',
      desc: '攻撃力が8%/12%/16%/20%/24%上昇する。',
      icon: '/images/skills/hero_skill_icon_500073.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '140.11%', def: '140.11%' },
    skills: [
    {
      name: '完全武装',
      desc: '味方全部隊のダメージが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500074.png',
    },
    {
      name: 'メカニックバリア',
      desc: '味方全部隊の被ダメージが4%/8%/12%/16%/20%減少する。',
      icon: '/images/skills/hero_skill_icon_500075.png',
    },
  ],
  },
} satisfies Hero
