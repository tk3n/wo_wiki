import type { Hero } from '@/types/hero'

export const gina = {
  id: 'gina',
  name: 'ジーナ',
  rarity: 'SR',
  troopType: 'archer',
  heroType: '戦闘',
  icon: '/images/heroes/gina.png',

  exploration: {
    stats: { atk: 2157, def: 2220, hp: 13320 },
    skills: [
    {
      name: '爆裂の矢',
      desc: '敵1体に爆裂の矢を発し、攻撃210%/230%/250%/270%/290%のダメージを与える。さらにターゲット周りの小範囲の敵に攻撃70%/77%/84%/91%/98%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500081.png',
    },
    {
      name: '風の導き',
      desc: '攻撃速度が10%/15%/20%/25%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500082.png',
    },
    {
      name: '鷹の目',
      desc: '敵の弱点を鋭く捉え、会心率が7%/10%/13%/16%/20%上昇する。',
      icon: '/images/skills/hero_skill_icon_500083.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '110.08%', def: '110.08%' },
    skills: [
    {
      name: '強靭ボディ',
      desc: '領主の体力消費が10%/12%/15%/18%/20%減少する。',
      icon: '/images/skills/hero_skill_icon_500084.png',
    },
    {
      name: '迅速行動',
      desc: 'モンスター討伐部隊の出征速度が20%/40%/60%/80%/100%上昇する。',
      icon: '/images/skills/hero_skill_icon_500085.png',
    },
  ],
  },
} satisfies Hero
