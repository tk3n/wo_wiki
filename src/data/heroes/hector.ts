import type { Hero } from '@/types/hero'

export const hector = {
  id: 'hector',
  name: 'ヘクトー',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 5,
  icon: '/images/heroes/1690429616489_3.jpg',

  exploration: {
    stats: { atk: 3780, def: 4928, hp: 73926 },
    skills: [
    {
      name: '鋼刃戦舞',
      desc: '戦刃を振り回し、力強い舞のような攻撃を仕掛け、4秒間攻撃速度が80%/90%/100%/110%/120%上昇する。その間は凍結、眩暈などの制御効果を無効化する。',
      icon: '/images/skills/hero_skill_icon_500241.png',
    },
    {
      name: '決死の戦い',
      desc: 'ヘクトーは命に関わる危険と踊ることに慣れていた。HPが50%以下の時、被ダメージが20%/30%/40%/50%/60%低下する。',
      icon: '/images/skills/hero_skill_icon_500242.png',
    },
    {
      name: '不屈の勇者',
      desc: '逆境でこそヘクトーの戦う意志がより強く発揮される。HPが50%以下の時、攻撃力が16%/24%/32%/40%/48%上昇する。',
      icon: '/images/skills/hero_skill_icon_500243.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '444.35%', def: '444.35%' },
    skills: [
    {
      name: '生存本能',
      desc: 'サバイバルスキルはヘクトーの本能になっていた。彼の存在により、味方全部隊の被ダメージが40%の確率で10%/20%/30%/40%/50%低下する。',
      icon: '/images/skills/hero_skill_icon_500244.png',
    },
    {
      name: '雷の突撃',
      desc: 'ヘクトーは奇襲で敵陣を崩して引で一掃する戦法を得意とする。盾兵の与ダメージが100%/125%/150%/175%/200%、5兵の与ダメージが20%/40%/60%/80%/100%上昇。攻撃の度に強化効果が前回の85%になり、10回攻撃する間有効。',
      icon: '/images/skills/hero_skill_icon_500245.png',
    },
    {
      name: '疾風猛襲',
      desc: 'ヘクトーは攻撃というものの芸術性に精通しており、味方全部隊の攻撃時に25%の確率で120%/140%/160%/180%/200%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500246.png',
    },
  ],
  },
} satisfies Hero
