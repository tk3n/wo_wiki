import type { Hero } from '@/types/hero'

export const ligeia = {
  id: 'ligeia',
  name: 'ライジーア',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 12,
  icon: '/images/heroes/20250519%E8%8B%B1%E9%9B%84%E5%A4%B4%E5%83%8FLigeia-1.jpg',

  exploration: {
    stats: { atk: 21656, def: 17826, hp: 133698 },
    skills: [
    {
      name: 'アシッドスパイダー',
      desc: '酸液爆弾を装備した3匹の機械蜘蛛を突進させる。攻撃力70/77/84/91/98%の範囲ダメージを与え、飛び散った酸液でターゲットの武器を溶かし、攻撃力を5/10/15/20/25%低下させる。2秒間持続',
      icon: '/images/skills/hero_skill_icon_500491.png',
    },
    {
      name: 'フェイトウェブ',
      desc: '鋭い鋼鉄の蜘蛛糸で敵を切り裂き、攻撃力50/55/60/65/70%のダメージを与える。蜘蛛糸は20/40/60/80/100%の確率で対象を絡め取り、「共鳴」状態にする。5秒間持続し、共鳴中はライジーアが受けるダメージの一部を対象が引き受ける',
      icon: '/images/skills/hero_skill_icon_500492.png',
    },
    {
      name: 'タランチュラ',
      desc: 'ライジーアがマイナス効果を受ける度、タランチュラが1匹犠牲となって無効化する。さらにライジーアの攻撃力が8/12/16/20/24%上昇、10秒間持続。タランチュラは10秒毎に1匹生成され、最大3匹まで存在',
      icon: '/images/skills/hero_skill_icon_500493.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1451.16%', def: '1451.16%' },
    skills: [
    {
      name: 'スチールファング',
      desc: '敵全体の防御力を5/10/15/20/25%低下させる',
      icon: '/images/skills/hero_skill_icon_500494.png',
    },
    {
      name: '崩壊の毒',
      desc: '弓兵が2回攻撃する毎に対象に20/40/60/80/100%の追加ダメージを与える。さらに対象の被ダメージを5/10/15/20/25%上昇させる。1ターン持続',
      icon: '/images/skills/hero_skill_icon_500495.png',
    },
    {
      name: 'ポイズンファング',
      desc: '弓兵が2回攻撃する毎に対象を毒状態にし、20/40/60/80/100%の追加ダメージを与える。さらに対象の与ダメージを4/8/12/16/20%減少させる。1ターン持続',
      icon: '/images/skills/hero_skill_icon_500496.png',
    },
  ],
  },
  specialEquipment: {
    name: '運命の織り手(Lv.10)',
    explorationStats: {
      '攻撃': '4384',
      '防御': '3613',
      'HP': '27101',
    },
    expeditionStats: {
      '殺傷力': '362.50%',
      'HP': '362.50%',
    },
    skills: [
    {
      name: 'スパイダー・クイーン',
      desc: '戦闘開始毎にタランチュラを2匹自動召喚し、フェイトウェブが100%の確率で1体の追加ターゲットに命中する',
      icon: '/images/skills/hero_skill_icon_500497.png',
    },
    {
      name: 'ネストキャッスル',
      desc: '防衛部隊の攻撃力が15%上昇',
      icon: '/images/skills/hero_skill_icon_500498.png',
    },
  ],
  },
} satisfies Hero
