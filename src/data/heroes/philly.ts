import type { Hero } from '@/types/hero'

export const philly = {
  id: 'philly',
  name: 'フレンダー',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 2,
  icon: '/images/heroes/philly.png',

  exploration: {
    stats: { atk: 2664, def: 2220, hp: 26640 },
    skills: [
    {
      name: '応急手当',
      desc: 'フレンダーの卓越した医術で、自軍のすべての英雄のHPが彼女の攻撃力200/220%/240%/260%/280%分回復する。',
      icon: '/images/skills/hero_skill_icon_500131.png',
    },
    {
      name: 'ゴッドハンド',
      desc: '死神と戯れる能力を活かし、フレンダーは自軍でHPのパーセンテージが最も低い英雄を攻撃力100%/110%/120%/130%/140%分回復させる。',
      icon: '/images/skills/hero_skill_icon_500132.png',
    },
    {
      name: '麻痺毒素',
      desc: '敵単体を毒状態にし、フレンダーの攻撃140%/154%/168%/182%/196%のダメージを与える。さらに1秒間行動不能にする。',
      icon: '/images/skills/hero_skill_icon_500133.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '240.19%', def: '240.19%' },
    skills: [
    {
      name: '強健の秘訣',
      desc: 'フレンダーの調理により兵士達は健康になる。味方全部隊の攻撃力が3%/6%/9%/12%/15%、防御力が2%/4%/6%/8%/10%上昇する。',
      icon: '/images/skills/hero_skill_icon_500134.png',
    },
    {
      name: '強化薬剤',
      desc: 'フレンダーは秘伝の薬剤で戦士たちの身体機能を強化する。味方全部隊が攻撃する際、25%の確率で120%/140%/160%/180%/200%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500135.png',
    },
    {
      name: '専心の神薬',
      desc: 'フレンダー秘伝の薬で兵士の戦闘時の集中力を高める。40%の確率で味方全部隊の被ダメージを10%/20%/30%/40%/50%軽減する。',
      icon: '/images/skills/hero_skill_icon_500136.png',
    },
  ],
  },
  specialEquipment: {
    name: '神秘の薬典(Lv.10)',
    explorationStats: {
      '攻撃': '540',
      '防御': '540',
      'HP': '5400',
    },
    expeditionStats: {
      '殺傷力': '60%',
      'HP': '60%',
    },
    skills: [
    {
      name: 'エキス抽出',
      desc: 'フレンダーは薬剤からエキスを抽出し、治療効果を強化する。これによりHPを回復するスキルの効果が30%/40%/50%/60%/70%上昇する。',
      icon: '/images/skills/hero_skill_icon_500137.png',
    },
    {
      name: '救急訓練',
      desc: 'フレンダーが簡単な救護の技術を仲間に伝授した為、防衛部隊のHPが5%/7.5%/10%/12.5%/15%上昇した',
      icon: '/images/skills/hero_skill_icon_500138.png',
    },
  ],
  },
} satisfies Hero
