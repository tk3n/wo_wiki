import type { Hero } from '@/types/hero'

export const gordon = {
  id: 'gordon',
  name: 'ゴードン',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 7,
  icon: '/images/heroes/20240222_1.jpg',

  exploration: {
    stats: { atk: 7126, def: 7126, hp: 71262 },
    skills: [
    {
      name: '劇毒爆発',
      desc: '巨大な毒液缶を発射する。破裂後に生じた気体は毒エリアを生成し、3秒持続する。0.5秒毎に、毒エリアにいる対象に攻撃力50%/55%/60%/65%/70%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500151.png',
    },
    {
      name: '毒液の瓶',
      desc: '毒液が入った瓶を投げ、対象を毒状態にする。0.5秒毎に対象に攻撃力25%/27.5%/30%/32.5%/35%のダメージを与え、被ダメージを5%/10%/15%/20%/25%上昇させる。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500152.png',
    },
    {
      name: '毒の体質',
      desc: '劇毒はゴードンの命を奪うに至らず、彼の体質を変えた。防御力が25%/7.5%/50%/67.5%/75%上昇する。',
      icon: '/images/skills/hero_skill_icon_500153.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '650.52%', def: '650.52%' },
    skills: [
    {
      name: '毒の刃',
      desc: '槍兵の武器に毒を塗り、2回攻撃する毎に20%/40%/60%/80%/100%の追加ダメージを与えられるようになる。さらに毒状態にする。1ターン持続。毒状態では、ターゲットの与ダメージが4%/8%/12%/16%/20%低下する。',
      icon: '/images/skills/hero_skill_icon_500154.png',
    },
    {
      name: '毒の恐怖',
      desc: '槍に毒を塗る戦法は敵を脅かす。3ターン毎に敵の士気を低下させる。味方槍兵の与ダメージが0%/60%/90%/120%/150%上昇し、敵全体の与ダメージが6%/12%/18%/24%/30%低下する。1ターン持続。',
      icon: '/images/skills/hero_skill_icon_500155.png',
    },
    {
      name: '劇毒の霧',
      desc: 'ゴードンの特殊戦法によって4ターン毎に毒の雲が発生する。前方にいる敵盾兵を無気力にし、被ダメージを6%/12%/18%/24%/30%上昇させる。また、毒の雲は敵弓兵の視線を遮り、与ダメージを6%/12%/18%/24%/30%低下させる。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500156.png',
    },
  ],
  },
  specialEquipment: {
    name: '蝕骨の毒(Lv.10)',
    explorationStats: {
      '攻撃': '1444',
      '防御': '1444',
      'HP': '14445',
    },
    expeditionStats: {
      '殺傷力': '160.50%',
      'HP': '160.50%',
    },
    skills: [
    {
      name: '1325号薬剤',
      desc: 'ゴードンが入念に調合した劇毒により、彼の与ダメージが5%/10%/15%/20%/25%上昇し、毒を付与したターゲットの攻撃力を15%低下させる。',
      icon: '/images/skills/hero_skill_icon_500157.png',
    },
    {
      name: '毒の侵略',
      desc: '特製の劇毒装備を使用した盟友は、その集結部隊の殺傷力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500158.png',
    },
  ],
  },
} satisfies Hero
