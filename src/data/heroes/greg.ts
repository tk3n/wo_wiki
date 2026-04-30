import type { Hero } from '@/types/hero'

export const greg = {
  id: 'greg',
  name: 'グレッグ',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 3,
  icon: '/images/heroes/greg.png',

  exploration: {
    stats: { atk: 4045, def: 3330, hp: 24974 },
    skills: [
    {
      name: '天の正義',
      desc: '天の檻を召喚して、範囲内の敵に攻撃力160%/176%/192%/208%/224%のダメージを与え、眩暈状態にする。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500201.png',
    },
    {
      name: '勧善懲悪',
      desc: '敵を審判し、懲罰または報奨を与える。懲罰はターゲットにグレッグの攻撃力220%/240%/260%/280%/300%に相当するダメージを与える。報奨はターゲットのHPをグレッグの攻撃力50%相当回復する。',
      icon: '/images/skills/hero_skill_icon_500202.png',
    },
    {
      name: '公正判決',
      desc: '敵に自分の犯した罪について厳罰を受けさせる。敵の被ダメージを10%/15%/20%/25%/30%上昇させる。3秒持続。',
      icon: '/images/skills/hero_skill_icon_500203.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '290.23%', def: '290.23%' },
    skills: [
    {
      name: '正義の剣',
      desc: '兵士達を向かうところ敵なしの正義の剣に変える。20%の確率で味方全部隊のダメージが8%/16%/24%/32%/40%上昇する。3ターン持続。',
      icon: '/images/skills/hero_skill_icon_500204.png',
    },
    {
      name: '律令の脅威',
      desc: '教義の威厳で悪人を恐怖させる。味方全部隊の攻撃時、20%の確率で敵軍のダメージを10%/20%/30%/40%/50%低下させる。2ターン持続。',
      icon: '/images/skills/hero_skill_icon_500205.png',
    },
    {
      name: '秩序の庇護',
      desc: '秩序と法への信念が一人一人を鼓舞する。味方全部隊のHPが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500206.png',
    },
  ],
  },
  specialEquipment: {
    name: '王国法典(Lv.10)',
    explorationStats: {
      '攻撃': '764',
      '防御': '630',
      'HP': '4725',
    },
    expeditionStats: {
      '殺傷力': '70%',
      'HP': '70%',
    },
    skills: [
    {
      name: '法廷秩序',
      desc: 'ターゲットは5秒間スキル使用不可（発動済スキルには影響しない）。ターゲットに攻撃力220%/240%/260%/280%/300%のダメージを与える',
      icon: '/images/skills/hero_skill_icon_500207.png',
    },
    {
      name: '正義のラッパ',
      desc: '正義と信念の名目で大軍を招集する。集結部隊のHPが5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500208.png',
    },
  ],
  },
} satisfies Hero
