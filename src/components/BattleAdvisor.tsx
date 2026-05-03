import { useState, useEffect, useRef } from 'preact/hooks'
import {
  page,
  header,
  headerTitle,
  nav,
  navLink,
  navLinkActive,
  betaBadge,
  chatContainer,
  messagesArea,
  emptyState,
  emptyStateTitle,
  exampleList,
  exampleItem,
  userMessage,
  assistantMessage,
  streamingCursor,
  inputArea,
  textarea,
  sendButton,
  disclaimer,
} from '@/styles/battleAdvisor.css'

type ToolCall = {
  name: string
  args: Record<string, unknown>
}

type Message = {
  role: 'user' | 'assistant'
  content: string
  toolCalls?: ToolCall[]
}

type Props = {
  baseUrl: string
}

function toolCallLabel(tc: ToolCall): string {
  if (tc.name === 'get_hero_data') return `${tc.args.hero_name} を調査中...`
  if (tc.name === 'get_top_heroes') {
    const parts: string[] = ['英雄候補を検索中...']
    if (tc.args.max_season) parts[0] = `S${tc.args.max_season}以下の英雄を検索中...`
    return parts[0]
  }
  if (tc.name === 'search_heroes_by_skill') return `「${tc.args.keyword}」スキルを検索中...`
  return `${tc.name} を実行中...`
}

const EXAMPLES = [
  '相手が523の編成です。集結の乗り手として左英雄は何がいいですか？',
  '防衛の編成を教えてください。バフ主は誰がいいですか？',
  '相手が613、こちらの兵士比率はどうすればいいですか？',
]

export function BattleAdvisor({ baseUrl }: Props) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const base = baseUrl.replace(/\/$/, '')
  const skillsUrl = `${base}/heroes/skills`
  const battleAdvisorUrl = `${base}/battle-advisor`

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function adjustHeight() {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 140) + 'px'
  }

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim()
    if (!content || isStreaming) return

    const userMsg: Message = { role: 'user', content }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setInput('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
    setIsStreaming(true)

    setMessages(prev => [...prev, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!res.ok) throw new Error('API error')

      const reader = res.body!.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6)
          if (data === '[DONE]') continue

          try {
            const parsed = JSON.parse(data)
            if (parsed.delta) {
              setMessages(prev => {
                const updated = [...prev]
                const last = updated[updated.length - 1]
                updated[updated.length - 1] = { ...last, content: last.content + parsed.delta, toolCalls: [] }
                return updated
              })
            } else if (parsed.tool_call) {
              setMessages(prev => {
                const updated = [...prev]
                const last = updated[updated.length - 1]
                const existing = last.toolCalls ?? []
                updated[updated.length - 1] = { ...last, toolCalls: [...existing, parsed.tool_call] }
                return updated
              })
            }
          } catch {
            // JSONパースエラーは無視
          }
        }
      }
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: 'エラーが発生しました。しばらく待ってからもう一度お試しください。',
        }
        return updated
      })
    } finally {
      setIsStreaming(false)
    }
  }

  function onKeyDown(e: KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div class={page}>
      <div class={header}>
        <a href={baseUrl} class={headerTitle}>ホワサバ非公式Wiki</a>
        <nav class={nav}>
          <a href={baseUrl} class={navLink}>英雄一覧</a>
          <a href={skillsUrl} class={navLink}>スキル確認</a>
          <a href={battleAdvisorUrl} class={`${navLink} ${navLinkActive}`}>
            戦闘相談<span class={betaBadge}>β</span>
          </a>
        </nav>
      </div>

      <div class={chatContainer}>
        <div class={messagesArea}>
          {messages.length === 0 ? (
            <div class={emptyState}>
              <p class={emptyStateTitle}>集結・防衛の編成を相談できたい</p>
              <div class={exampleList}>
                {EXAMPLES.map(ex => (
                  <button key={ex} class={exampleItem} onClick={() => sendMessage(ex)}>
                    {ex}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} class={msg.role === 'user' ? userMessage : assistantMessage}>
                {msg.role === 'assistant' && msg.toolCalls && msg.toolCalls.length > 0 && (
                  <div>
                    {msg.toolCalls.map((tc, j) => (
                      <div key={j} style={{ fontSize: '0.8em', opacity: 0.6, marginBottom: '4px' }}>
                        🔍 {toolCallLabel(tc)}
                      </div>
                    ))}
                  </div>
                )}
                {msg.content}
                {isStreaming && msg.role === 'assistant' && i === messages.length - 1 && (
                  <span class={streamingCursor} />
                )}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <div class={inputArea}>
          <textarea
            ref={textareaRef}
            class={textarea}
            value={input}
            onInput={(e) => {
              setInput((e.target as HTMLTextAreaElement).value)
              adjustHeight()
            }}
            onKeyDown={onKeyDown}
            placeholder="相談内容を入力（Ctrl+Enter で送信）"
            rows={1}
            disabled={isStreaming}
          />
          <button
            class={sendButton}
            onClick={() => sendMessage()}
            disabled={isStreaming || !input.trim()}
          >
            {isStreaming ? '…' : '送信'}
          </button>
        </div>

        <p class={disclaimer}>
          AIによるアドバイスは参考情報です。ゲームデータが最新でない場合があります。
        </p>
      </div>
    </div>
  )
}
