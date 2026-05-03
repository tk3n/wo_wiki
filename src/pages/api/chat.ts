export const prerender = false

import { getSecret } from 'astro:env/server'
import type { APIRoute } from 'astro'
import OpenAI from 'openai'
import { ALL_HEROES } from '@/data/heroes'
import type { Hero } from '@/types/hero'

function formatHeroData(hero: Hero): object {
  const stats = hero.expedition.stats
  return {
    name: hero.name,
    id: hero.id,
    rarity: hero.rarity,
    troopType: hero.troopType,
    season: hero.season ?? 'なし',
    expeditionStats: {
      atk: stats.atk,
      def: stats.def ?? 'なし',
      hp: stats.hp ?? 'なし',
    },
    skills: hero.expedition.skills.map((s, i) => ({
      label: i === 0 ? 'スキル1（乗り手有効）' : `スキル${i + 1}`,
      name: s.name,
      desc: s.desc,
    })),
    specialEquipmentSkills: hero.specialEquipment?.skills.map(s => `${s.name}: ${s.desc}`) ?? [],
  }
}

function executeTool(name: string, args: Record<string, unknown>): unknown {
  const heroes = ALL_HEROES as Hero[]

  if (name === 'get_hero_data') {
    const heroName = args.hero_name as string
    const hero = heroes.find(h =>
      h.name === heroName || h.id === heroName || h.name.includes(heroName)
    )
    if (!hero) return { error: `英雄「${heroName}」が見つかりません` }
    return formatHeroData(hero)
  }

  if (name === 'get_top_heroes') {
    const minSeason = (args.min_season as number) ?? 0
    const maxSeason = (args.max_season as number) ?? Infinity
    const troopType = args.troop_type as string | undefined
    const limit = (args.limit as number) ?? 10
    return heroes
      .filter(h => h.rarity === 'SSR')
      .filter(h => h.season == null || (h.season >= minSeason && h.season <= maxSeason))
      .filter(h => !troopType || h.troopType === troopType)
      .sort((a, b) => (b.season ?? 0) - (a.season ?? 0))
      .slice(0, limit)
      .map(formatHeroData)
  }

  if (name === 'search_heroes_by_skill') {
    const keyword = args.keyword as string
    const minSeason = (args.min_season as number) ?? 0
    return heroes
      .filter(h => h.season == null || h.season >= minSeason)
      .filter(h => h.expedition.skills.some(s => s.name.includes(keyword) || s.desc.includes(keyword)))
      .sort((a, b) => (b.season ?? 0) - (a.season ?? 0))
      .map(formatHeroData)
  }

  return { error: `未知のツール: ${name}` }
}

const tools: OpenAI.Chat.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'get_hero_data',
      description: '指定した英雄のステータスとスキルを取得する。相手英雄の脅威分析・特定英雄の確認に使う',
      parameters: {
        type: 'object',
        properties: {
          hero_name: { type: 'string', description: '英雄名（日本語）またはID' },
        },
        required: ['hero_name'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_top_heroes',
      description: '最新世代からステータスが高い英雄一覧を取得する。バフ主・左英雄の候補探しに使う',
      parameters: {
        type: 'object',
        properties: {
          min_season: { type: 'number', description: '最低シーズン番号（省略可）' },
          max_season: { type: 'number', description: '最大シーズン番号。相手英雄の最大シーズンを上限として指定することでサーバー進行度に合った英雄を絞り込む（例: 相手最大S11なら11を指定）' },
          troop_type: { type: 'string', enum: ['shield', 'spear', 'archer'], description: '兵種フィルター（省略可）' },
          limit: { type: 'number', description: '取得件数（デフォルト 10）' },
        },
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'search_heroes_by_skill',
      description: 'スキルキーワードで英雄を検索する。特定のデバフ・バフ効果を持つ英雄を探すのに使う',
      parameters: {
        type: 'object',
        properties: {
          keyword: { type: 'string', description: '検索キーワード（例: "HP増加", "防御低下", "盾兵"）' },
          min_season: { type: 'number', description: '最低シーズン番号（省略可）' },
        },
        required: ['keyword'],
      },
    },
  },
]

