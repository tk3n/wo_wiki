import type { Hero } from '@/types/hero'

export const mia = {
  id: 'mia',
  name: 'ミア',
  rarity: 'SSR',
  troopType: 'spear',
  heroType: '戦闘',
  season: 3,
  icon: '/images/heroes/mia.png',

  exploration: {
    stats: { atk: 3330, def: 3330, hp: 33300 },
    skills: [
    {
      name: '運命の終曲',
      desc: '札を投げて敵を攻撃し、ターゲットに攻撃力270%/297%/324%/351%/378%のダメージを与える。 さらにランダムに「攻撃力20%低下、2秒持続」または「眩暈状態、1.5秒持続」のどちらかを付与する。',
      icon: '/images/skills/hero_skill_icon_500161.png',
    },
    {
      name: '厄災の予兆',
      desc: 'ミアの攻撃力50%/55%/60%/65%/70%を「基礎値」として流動ダメージを与える。 最終ダメージは「基礎値」の5%～600%の間のランダムな値となる。',
      icon: '/images/skills/hero_skill_icon_500162.png',
    },
    {
      name: '天命の守護',
      desc: 'HPパーセンテージが最も低い味方英雄のHPをミアの攻撃力100%/110%/120%/130%/140%を「基礎値」として回復する。 最終回復量は「基礎値」5%～400%間のランダムな値となる。',
      icon: '/images/skills/hero_skill_icon_500163.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '290.23%', def: '290.23%' },
    skills: [
    {
      name: '不幸の連鎖',
      desc: '味方全部隊の攻撃が50%の確率で敵を災難に陥れ、ターゲットの被ダメージを10%/20%/30%/40%/50%上昇させる。',
      icon: '/images/skills/hero_skill_icon_500164.png',
    },
    {
      name: '幸運の加護',
      desc: '味方全部隊の攻撃時に50%の確率で今回のダメージが10%/20%/30%/40%/50%上昇する。',
      icon: '/images/skills/hero_skill_icon_500165.png',
    },
    {
      name: '秘儀の解読',
      desc: '40%の確率で味方全部隊の被ダメージが10%/20%/30%/40%/50%低下する。',
      icon: '/images/skills/hero_skill_icon_500166.png',
    },
  ],
  },
  specialEquipment: {
    name: '運命水晶(Lv.10)',
    explorationStats: {
      '攻撃': '630',
      '防御': '630',
      'HP': '6300',
    },
    expeditionStats: {
      '殺傷力': '70%',
      'HP': '70%',
    },
    skills: [
    {
      name: '真実の眼',
      desc: 'ミアの「変動」効果のある全スキルの変動上限と下限がそれぞれ30%/60%/90%/120%/150%上昇。',
      icon: '/images/skills/hero_skill_icon_500167.png',
    },
    {
      name: '宿命の集結',
      desc: '集結部隊の攻撃力が5%/7.5%/10%/12.5%/15%上昇する。',
      icon: '/images/skills/hero_skill_icon_500168.png',
    },
  ],
  },
} satisfies Hero
