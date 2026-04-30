import type { Hero } from '@/types/hero'

export const ahmos = {
  id: 'ahmos',
  name: 'アクモス',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 4,
  icon: '/images/heroes/ahmos.png',

  exploration: {
    stats: { atk: 3150, def: 4106, hp: 61604 },
    skills: [
    {
      name: 'クトゥグアの加護',
      desc: '盾を掲げて敵の猛攻を防ぐ。自身が無敵状態に入り（この間、移動、スキル発動できず、制御が無効化される）、周囲の味方の被ダメージが30%/40%/50%/60%/70%低下。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500231.png',
    },
    {
      name: '凶日の矛先',
      desc: '鋭い槍で前方の敵を貫き、攻撃力70%/77%/84%/91%/98%のダメージを与える。 防衛戦を切り裂き、2秒間、敵の被ダメージを20%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500232.png',
    },
    {
      name: '先祖の福',
      desc: '火晶のエナジーが先祖の祝福のように、アクモスの傷を治癒する。 「クトゥグアの加護」を発動後、毎秒攻撃力30%/33%/36%/39%/42%のHPを回復する。5秒持続。',
      icon: '/images/skills/hero_skill_icon_500233.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '370.29%', def: '370.29%' },
    skills: [
    {
      name: 'マムシ方陣',
      desc: '部隊に古代守護者の防御陣形をとらせる。盾兵が4回攻撃する毎に次の攻撃を止め、弓兵と槍兵の被ダメージが 10%/15%/20%/25%/30%、盾兵の被ダメージが 10%/25%/40%/55%/70%低下する。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500234.png',
    },
    {
      name: '火の祈願',
      desc: '火晶の力で味方盾兵の戦闘意志を強化する。彼らの与ダメージが20%/40%/60%/80%/100%上昇する。',
      icon: '/images/skills/hero_skill_icon_500235.png',
    },
    {
      name: '光鍛の刃',
      desc: '火晶の精華を盾兵の武器に注入する。攻撃の度にターゲットに12%/24%/36%/48%/60%の追加ダメージを与え、被ダメージが5%/10%/15%/20%/25%上昇する。1ターン持続。',
      icon: '/images/skills/hero_skill_icon_500236.png',
    },
  ],
  },
} satisfies Hero
