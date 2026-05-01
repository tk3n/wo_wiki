import type { Hero } from '@/types/hero'

export const vulcanus = {
  id: 'vulcanus',
  name: 'ウルカヌス',
  rarity: 'SSR',
  troopType: 'archer',
  heroType: '戦闘',
  season: 13,
  icon: '/images/heroes/20250519%E8%8B%B1%E9%9B%84%E5%A4%B4%E5%83%8Fvulcanus.jpg',

  exploration: {
    stats: { atk: 25998, def: 21400, hp: 160506 },
    skills: [
    {
      name: '城砕きの矢(Lv.5)',
      desc: '城壁を貫く程の重弩から3本の矢を放つ。攻撃力*200/220/240/260/280%のダメージを与え、ターゲットに出血効果を付与する。出血効果：0.5秒毎に攻撃力*10%のダメージを受ける。3秒持続',
      icon: '/images/skills/hero_skill_icon_500521.png',
    },
    {
      name: '禁錮の矢(Lv.5)',
      desc: '敵の英雄に鎖付きの矢を放ち、攻撃力*100%/110%/120%/130%/140%のダメージを与える。鎖が絡みつくことでその英雄を2秒間眩暈状態にして行動不能にする',
      icon: '/images/skills/hero_skill_icon_500522.png',
    },
    {
      name: '篝火の光(Lv.5)',
      desc: 'ウルカヌスは暗闇を払いのける炎のように士気を鼓舞する。部隊の護衛の攻撃力が10%/15%/20%/25%/30%、防御力が10%/15%/20%/25%/30%上昇する',
      icon: '/images/skills/hero_skill_icon_500523.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '1,621.29%', def: '1,621.29%' },
    skills: [
    {
      name: '覇者の怒り(Lv.5)',
      desc: 'ウルカヌスは恐怖で相手を震えさせる力を持つ。彼の怒りは敵全体の攻撃力を4%/8%/12%/16%/20%低下させる',
      icon: '/images/skills/hero_skill_icon_500524.png',
    },
    {
      name: '貫通裂刃(Lv.5)',
      desc: '武器に鋼刃を追加し、味方全体が5回攻撃する毎に次の攻撃で対象に20%/40%/60%/80%/100%の追加ダメージを与える。鋭い刃は甲冑を損傷させ、対象は次に攻撃を受ける際に5%/7.5%/10%/12.5%/15%の追加ダメージを受ける',
      icon: '/images/skills/hero_skill_icon_500525.png',
    },
    {
      name: '破砕の矢(Lv.5)',
      desc: '威力と貫通性能を強化した改良矢を使用し、3ターン毎に敵の盾兵と槍兵の防御力を12%/24%/36%/48%/60%低下させる。同時に味方弓兵の攻撃力が12%/24%/36%/48%/60%上昇する。1ターン持続',
      icon: '/images/skills/hero_skill_icon_500526.png',
    },
  ],
  },
  specialEquipment: {
    name: '滅びの軌跡(Lv.10)',
    explorationStats: {
      '攻撃': '5,263',
      '防御': '4,338',
      'HP': '32,535',
    },
    expeditionStats: {
      '殺傷力': '405.00%',
      'HP': '405.00%',
    },
    skills: [
    {
      name: '鋭刃の矢(Lv. 5)',
      desc: '地下都市国家で随一の職人によって矢尻が改良され、ウルカヌスのすべての攻撃が敵に出血を引き起こす。さらに出血効果が強化され、0.5秒毎に攻撃力*4/8/12/16/20%のダメージを与える。3秒間持続',
      icon: '/images/skills/hero_skill_icon_500527.png',
    },
    {
      name: '王者の威厳(Lv. 5)',
      desc: 'ウルカヌスの威厳と指揮技術により、集結部隊の攻撃力が5/7.5/10/12.5/15%上昇する',
      icon: '/images/skills/hero_skill_icon_500528.png',
    },
  ],
  },
} satisfies Hero
