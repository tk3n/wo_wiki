import type { Hero } from '@/types/hero'

export const jeronimo = {
  id: 'jeronimo',
  name: 'ジェロニモ',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 1,
  icon: '/images/heroes/jeronimo.png',

  exploration: {
    stats: { atk: 2128, def: 2220, hp: 41624 },
    skills: [
    {
      name: '三段斬り',
      desc: '一定範囲内の敵を高くカチ上げ、攻撃160%/176%/192%/208%/224%のダメージを与える斬撃を3回行う。',
      icon: '/images/skills/hero_skill_icon_500111.png',
    },
    {
      name: '剣気',
      desc: '通常攻撃で剣気を放ち、前方直線範囲内の敵に攻撃15%/17%/19%/21%/23%のダメージ与える。',
      icon: '/images/skills/hero_skill_icon_500112.png',
    },
    {
      name: '孤高',
      desc: '高飛車なジェロニモは、戦況が順調な時は無双する。HPが50%以上の時、攻撃力が16%/24%/32%/40%/48%上昇する。',
      icon: '/images/skills/hero_skill_icon_500113.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '260.20%', def: '260.20%' },
    skills: [
    {
      name: '決起集会',
      desc: 'ジェロニモはバトル開始前に演説を行い、味方全部隊の与ダメージを5%/10%/15%/20%/25%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500114.png',
    },
    {
      name: '剣術指導',
      desc: '剣術の奥義を授け、味方全部隊の攻撃力を5%/10%/15%/20%/25%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500115.png',
    },
    {
      name: '練達なる剣技',
      desc: 'ジェロニモが授けた剣術が兵士に勝機をもたらす。4ターン毎に味方全部隊の与ダメージが6%/12%/18%/24%/30%上昇する。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500116.png',
    },
  ],
  },
  special: [
    {
      name: '天性のリーダー',
      desc: '全軍にリーダーシップの資質を浸透させることで、ジェロニモが出征するしないに関わらず、出征中の英雄が率いる部隊殺傷力とHPが3%/6%/9%/12%/15%増加します。',
    },
  ],
  specialEquipment: {
    name: '暁の刃(Lv.10)',
    explorationStats: {
      '攻撃': '431',
      '防御': '562',
      'HP': '8437',
    },
    expeditionStats: {
      '殺傷力': '62.50%',
      'HP': '62.50%',
    },
    skills: [
    {
      name: '剣盾',
      desc: '攻撃時に、剣気が盾となってジェロニモを守り、自身の被ダメージを10%/15%/20%/25%/30%低下させる。',
      icon: '/images/skills/hero_skill_icon_500117.png',
    },
    {
      name: '真実の術',
      desc: '剣陣を組んで攻撃を仕掛け、集結部隊の攻撃力を 5%/7.5%/10%/12.5%/15%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500118.png',
    },
  ],
  },
} satisfies Hero