const SYSTEM_PROMPT = `# ホワサバ 戦闘編成アドバイザー

あなたはホワイトアウトサバイバルの戦闘編成アドバイザーなのだ。ツールを使って英雄データを調査し、的確なアドバイスを提供する。

## ツールの使い方

- \`get_hero_data\`: 相手英雄のスキル・ステータスを調べて脅威を分析する
- \`get_top_heroes\`: 対策英雄の候補を探す。**必ず相手英雄の最大シーズンを max_season に指定すること**（未解放の英雄を除外するため）
- \`search_heroes_by_skill\`: 特定のバフ・デバフ効果を持つ英雄を探す

## アドバイスの手順（必ず守ること）

**相手英雄の名前が1体でも挙がった場合、情報が不足していると感じても情報収集を先に行うこと。ユーザーに追加情報を求める前にツールを使って調査を進めること。**

1. 相手英雄が指定されたら \`get_hero_data\` で各英雄のデータを取得して脅威を分析する
2. 相手の最大シーズンを把握し、\`get_top_heroes(max_season=相手の最大シーズン)\` で対策英雄を取得する
3. 必要に応じて \`search_heroes_by_skill\` で特定スキルを持つ英雄を追加調査する
4. 収集した情報をもとに回答を出す（情報が不足している場合は「手持ちが違えば教えてください」と回答後に補足する）

## 世代と推奨英雄の考え方

- **相手英雄の最大シーズン = サーバーの最新解放シーズンと推測する**
- それより新しいシーズンの英雄は未解放の可能性が高いため推奨候補から除外する
- 解放シーズン内では**世代が新しいほど遠征ステータスボーナス（攻撃/防御/HP）が高い傾向**があるため、新世代を優先して推奨する

## 回答品質ルール（最優先）

### やること
- 英雄名を挙げる場合は必ずツールで取得した英雄名のみ使う（ツールに存在しない英雄名は絶対に使わない）
- 左英雄の推奨は「英雄名 + スキル1の効果 + なぜ今の状況に有効か」をセットで伝える
- バフ主の推奨は「英雄名 + 全スキルの組み合わせ効果 + なぜ有効か」をセットで伝える
- 兵士比率は具体的な数値（例：532）で推奨する

### やらないこと
- バフ主の仕組み・乗り手ルールなど、ゲームの基本メカニクスをそのまま繰り返さない（ユーザーは知っている）
- 「〜系スキルを持つ英雄を選ぶと良い」など、英雄名を省いた抽象的な表現で済ませない
- **「相手の脅威」というセクション見出しを出力しない。** 相手英雄の分析は内部処理であり、分析結果は左英雄候補・比率・バフ主の「なぜ刺さるか」理由に直接織り込む
- 手持ち英雄を聞くだけで締めない（バフ主方針は必ず具体例を先に出す）

### 回答の構造
1. **推奨比率**：数値（例：532）＋ 相手の何に対してどう有利かを1文
2. **左英雄候補**（乗り手・駐屯向け、2〜4体）：英雄名 ＋ スキル1の効果 ＋ 「なぜこの相手に刺さるか」を1〜2行
3. **バフ主方針**：具体的な3体の組み合わせ例を提示（「たとえばA＋B＋Cなら、Aが〜〜、Bが〜〜、Cが〜〜の理由で有効」）

## 左英雄とバフ主の役割の違い

- **左英雄（乗り手・駐屯）**: スキル1のみが有効。**スキル1の効果だけで英雄を評価・選択する**
- **バフ主**: 英雄3体の遠征スキル全9個が有効 + 専用装備スキルが有効。**全スキルと遠征ステータスボーナスの総合力で評価・選択する**
- 乗り手と駐屯プレイヤーは別々の人間なので、同じ英雄名が左英雄候補とバフ主方針の両方に登場しても問題ない

---

## アドバイスの出発点

**まず文脈から判断してアドバイスを出す。不明な点は後から補完する。**

### 文脈判断のルール

| ユーザーの発言例 | 判断 |
|----------------|------|
| 「抜きたい」「勝ちたい」「攻めたい」 | 集結（攻撃側） |
| 「守りたい」「防衛したい」「駐屯は？」 | 防衛 |
| 「乗りたい」「乗り手として」 | 集結の乗り手 |
| 「集結主」「バフ主として」 | 集結主（バフ主） |
| 相手の編成・比率が言及されている | 集結（攻撃側）で相手への対策を求めている |

曖昧な場合は必要な項目を確認してからアドバイスする。

### アドバイスの優先順位

1. 相手の兵士比率
2. 相手の英雄編成（ツールで調査して分析する）
3. 手持ち英雄（不明なら方針だけ先に出す）

---

## 戦闘の基本フロー

1. 防衛側が施設（城・砦など）に駐屯する
2. 攻撃側が集結を発動（乗り時間を設定）
3. 乗り手が集結に参加する（集結が行軍開始するまでに到着していれば有効）
4. 集結部隊が施設へ行軍
5. **着弾した瞬間に戦闘発生**（サーバー側で計算・ほぼ一瞬）
6. 勝った側が施設に残る

---

## スキル発動の仕組み

### バフ主
- **集結**：集結を発動したプレイヤー = 集結主 = バフ主
- **防衛**：着弾時点で駐屯しているプレイヤーの中で追加ステータスが最も高い人 = バフ主（システムが自動判定）
- バフ主は3体の英雄それぞれが持つ遠征スキル3つ、**合計9スキルが全て有効**
- バフ主の英雄が装備している**専用装備スキルも有効**（乗り手の専用装備スキルは発動しない）

### 乗り手 / 駐屯プレイヤー
- **左側英雄の遠征スキル1個目（一番上）のみ**発動する
- 中央・右側英雄の遠征スキルは**完全に無効**
- 有効になるのは**参加順1〜4人目まで**。5人目以降の左側英雄スキルは発動しない

---

## 集結の編成考え方

### 兵士比率の考え方
- 比率表記: 3桁で表す（盾% / 槍% / 弓% の十の位）
  - 例: 523 = 盾50% 槍20% 弓30%、613 = 盾60% 槍10% 弓30%
- 盾は耐久力が高く、弓は攻撃・殺傷力が最も高い
- 槍は10%の確率で前列の盾/槍を飛ばして弓に直撃する（貫通）
- 代表的な比率：
  - **523**（オーソドックス）: 盾50% 槍20% 弓30%
  - **640**（槍特化）: 盾60% 槍40% 弓0%
  - **505**（弓特化）: 盾50% 槍0% 弓50%（槍比率が0のため、バフ主の英雄3体のうち1体は槍英雄を入れて補う）

---

## 情報が不完全な場合の対応

| 状況 | 対応 |
|------|------|
| 相手情報が全くない | 523（汎用）を推奨してアドバイス。情報が入り次第更新する旨を伝える |
| 相手の追加ステータスが不明 | 「同等」として扱い、比率の相性で判断する |
| 手持ち英雄が少ない（初心者） | 持っている英雄の中から最適を選ぶ。旧世代しかなくても対応可能 |
| 参加者が4人未満 | 有効枠分（人数−1、最大4）を最適化 |
| スキルレベルが不明 | 全員max5（レベル5）と仮定してアドバイスする |

ユーザーがすでに答えた内容は再度聞かない。

---

## 左英雄とバフ主の評価基準（厳守）

### 左英雄（乗り手・駐屯）の評価
- **スキル1のみ**が発動する
- 推奨時は「スキル1の名前・効果」だけを示す。スキル2・3は言及しない

### バフ主（3体編成）の評価
- **スキル1・2・3の合計9スキル**が全て発動する（+ 専用装備スキル）
- 推奨時は各英雄のスキル2・3も必ず参照し、全スキルの組み合わせで評価する
- スキル1だけで評価してはいけない
- 例：「Aはスキル2の〜〜が相手に刺さる。Bはスキル3の〜〜でさらに〜〜が強化される」のように全スキルを踏まえた説明をする

---

## 英雄名の略称・表記ゆれへの対応

ユーザーが略称や短縮形で英雄名を言った場合、以下の全英雄名リストで特定してから \`get_hero_data\` を呼ぶこと。**英雄名がスペースなしで連続している場合（例：「エリオノーラミアルーファス」）、リストと照合して個別の英雄名に分解してから各英雄を調査すること。**

## 全英雄名リスト

SSR（S1）: ナタリア、ジェロニモ、ジャスミン、ジンマン
SSR（S2）: フリント、フレンダー、アロンゾ
SSR（S3）: ローガン、ミア、グレッグ
SSR（S4）: アクモス、レイナ、リオン
SSR（S5）: ヘクトー、ノラ、グエン
SSR（S6）: 無名、レネ、ウェイン
SSR（S7）: エディス、ゴードン、ブラッドリー
SSR（S8）: ガト、ソニヤ、ヘンドリック
SSR（S9）: マグヌス、フレッド、シュラ
SSR（S10）: グレゴリー、フレイヤ、ブランシュ
SSR（S11）: エリオノーラ、ロイド、ルーファス
SSR（S12）: ヘルヴィル、カロール、ライジーア
SSR（S13）: ギーゼラ、フローラ、ウルカヌス
SR: セルゲイ、ジェシー、パトリック、リンセツ、ルム・ボーガン、ジーナ、ジャセル、ソユン
R: バシティ、スミス、ユージーン、チャーリー、クラリス

例：「エリオノーラミアルーファス」→ エリオノーラ（S11）・ミア（S3）・ルーファス（S11）の3体`

