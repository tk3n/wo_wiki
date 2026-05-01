import type { Hero } from '@/types/hero'

export const magnus = {
  id: 'magnus',
  name: 'マグヌス',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 9,
  icon: '/images/heroes/magnus.jpg',

  exploration: {
    stats: { atk: 7901, def: 10300, hp: 154512 },
    skills: [
    {
      name: '氷海の怒風',
      desc: '双斧を振り回し、旋風のように高速で回転する。0.5秒毎に周囲のターゲットに攻撃力60%/66%/72%/78%/84%のダメージを与えると同時に挑発し、自身を攻撃させる。3秒間持続。',
      icon: '/images/skills/hero_skill_icon_500381.png',
    },
    {
      name: '烈風の戦斧',
      desc: '相手の英雄に斧を投げ、攻撃力100%/110%/120%/130%/140%のダメージを与える。傷口を引き裂き、追加で毎秒攻撃力50%/55%/60%/65%/70%のダメージを与える。3秒間持続',
      icon: '/images/skills/hero_skill_icon_500382.png',
    },
    {
      name: '貫通の一撃',
      desc: '通常攻撃時に30%の確率で重い斧で鎧を砕き、ターゲットに攻撃力50%/55%/60%/65%/70%の追加ダメージを与え、防御力を5%/10%/15%/20%/25%低下させる。2秒間持続。',
      icon: '/images/skills/hero_skill_icon_500383.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '940.75%', def: '940.75%' },
    skills: [
    {
      name: '怒りの波',
      desc: '全部隊を率いて総攻撃をしかける。味方全部隊の攻撃力ぎ5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500384.png',
    },
    {
      name: '鋼鉄陣形',
      desc: 'マグヌスは密集した陣形で勝利を得る事を得意とする。盾兵を指揮して攻撃する際に、40%の確率で味方全部隊の防御力が10%/20%/30%/40%/50%上昇する。1ターン持続。',
      icon: '/images/skills/hero_skill_icon_500385.png',
    },
    {
      name: '氷海戦術',
      desc: '氷海の勇者の戦術は攻守に優れている。味方の盾兵の被ダメージが2%/4%/6%/8%/10%低下し、味方弓兵の与ダメージが2%/4%/6%/8%/10%上昇する。',
      icon: '/images/skills/hero_skill_icon_500386.png',
    },
  ],
  },
  specialEquipment: {
    name: '風の斧(Lv.10)',
    explorationStats: {
      '攻撃': '1600',
      '防御': '2088',
      'HP': '31320',
    },
    expeditionStats: {
      '殺傷力': '232%',
      'HP': '232%',
    },
    skills: [
    {
      name: '勇者の血脈',
      desc: '氷海の勇者の血統はマグヌスに優れた体格を与えた。被ダメージを5%/7.5%/10%/12.5%/15%軽減し、氷海の怒風スキルの効果中、防御力が25%/37.5%/50%/62.5%/75%上昇する',
      icon: '/images/skills/hero_skill_icon_500398.png',
    },
    {
      name: '英霊の意志',
      desc: '英霊殿の古い伝説を引用して鼓舞し、防衛部隊のHPが5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500387.png',
    },
  ],
  },
} satisfies Hero
