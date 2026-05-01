import type { Hero } from '@/types/hero'

export const smith = {
  id: 'smith',
  name: 'スミス',
  rarity: 'R',
  troopType: 'shield',
  heroType: '発展型',
  icon: '/images/heroes/smith.png',

  exploration: {
    stats: { atk: 1106, def: 2220, hp: 21644 },
    skills: [
    {
      name: '火炎槌',
      desc: 'ハンマーを振り回し、前方扇形範囲の敵に攻撃200%/220%/240%/260%/280%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500011.png',
    },
    {
      name: '防具強化',
      desc: '防具を強化して、被ダメージを10%/15%/20%/25%/30%低下させる。',
      icon: '/images/skills/hero_skill_icon_500012.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '90.07%', def: '90.07%' },
    skills: [
    {
      name: '善は急げ',
      desc: 'スミスが鍛治への情熱を皆に伝え、都市内の鉄鉱工場生産量を5%/10%/15%/20%/25%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500014.png',
    },
    {
      name: '鍛治職人',
      desc: '鉄鉱と不思議な“親和関係”があるスミスを出征させると、鉄鉱採集速度が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500015.png',
    },
  ],
  },
} satisfies Hero
