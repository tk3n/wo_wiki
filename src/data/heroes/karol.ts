import type { Hero } from '@/types/hero'

export const karol = {
  id: 'karol',
  name: 'カロール',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 12,
  icon: '/images/heroes/20250519%E8%8B%B1%E9%9B%84%E5%A4%B4%E5%83%8Fkarol-1.jpg',

  exploration: {
    stats: { atk: 17826, def: 17826, hp: 178266 },
    skills: [
    {
      name: 'ブレイクチャージ',
      desc: '夜明けの光が導く勝利への道を踏みしめ、前方の敵に攻撃力 200/220/240/260/280%の範囲ダメージを与える。騎槍で敵の甲冑を破壊し、防御力を5/10/15/20/25%低下させる。2秒間持続',
      icon: '/images/skills/hero_skill_icon_500481.png',
    },
    {
      name: 'アサルトスラスト',
      desc: '鋭い刺突を連続で放つ。一定範囲内の対象に攻撃力100/110/120/130/140%のダメージを与える',
      icon: '/images/skills/hero_skill_icon_500482.png',
    },
    {
      name: 'ビクトリーチャージ',
      desc: '勇者達は勝利の味に酔いしれ、戦うほどに強くなる。敵の英雄を倒す度にカロールの攻撃力が4/6/8/10/12%上昇、最大HPの2/4/6/8/10%分のHPが回復',
      icon: '/images/skills/hero_skill_icon_500483.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1451.16%', def: '1451.16%' },
    skills: [
    {
      name: '守護の翼',
      desc: '軽騎による撹乱戦法で味方を援護する。味方全部隊の被ダメージが4/8/12/16/20%減少',
      icon: '/images/skills/hero_skill_icon_500484.png',
    },
    {
      name: 'ブレイクスピア',
      desc: 'カロールは歩兵陣形の弱点を熟知している。彼の指揮する味方全部隊の槍兵に対するダメージが6/12/18/24/30%上昇、盾兵に対するダメージが5/10/15/20/25%上昇',
      icon: '/images/skills/hero_skill_icon_500485.png',
    },
    {
      name: '栄光の戦旗',
      desc: '歴代の伝承に基づく数々の栄光を勝ち取った戦術を駆使する。味方全部隊の攻撃力が3/6/9/12/15%、防御力が2/4/6/8/10%上昇',
      icon: '/images/skills/hero_skill_icon_500486.png',
    },
  ],
  },
  specialEquipment: {
    name: '凛風の槍(Lv.10)',
    explorationStats: {
      '攻撃': '3613',
      '防御': '3613',
      'HP': '36135',
    },
    expeditionStats: {
      '殺傷力': '362.50%',
      'HP': '362.50%',
    },
    skills: [
    {
      name: '翼の戦歌',
      desc: '翼の旗の振音が戦歌のように響く。ブレイクチャージ発動後、味方全体の攻撃速度が14%、移動速度が100%上昇。5秒間持続',
      icon: '/images/skills/hero_skill_icon_500487.png',
    },
    {
      name: 'フロックアサルト',
      desc: '熟練の指揮官として、カロールは大規模な部隊の進攻方法を熟知している。集結部隊の攻撃力が15%上昇',
      icon: '/images/skills/hero_skill_icon_500488.png',
    },
  ],
  },
} satisfies Hero