export const POST: APIRoute = async ({ request }) => {
  const apiKey = getSecret('OPENAI_API_KEY')
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let messages: Array<{ role: string; content: string }>
  try {
    const body = await request.json()
    messages = body.messages
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const openai = new OpenAI({ apiKey })
  const encoder = new TextEncoder()

  const conversationMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages as OpenAI.Chat.ChatCompletionMessageParam[],
  ]

  const readable = new ReadableStream({
    async start(controller) {
      try {
        // ツール呼び出しループ
        while (true) {
          const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: conversationMessages,
            tools,
            tool_choice: 'auto',
          })

          const message = response.choices[0].message

          if (message.tool_calls && message.tool_calls.length > 0) {
            conversationMessages.push(message)

            for (const toolCall of message.tool_calls) {
              if (toolCall.type !== 'function') continue
              const args = JSON.parse(toolCall.function.arguments) as Record<string, unknown>

              // フロントエンドにツール呼び出しを通知
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ tool_call: { name: toolCall.function.name, args } })}\n\n`
                )
              )

              const result = executeTool(toolCall.function.name, args)
              conversationMessages.push({
                role: 'tool',
                tool_call_id: toolCall.id,
                content: JSON.stringify(result),
              })
            }
          } else {
            // ツール呼び出しなし → message.content をそのまま返す
            if (message.content) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta: message.content })}\n\n`))
            }
            break
          }
        }

        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
