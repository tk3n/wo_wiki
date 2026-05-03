import type { Hero } from '@/types/hero'

export const eleonora = {
  id: 'eleonora',
  name: 'エリオノーラ',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 11,
  icon: '/images/heroes/eleonora.jpg',

  exploration: {
    stats: { atk: 11392, def: 14850, hp: 222776 },
    skills: [
    {
      name: '裂光の盾(Lv.5)',
      desc: '攻撃力100/130/160/190/220%のシールドを獲得し、受けたダメージの30%をダメージ元に反射する。3秒持続。終了後にシールドが爆発し、周囲の敵に60/65/70/75/80%のダメージを与える',
      icon: '/images/skills/hero_skill_icon_500441.png',
    },
    {
      name: '王の懲戒(Lv.5)',
      desc: 'ターゲットに攻撃力100/110/120/130/140%のダメージを与え、防御力を10/15/20/25/30%低下させる。2秒持続',
      icon: '/images/skills/hero_skill_icon_500442.png',
    },
    {
      name: '日輪の威厳(Lv.5)',
      desc: '被ダメージが5/7.5/10/12.5/15%低下し、与ダメージが5/7.5/10/12.5/15%増加する',
      icon: '/images/skills/hero_skill_icon_500443.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1281.02%', def: '1281.02%' },
    skills: [
    {
      name: '烈日の威光(Lv.5)',
      desc: '全部隊のHPが5%/10%/15%/20%/25%増加',
      icon: '/images/skills/hero_skill_icon_500444.png',
    },
    {
      name: 'ソラリス方陣(Lv.5)',
      desc: '味方盾兵の被ダメージが2%/4%/6%/8%/10%低下、味方弓兵の与ダメージが2%/4%/6%/8%/10%上昇',
      icon: '/images/skills/hero_skill_icon_500445.png',
    },
    {
      name: '烈火の飛光(Lv.5)',
      desc: '率いる盾兵が5回攻撃する毎に、味方全部隊の与ダメージが5%/10%/15%/20%/25%上昇、被ダメージが5%/10%/15%/20%/25%低下する。2ターン持続',
      icon: '/images/skills/hero_skill_icon_500446.png',
    },
  ],
  },
  specialEquipment: {
    name: 'ソラリスの権力(Lv.10)',
    explorationStats: {
      '攻撃': '2308',
      '防御': '3010',
      'HP': '45157',
    },
    expeditionStats: {
      '殺傷力': '320%',
      'HP': '320%',
    },
    skills: [
    {
      name: '鉄槌と堅盾(Lv.5)',
      desc: 'HPが50%以上の時、攻撃力が8/12/16/20/24%上昇。50%未満の時、防御力が25/37.5/50/62.5/75%上昇',
      icon: '/images/skills/hero_skill_icon_500447.png',
    },
    {
      name: '最後の砦(Lv.5)',
      desc: '防衛部隊のHPが5/7.5/10/12.5/15%上昇する',
      icon: '/images/skills/hero_skill_icon_500448.png',
    },
  ],
  },
} satisfies Hero
