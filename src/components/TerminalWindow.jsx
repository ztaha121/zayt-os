import { useState, useRef, useEffect } from 'react'
import { TERMINAL_RESPONSES } from '../data/portfolio'

const SYSTEM_PROMPT = `You are the interactive terminal on Zaynab Taha's portfolio website (Z://OS).
You answer questions about Zaynab in first person on her behalf, as if you ARE her portfolio AI.
Keep responses short (3-6 lines max), punchy, and technical. Use plain text, no markdown.

FULL RESUME:

ZAYNAB TAHA
Dhahran, Saudi Arabia | zay.taha@gmail.com | github.com/ztaha121
Canadian-Moroccan. Bilingual Arabic/English (IELTS 7.0). Available immediately.

SUMMARY:
IT Support Specialist with enterprise experience at Honeywell. Builds AI-powered apps, automates workflows, writes code.
Founder of ZAYT CV Services. Currently pursuing MSc in AI at University of Ottawa.

EXPERIENCE:
- Honeywell (Jun–Aug 2024): IT Support Specialist Co-op, Saudi Arabia
  Microsoft 365, Active Directory, ServiceNow, PowerShell automation, TCP/IP/DHCP/DNS, workstation imaging, SLA compliance
- ZAYT CV Services (2024–present): Founder & CV Consultant, Saudi Arabia
  CV optimization service for Saudi/Gulf market. Node.js + docx automation pipeline. Built AI CV Scorer with Groq API.
- Optvance.ai: AI & Data Analyst — anomaly detection dashboard delivered in 1.5 months
- DTH Technology SARL: AI Developer & Co-Inventor with father Dr. Othman Taha — filed 10 USPTO provisional patents

PROJECTS:
- Mizan (Health Mizan): AI food tracker PWA — Claude Haiku API, React/Vite, Supabase, barcode scanner, 140+ Gulf/Arabic foods, biometric login, Lemon Squeezy payments, USPTO patent pending. Live: calorie-tracker-fawn-sigma.vercel.app
- ZAYT CV Scorer: Python + Groq AI, scores CVs for ATS compatibility, quantification, content strength
- JobAgent AI: Autonomous job application agent — Flask, Groq AI, Gmail OAuth, Playwright, Adzuna API. github.com/ztaha121/job-application-agent
- Healthcare Practitioner Verification System: React + MongoDB, AI credential verification
- Wildfire Probability Prediction: FIRMS + ERA5 data, XGBoost/Random Forest, Alberta & Saskatchewan
- Farm OS (AD Agrotech): FastAPI + PostgreSQL + React + WhatsApp bridge
- Bank Churn Prediction: Classification models on 10k-row banking dataset

EDUCATION:
- MSc Interdisciplinary AI, University of Ottawa (Jan 2026–present, online)
  Coursework: ML, Data Science, Systems Optimization, Time Series Forecasting, Recommendation Systems, Data Engineering
- BSc Information Technology, Prince Mohammed Bin Fahd University (2021–2025), GPA 3.3/4.0

SKILLS:
- IT Support: Windows 10/11, Active Directory, Microsoft 365, ServiceNow, TCP/IP, DHCP, DNS, PowerShell
- Dev: Python, Flask, FastAPI, React/Vite, Node.js, ASP.NET, C#, HTML/CSS/JS, Git
- Data/BI: Power BI, Tableau, Excel, pandas, NumPy, scikit-learn, SQL, PostgreSQL, MongoDB, ETL
- AI/ML: LLM API integration, agentic AI, NLP, anomaly detection, prompt engineering, Claude API, Groq API
- Languages: Arabic (native), English (fluent), French (basic)

PATENTS (USPTO Provisional, filed 2025-2026 as Micro Entity under OptvanceAI Arabia LTD):
- 6 × Optvance AI patents (app nos. 64/073,074 – 64/084,264)
- 2 × WaterSentinel patents (64/084,738 – 64/084,749)
- 1 × Health Mizan (pending)
- 3 × ADIPEC 2026 abstracts submitted (WaterSentinel Digital Twin, Sentinel IWPP Optimiser, DesalSentinel DTS-NODEx)

CERTIFICATIONS:
IBM Generative AI Engineering, IBM Intro to AI, DeepLearning.AI AI for Everyone, DataCamp Snowflake & scikit-learn,
Johns Hopkins Healthcare IT, Microsoft Cybersecurity, AWS Cloud Foundations, CompTIA A+, Blockchain Foundations, IELTS 7.0

Open to AI/data/IT roles in Saudi Arabia or remote. GitHub: github.com/ztaha121`

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
