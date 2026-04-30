import type { Hero } from '@/types/hero'

export const alonso = {
  id: 'alonso',
  name: 'アロンゾ',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 2,
  icon: '/images/heroes/alonso.png',

  exploration: {
    stats: { atk: 3235, def: 2220, hp: 19980 },
    skills: [
    {
      name: '強力漁網',
      desc: 'ターゲット範囲に改良漁網を投げ、攻撃200%/220%/240%/260%/280%の範囲ダメージを与える。さらに行動不能状態にする。1.5秒持続。',
      icon: '/images/skills/hero_skill_icon_500181.png',
    },
    {
      name: '潮力エネルギー',
      desc: 'ターゲットに銛を勢いよく撃ち出し、攻撃50%/55%/60%/65%/70%の範囲ダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500182.png',
    },
    {
      name: '銛強打',
      desc: 'アロンゾが重たい銛でターゲットを痛撃する。8/7/7/6/5回の通常攻撃毎に次回の攻撃でターゲットを眩暈状態にする。0.2/0.2/0.4/0.4/0.5秒持続。',
      icon: '/images/skills/hero_skill_icon_500183.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '240.19%', def: '240.19%' },
    skills: [
    {
      name: '波瀾万丈',
      desc: 'アロンゾが大波の如く圧倒的な攻勢を仕掛ける。40%の確率で味方全部隊の被ダメージを10%/20%/30%/40%/50%軽減する。',
      icon: '/images/skills/hero_skill_icon_500184.png',
    },
    {
      name: '鋼鉄意志',
      desc: 'アロンゾは堅固な意志で仲間を鼓舞する。味方全部隊が攻撃する際、20%の確率で敵のダメージが10%/20%/30%/40%/50%減少する。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500185.png',
    },
    {
      name: '毒の銛',
      desc: 'アロンゾは武器に猛毒を塗布する。味方全部隊が攻撃する際、50%の確率で今回の攻撃によるダメージが10%/20%/30%/40%/50%上昇する。',
      icon: '/images/skills/hero_skill_icon_500186.png',
    },
  ],
  },
  specialEquipment: {
    name: 'エイハブ船長(Lv.10)',
    explorationStats: {
      '攻撃': '655',
      '防御': '540',
      'HP': '4050',
    },
    expeditionStats: {
      '殺傷力': '60%',
      'HP': '60%',
    },
    skills: [
    {
      name: '深海の饗宴',
      desc: 'アロンゾは戦利品を惜しまない。通常攻撃の度に美味しそうな魚が、自軍のHPが最も低い英雄をアロンゾの攻撃力5%/7.5%/10%/12.5%/15%分回復させる。',
      icon: '/images/skills/hero_skill_icon_500187.png',
    },
    {
      name: '銛強化',
      desc: 'アロンゾは武器のレベルを上げ、集結部隊の与ダメージを5%/7.5%/10%/12.5%/15%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500188.png',
    },
  ],
  },
} satisfies Hero
