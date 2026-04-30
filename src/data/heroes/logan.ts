import type { Hero } from '@/types/hero'

export const logan = {
  id: 'logan',
  name: 'ローガン',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 3,
  icon: '/images/heroes/logan.png',

  exploration: {
    stats: { atk: 2554, def: 3330, hp: 49950 },
    skills: [
    {
      name: '滅塵拳',
      desc: '百人力の鉄拳を地面に叩きつけ、衝撃波で前方のターゲットに攻撃力120%/132%/144%/156%/168%のダメージを与え、攻撃速度を50%低下させる。4秒持続',
      icon: '/images/skills/hero_skill_icon_500101.png',
    },
    {
      name: 'パワーアーマー',
      desc: 'ローガンの誇る驚異的な防御性能で、攻撃を受けた際8%/10%/12%/14%/16%の確率で防御力が8%/11%/13%/17%/20%上昇する。2秒持続、最大5回まで重複可能。',
      icon: '/images/skills/hero_skill_icon_500102.png',
    },
    {
      name: '怒りの猛撃',
      desc: '峻烈な怒りの拳を繰り出し、扇形範囲内のターゲットに攻撃力80%/88%/96%/104%/112%のダメージを与え、30%の確率でターゲットを眩暈状態にする。1秒持続。',
      icon: '/images/skills/hero_skill_icon_500103.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '290.23%', def: '290.23%' },
    skills: [
    {
      name: '怒れる獅子の威',
      desc: 'ローガンの猛々しい威圧感が敵を圧倒する。敵全部隊の攻撃力を4%/8%/12%/16%/20%低下させる。',
      icon: '/images/skills/hero_skill_icon_500104.png',
    },
    {
      name: '猛き獅子の威嚇',
      desc: 'ローガンが猛る獅子のような気迫で相手を威嚇する。味方全部隊の被ダメージが4%/8%/12%/16%/20%低下する。',
      icon: '/images/skills/hero_skill_icon_500105.png',
    },
    {
      name: 'リーダーの鼓舞',
      desc: 'ローガンが生まれながらに持つリーダーシップが皆を鼓舞する。味方全部隊のHPが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500106.png',
    },
  ],
  },
  specialEquipment: {
    name: '鋼鉄の拳(Lv.10)',
    explorationStats: {
      '攻撃': '482',
      '防御': '630',
      'HP': '9450',
    },
    expeditionStats: {
      '殺傷力': '70%',
      'HP': '70%',
    },
    skills: [
    {
      name: '鉄拳強化',
      desc: '鉄拳をアップグレードし威力を向上させる。自身の与ダメージが10%/15%/20%/25%/30%上昇',
      icon: '/images/skills/hero_skill_icon_500107.png',
    },
    {
      name: '鉄腕の守り',
      desc: '強力な鉄拳で都市を守り、防衛部隊防御力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500108.png',
    },
  ],
  },
} satisfies Hero
