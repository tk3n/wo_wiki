import type { Hero } from '@/types/hero'

export const hendrik = {
  id: 'hendrik',
  name: 'ヘンドリック',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 8,
  icon: '/images/heroes/7.jpg',

  exploration: {
    stats: { atk: 10410, def: 8568, hp: 64268 },
    skills: [
    {
      name: 'ルルイエの歌',
      desc: '一定範囲内のターゲットに攻撃力220%/240%/260%/280%/300%のダメージを与えて眩暈状態にする。1.5秒持続。',
      icon: '/images/skills/hero_skill_icon_500361.png',
    },
    {
      name: '零落の錨',
      desc: '一定範囲の敵に攻撃力100%/110%/120%/130%/140%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500362.png',
    },
    {
      name: 'ヤツメウナギのキス',
      desc: '敵を1体撃破する度に自身の与ダメージが0.5%/1%/1.5%/2%/2.5%上昇する。最大15層まで重ね掛け可能。',
      icon: '/images/skills/hero_skill_icon_500363.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '+780.62%', def: '+780.62%' },
    skills: [
    {
      name: '蠕虫のかみつき',
      desc: '敵部隊全体の防御力を5%/10%/15%/20%/25%低下させる。',
      icon: '/images/skills/hero_skill_icon_500364.png',
    },
    {
      name: 'フジツボの鎧',
      desc: '4ターン毎に、防御力が6%/12%/18%/24%/30%上昇する。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500365.png',
    },
    {
      name: 'ダゴンの後継者',
      desc: '3ターン毎に敵全体に8%/16%/24%/32%/40%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500366.png',
    },
  ],
  },
  specialEquipment: {
    name: '深淵ダイバー(Lv.10)',
    explorationStats: {
      '攻撃': '2,107',
      '防御': '1,737',
      'HP': '13,027',
    },
    expeditionStats: {
      '殺傷力': '+193.00%',
      'HP': '+193.00%',
    },
    skills: [
    {
      name: 'ヒュドラの舞い',
      desc: '召喚されたモンスターが消えた際、触手がその場に残り、付近の敵の攻撃を誘う。触手のHPはキャプテン・ヘンドリックの初期HPの10%/15%/20%/25%/30%。5秒存在する。',
      icon: '/images/skills/hero_skill_icon_500367.png',
    },
    {
      name: '深淵の加護',
      desc: '集結部隊の攻撃力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500368.png',
    },
  ],
  },
} satisfies Hero
