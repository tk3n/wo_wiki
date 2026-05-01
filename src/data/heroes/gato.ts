import type { Hero } from '@/types/hero'

export const gato = {
  id: 'gato',
  name: 'ガト',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 8,
  icon: '/images/heroes/5.jpg',

  exploration: {
    stats: { atk: 6573, def: 8568, hp: 128538 },
    skills: [
    {
      name: '列王の意志',
      desc: '偉大な列王の継承者として、ガトは「意志のシールド」を1枚発動できる。シールド値は攻撃力220%/260%/300%/340%/380%と同等で、ダメージを受けた際、シールド値から先に減少する。シールドは最大5秒存在する。',
      icon: '/images/skills/hero_skill_icon_500341.png',
    },
    {
      name: '王権の威厳',
      desc: '生まれ持つ王者の覇気で敵全体の英雄を威圧し、攻撃力を 1%/2%/3%/4%/5%低下させると同時に、自身の攻撃力を上昇させる（上昇値は1%/2%/3%/4%/5%抑圧された敵英雄の数に相当）。3秒持続。',
      icon: '/images/skills/hero_skill_icon_500342.png',
    },
    {
      name: '王者のステップ',
      desc: 'ガトの優れた格闘技術は力強い戦舞のようで、敵の通常攻撃を 3%/6%/9%/12%/15%の確率で回避する。さらに、4%/8%/12%/16%/20%の確率で攻撃が会心攻撃となる。',
      icon: '/images/skills/hero_skill_icon_500343.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '+780.62%', def: '+780.62%' },
    skills: [
    {
      name: '黄金の近衛',
      desc: 'ガトの近衛隊特有の戦術指揮により、盾兵の防御力が 6%/12%/18%/24%/30%上昇する。',
      icon: '/images/skills/hero_skill_icon_500344.png',
    },
    {
      name: '列王の恩恵',
      desc: '偉大な列王の祝福により、ガトが率いる盾兵は攻撃する度に自身に攻撃力の6%/12%/18%/24%/30%のシールドを獲得する。1ターン持続。',
      icon: '/images/skills/hero_skill_icon_500345.png',
    },
    {
      name: '王者の師',
      desc: '名高きガトの精鋭部隊は相手を威圧し、敵全体の攻撃力を 5%/10%/15%/20%/25%低下させる。',
      icon: '/images/skills/hero_skill_icon_500346.png',
    },
  ],
  },
  specialEquipment: {
    name: '黄金の牙(Lv.10)',
    explorationStats: {
      '攻撃': '1,331',
      '防御': '1,737',
      'HP': '26,055',
    },
    expeditionStats: {
      '殺傷力': '+193.00%',
      'HP': '+193.00%',
    },
    skills: [
    {
      name: '列王の懲戒',
      desc: '王の威厳を踏みにじる者は必ず制裁を受ける！列王の意志は追加で攻撃力55/65/75/85/95のシールド値を獲得する。シールド発動中は被ダメージの 10%/15%/20%/25%/30%を反射する。',
      icon: '/images/skills/hero_skill_icon_500347.png',
    },
    {
      name: '不滅の城',
      desc: '勇気と戦意で不落の城を築く！防衛部隊の防御力が 5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500348.png',
    },
  ],
  },
} satisfies Hero
