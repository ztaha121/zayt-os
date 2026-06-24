import { useState, useRef, useEffect } from 'react'
import { TERMINAL_RESPONSES } from '../data/portfolio'

const SYSTEM_PROMPT = `You are the interactive terminal on Zaynab Taha's portfolio website (Z://OS).
You answer questions about Zaynab in first person on her behalf, as if you ARE her portfolio AI.
Keep responses short (3-6 lines max), punchy, and technical. Use plain text, no markdown.

Key facts about Zaynab:
- AI developer, founder, MSc candidate at University of Ottawa (Interdisciplinary AI)
- Based in Dhahran, Saudi Arabia. Canadian-Moroccan.
- Co-inventor at DTH Technology SARL with her father Dr. Othman Taha
- AI & Data Analyst at Optvance.ai
- Built Mizan — AI calorie tracker PWA for Arabic/Gulf users (live on Vercel, React/Vite/Supabase/Claude Haiku)
- Runs ZAYT CV Services — Arabic-language CV optimization for Saudi market
- Filed 10 USPTO provisional patents (Optvance AI, WaterSentinel, Health Mizan)
- Submitted 3 abstracts to ADIPEC 2026 in Abu Dhabi
- Stack: Python, React, Vite, FastAPI, Flask, Node.js, Supabase, PostgreSQL, Kafka, Airflow, AWS
- Built JobAgent AI — autonomous job application agent
- GitHub: github.com/ztaha121
- Open to AI/data roles in Saudi Arabia or remote`

export default function TerminalWindow() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Z://OS Terminal v1.0 — type "help" for commands or ask anything.' },
    { type: 'output', text: 'This terminal is powered by AI and actually knows who I am.' },
    { type: 'output', text: '' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [cmdHistory, setCmdHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const run = async (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    setHistory(h => [...h, { type: 'input', text: cmd }])
    setCmdHistory(h => [cmd, ...h])
    setHistIdx(-1)
    setInput('')

    if (trimmed === 'clear') { setHistory([]); return }

    const local = TERMINAL_RESPONSES[trimmed]
    if (local) {
      if (local === '__CLEAR__') { setHistory([]); return }
      setHistory(h => [...h, { type: 'output', text: local }])
      return
    }

    const apiKey = import.meta.env.VITE_GROQ_API_KEY
    if (!apiKey || apiKey === 'your_groq_api_key_here') {
      setHistory(h => [...h, { type: 'error', text: 'AI not configured. Add VITE_GROQ_API_KEY to .env and restart.' }])
      return
    }

    setLoading(true)
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          max_tokens: 300,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: cmd },
          ],
        }),
      })
      const data = await res.json()
      if (data.error) {
        setHistory(h => [...h, { type: 'error', text: `Groq error: ${data.error.message}` }])
      } else {
        const text = data.choices?.[0]?.message?.content || 'No response'
        setHistory(h => [...h, { type: 'output', text }])
      }
    } catch (err) {
      setHistory(h => [...h, { type: 'error', text: `Network error: ${err.message}` }])
    } finally {
      setLoading(false)
    }
  }

  const onKey = (e) => {
    if (e.key === 'Enter') {
      run(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const idx = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(idx)
      setInput(cmdHistory[idx] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const idx = Math.max(histIdx - 1, -1)
      setHistIdx(idx)
      setInput(idx === -1 ? '' : cmdHistory[idx])
    }
  }

  return (
    <div
      style={{ height: '340px', display: 'flex', flexDirection: 'column', fontFamily: 'var(--mono)', fontSize: '12px' }}
      onClick={() => inputRef.current?.focus()}
    >
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', lineHeight: '1.75' }}>
        {history.map((line, i) => (
          <div key={i}>
            {line.type === 'input' ? (
              <div>
                <span style={{ color: '#10b981' }}>zaynab@Z:~$ </span>
                <span style={{ color: 'rgba(255,255,255,0.9)' }}>{line.text}</span>
              </div>
            ) : (
              <div style={{
                color: line.type === 'error' ? '#ef4444' : 'rgba(255,255,255,0.6)',
                whiteSpace: 'pre-wrap', marginBottom: '4px',
              }}>{line.text}</div>
            )}
          </div>
        ))}
        {loading && <div style={{ color: '#a78bfa' }}>thinking...</div>}
        <div ref={endRef} />
      </div>

      <div style={{
        borderTop: '0.5px solid rgba(255,255,255,0.07)',
        padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <span style={{ color: '#10b981', flexShrink: 0 }}>zaynab@Z:~$</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          disabled={loading}
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--mono)', fontSize: '12px',
            caretColor: '#a78bfa',
          }}
          placeholder={loading ? 'thinking...' : 'type a command or ask anything...'}
        />
      </div>
    </div>
  )
}
