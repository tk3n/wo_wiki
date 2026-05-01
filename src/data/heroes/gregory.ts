import type { Hero } from '@/types/hero'

export const gregory = {
  id: 'gregory',
  name: 'グレゴリー',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 10,
  icon: '/images/heroes/gregory350.jpg',

  exploration: {
    stats: { atk: 9484, def: 12364, hp: 185480 },
    skills: [
    {
      name: '破嶺の大剣',
      desc: '力を溜めて大剣を振り回し、山をも砕く力で敵を斬りつける。攻撃力100/110/120/130/140%の範囲ダメージを与え、ターゲットを1秒眩暈状態にする。',
      icon: '/images/skills/hero_skill_icon_500411.png',
    },
    {
      name: '剣盾一体',
      desc: '大剣はまるで鋼鉄の壁のようになる。10/20/30/40/50%の確率でグレゴリーへのダメージをブロックし、ダメージを半減させる。',
      icon: '/images/skills/hero_skill_icon_500412.png',
    },
    {
      name: '崇高なる犠牲',
      desc: '身体が朽ち果てても意志は引き継がれ、後継者達を奮い立たせる。グレゴリーが倒されると、味方全部隊の攻撃力が8/12/16/20/24%上昇する。5秒持続。',
      icon: '/images/skills/hero_skill_icon_500413.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1110.88%', def: '1110.88%' },
    skills: [
    {
      name: '灼熱の軍団',
      desc: 'グレゴリーの卓越した指揮能力により、味方全部隊の攻撃力が3/6/9/12/15%、防御力が2/4/6/8/10%上昇する。',
      icon: '/images/skills/hero_skill_icon_500414.png',
    },
    {
      name: '制圧突撃',
      desc: 'グレゴリーの勇気と熱意が全員を鼓舞し、味方全部隊の通常攻撃時に5/10/15/20/25%の確率でクリティカルダメージを発生させる。',
      icon: '/images/skills/hero_skill_icon_500415.png',
    },
    {
      name: '鋼鉄の防壁',
      desc: 'グレゴリーは盾兵を指揮し、隙間のない防御線を築く。彼らが受けるダメージが4/8/12/16/20%低下する。',
      icon: '/images/skills/hero_skill_icon_500416.png',
    },
  ],
  },
  specialEquipment: {
    name: '灼陽巨剣(Lv.10)',
    explorationStats: {
      '攻撃': '1,921',
      '防御': '2,506',
      'HP': '37,597',
    },
    expeditionStats: {
      '殺傷力': '277.50%',
      'HP': '277.50%',
    },
    skills: [
    {
      name: '意志の鎧',
      desc: '鋼鉄の鎧を纏ったグレゴリーの防御力が10/20/30/40/50%上昇する。意志が編まれた無形の鎧がグレゴリーをこの上なく頑強にし、眩暈、麻痺、凍結などの中断効果が無効になる。',
      icon: '/images/skills/hero_skill_icon_500417.png',
    },
    {
      name: '灼熱の堅城',
      desc: '勇気と決意は金城湯池に勝る！グレゴリーの鼓舞と指揮により、防衛部隊の殺傷力が5/7.5/10/12.5/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500418.png',
    },
  ],
  },
} satisfies Hero
