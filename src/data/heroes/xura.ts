import type { Hero } from '@/types/hero'

export const xura = {
  id: 'xura',
  name: 'シュラ',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 9,
  icon: '/images/heroes/xura.jpg',

  exploration: {
    stats: { atk: 12513, def: 10300, hp: 77256 },
    skills: [
    {
      name: '祈願の舞',
      desc: '古代部族の祈りの舞を始める。毎秒味方全英雄のHPがシュラの攻撃力20%/40%/60%/80%/100%に相当する量回復し、被ダメージが50%低下する。3秒間持続。その間、シュラは制御が無効化される。',
      icon: '/images/skills/hero_skill_icon_500401.png',
    },
    {
      name: '呪縛の秘術',
      desc: '毒の胞子をターゲットに感染させ、攻撃する度にシュラの攻撃力100%/110%/120%/130%/140%に相当する追加ダメージを与える。3秒間持続。',
      icon: '/images/skills/hero_skill_icon_500402.png',
    },
    {
      name: '麻痺の矢',
      desc: '吹き矢に麻痺毒を塗る。シュラの攻撃力が4%/6%/8%/10%/12%上昇し、放たれた矢により20%の確率でターゲットを麻痺で行動不能にさせる。1秒間持続。',
      icon: '/images/skills/hero_skill_icon_500403.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '940.75%', def: '940.75%' },
    skills: [
    {
      name: '霧の胞子',
      desc: '地下に生える神秘的な菌類の胞子で形成された霧で敵の視界を遮り、味方全部隊の被ダメージを4/8/12/16/20%低下させる。',
      icon: '/images/skills/hero_skill_icon_500404.png',
    },
    {
      name: '貫通の矢',
      desc: 'シュラは敵装備の脆弱な箇所を見抜く。弓兵が2回攻撃する度にターゲットに20/40/60/80/100%の追加ダメージを与え、被ダメージを5/10/15/20/25%上昇させる。1ターン持続。',
      icon: '/images/skills/hero_skill_icon_500405.png',
    },
    {
      name: '変幻自在',
      desc: 'シュラの奇妙な戦術は敵を対処不能にさせる。弓兵の被ダメージが3/6/9/12/15%低下し、与ダメージが2/4/6/8/10%上昇する。',
      icon: '/images/skills/hero_skill_icon_500406.png',
    },
  ],
  },
  specialEquipment: {
    name: '術士の仮面(Lv.10)',
    explorationStats: {
      '攻撃': '2,533',
      '防御': '2,088',
      'HP': '15,660',
    },
    expeditionStats: {
      '殺傷力': '232.00%',
      'HP': '232.00%',
    },
    skills: [
    {
      name: '太古の戦歌',
      desc: '太古の戦歌で鼓舞し、攻撃力が最も高い味方の与ダメージが20%/30%/40%/50%/60%上昇する。4秒間持続。',
      icon: '/images/skills/hero_skill_icon_500407.png',
    },
    {
      name: '大地の祝福',
      desc: '大地を讃える古き歌で鼓舞し、防衛部隊の攻撃力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500408.png',
    },
  ],
  },
} satisfies Hero
