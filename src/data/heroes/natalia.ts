import type { Hero } from '@/types/hero'

export const natalia = {
  id: 'natalia',
  name: 'ナタリア',
  rarity: 'SSR',
  troopType: 'shield',
  heroType: '戦闘',
  season: 1,
  icon: '/images/heroes/natalia.png',

  exploration: {
    stats: { atk: 1873, def: 2220, hp: 36630 },
    skills: [
    {
      name: '獣の怒り',
      desc: '白熊が立ち上がって地面を叩き、攻撃160%/176%/192%/208%/224%の範囲ダメージを与える。さらに範囲内の敵を撃退して眩暈状態にする。',
      icon: '/images/skills/hero_skill_icon_500091.png',
    },
    {
      name: '激励',
      desc: '鞭を振り回し、ターゲットに攻撃150%/165%/180%/195%/210%のダメージを与える。',
      icon: '/images/skills/hero_skill_icon_500092.png',
    },
    {
      name: '狂乱の炎',
      desc: '白熊と彼の相棒は手強い。ダメージを受けた際、ナタリアは10%の確率で攻撃力が4%/6%/8%/10%/12%上昇する。3秒持続（5回まで重ね掛け可能）。',
      icon: '/images/skills/hero_skill_icon_500093.png',
    },
  ],
  },

  expedition: {
    stats: { atk: '200.16%', def: '200.16%' },
    skills: [
    {
      name: '野性の守護',
      desc: 'ナタリアが獣の群れを指揮して戦士を援護する。40%の確率で味方全部隊の被ダメージを10%/20%/30%/40%/50%軽減する。',
      icon: '/images/skills/hero_skill_icon_500095.png',
    },
    {
      name: '獣群の王',
      desc: 'ナタリアが味方を励ます。味方全部隊の攻撃力が5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500094.png',
    },
    {
      name: '野獣召喚',
      desc: 'ナタリアが獣の群れを召喚して戦いに協力させる。味方全部隊のダメージが5%/10%/15%/20%/25%上昇する。',
      icon: '/images/skills/hero_skill_icon_500096.png',
    },
  ],
  },
  special: [
    {
      name: '白熊の力',
      desc: '全軍に白熊のような有機と力を受ける。ナタリアが出征するかどうかに関わらず、味方全部隊の攻撃力と防御力が2%/4%/6%/8%/10%上昇する。',
      icon: '/images/skills/娜塔莉亚天赋.png',
    },
  ],
} satisfies Hero
