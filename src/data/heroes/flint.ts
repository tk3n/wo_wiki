import type { Hero } from '@/types/hero'

export const flint = {
  id: 'flint',
  name: 'フリント',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 2,
  icon: '/images/heroes/flint.png',

  exploration: {
    stats: { atk: 2043, def: 2664, hp: 39960 },
    skills: [
    {
      name: '復讐の焔',
      desc: '激しく渦巻く烈火を噴射し敵を焼き尽くす。0.5秒毎に攻撃力60%/66%/72%/78%/84%のダメージを与え、ターゲットの被ダメージを10%/15%/20%/25%/30%上昇させる。2秒持続。',
      icon: '/images/skills/hero_skill_icon_500211.png',
    },
    {
      name: '怒りの火',
      desc: '傷の痛みがフリントの潜在能力を解き放つ。HPが50%を下回った際、即座に自分のHP上限の20%/25%/30%/35%/40%を回復する。1回の戦闘で1度しか発動しない。',
      icon: '/images/skills/hero_skill_icon_500212.png',
    },
    {
      name: '熱源拡散',
      desc: '焔は我々と共に作戦を行う友の寒さを打ち消してくれる。自軍全体の英雄の攻撃速度が3%/4%/5%/6%/7%上昇する。',
      icon: '/images/skills/hero_skill_icon_500213.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '240.19%', def: '240.19%' },
    skills: [
    {
      name: '野火',
      desc: '金石の衝突で散る火花さえ野火となり得る。フリント率いる盾兵の与ダメージが20%/40%/60%/80%/100%上昇する。',
      icon: '/images/skills/hero_skill_icon_500214.png',
    },
    {
      name: '森林火災',
      desc: '炎は寒さを打ち消し、戦意を高揚させる。味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500215.png',
    },
    {
      name: '灼熱の魂',
      desc: 'フリントの怒りは烈火の如く全てを呑み込む。味方全部隊の殺傷力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500216.png',
    },
  ],
  },
} satisfies Hero
