import type { Hero } from '@/types/hero'

export const freya = {
  id: 'freya',
  name: 'フレイヤ',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 10,
  icon: '/images/heroes/freya350.jpg',

  exploration: {
    stats: { atk: 12364, def: 12364, hp: 123654 },
    skills: [
    {
      name: '灰滅の舞(Lv.5)',
      desc: '鎖を振り回し、ターゲット及び一定範囲内の敵に攻撃力*200/220/240/260/280%のダメージを与えてマークする。マークは3秒間持続し、マークされた敵がダメージを受けると周囲の敵もその40/50/60/70/80%のダメージを受ける。（発動クールダウン0.5秒）',
      icon: '/images/skills/%E5%AE%88%E5%A4%9C%E4%BA%BA2.png',
    },
    {
      name: '棘の束縛(Lv.5)',
      desc: '鎖で敵を攻撃しながら拘束し、攻撃力*100/110/120/130/140%のダメージを与える。さらに行動不能状態にする。1.5秒持続。',
      icon: '/images/skills/%E5%AE%88%E5%A4%9C%E4%BA%BA3.png',
    },
    {
      name: '血焰の怒り(Lv.5)',
      desc: '周期的に恐ろしい狂気が爆発する。8/7/6/5/4回通常攻撃する度に、次の通常攻撃の会心率が60/70/80/90/100%上昇する。',
      icon: '/images/skills/%E5%AE%88%E5%A4%9C%E4%BA%BA4.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1,110.88%', def: '1,110.88%' },
    skills: [
    {
      name: '夕暮れの霧(Lv.5)',
      desc: '煙幕弾を投げて敵の視界を遮り、敵全体の攻撃力を4/8/12/16/20%低下させる。',
      icon: '/images/skills/%E5%AE%88%E5%A4%9C%E4%BA%BA5.png',
    },
    {
      name: '新月の鎌(Lv.5)',
      desc: '三日月のような凶刃が敵を刈り取る。通常攻撃後に50%の確率で追撃が1度発動し、20/40/60/80/100%の追加ダメージを与える。',
      icon: '/images/skills/%E5%AE%88%E5%A4%9C%E4%BA%BA6.png',
    },
    {
      name: '疾風の一撃(Lv.5)',
      desc: 'フレイヤが奇襲を仕掛けて敵の陣形を崩し、防衛線を崩壊させる。味方の盾兵と弓兵の被ダメージが3/6/9/12/15%低下し、与ダメージが3/6/9/12/15%上昇する。',
      icon: '/images/skills/%E5%AE%88%E5%A4%9C%E4%BA%BA7.png',
    },
  ],
  },
  specialEquipment: {
    name: '血月の悲哀(Lv.10)',
    explorationStats: {
      '攻撃': '2,506',
      '防御': '2,506',
      'HP': '25,065',
    },
    expeditionStats: {
      '殺傷力': '277.50%',
      'HP': '277.50%',
    },
    skills: [
    {
      name: '闇夜の襲撃(Lv.5)',
      desc: '過酷な訓練によってフレイヤの与ダメージが10/15/20/25/30%上昇する。また驚異的な洞察力と反応により、敵がユニットを召喚した際、そのユニットに対して攻撃力*100/150/200/250/300%のダメージを与える。',
      icon: '/images/skills/%E5%AE%88%E5%A4%9C%E4%BA%BA8.png',
    },
    {
      name: '闇夜の見張り(Lv.5)',
      desc: 'フレイヤの目は決して怠ることはない。彼女の厳重な警戒により防衛部隊の防御力が5/7.5/10/12.5/15%上昇する。',
      icon: '/images/skills/%E5%AE%88%E5%A4%9C%E4%BA%BA1.png',
    },
  ],
  },
} satisfies Hero
