import { useState, useEffect } from 'react'

const BOOT_LINES = [
  'Z://OS v1.0.0 — initializing...',
  'Loading kernel modules...',
  'Mounting portfolio.vault...',
  'Connecting to AI terminal...',
  'Loading Zaynab Taha profile...',
  '✓ 10 patents indexed',
  '✓ 4 projects loaded',
  '✓ AI terminal ready',
  '',
  'Welcome.',
]

export default function BootScreen({ onDone }) {
  const [lines, setLines] = useState([])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines(prev => [...prev, BOOT_LINES[i]])
        i++
      } else {
        clearInterval(interval)
        setTimeout(onDone, 800)
      }
    }, 140)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#08080f',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--mono)',
      zIndex: 9999,
    }}>
      <div style={{
        fontSize: '2.5rem', fontWeight: 700,
        background: 'linear-gradient(135deg, #a78bfa, #10b981)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em',
        marginBottom: '2rem',
      }}>Z://OS</div>

      <div style={{
        width: '420px', maxWidth: '90vw',
        background: 'rgba(255,255,255,0.03)',
        border: '0.5px solid rgba(255,255,255,0.08)',
        borderRadius: '8px',
        padding: '1.25rem 1.5rem',
        minHeight: '260px',
      }}>
        {lines.map((line, i) => (
          <div key={i} style={{
            fontSize: '12px', lineHeight: '1.9',
            color: line && line.startsWith('✓') ? '#10b981'
              : line === 'Welcome.' ? '#a78bfa'
              : 'rgba(255,255,255,0.6)',
            fontWeight: line === 'Welcome.' ? 700 : 400,
          }}>
            {line || '\u00A0'}
          </div>
        ))}
      </div>
    </div>
  )
}
