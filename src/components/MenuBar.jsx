import { useState, useEffect } from 'react'
import { OWNER } from '../data/portfolio'

export default function MenuBar({ onAppClick }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-SA', {
        hour: '2-digit', minute: '2-digit',
        timeZone: 'Asia/Riyadh'
      }))
    }
    tick()
    const id = setInterval(tick, 10000)
    return () => clearInterval(id)
  }, [])

  const NAV = [
    { label: 'Terminal', id: 'terminal' },
    { label: 'Projects', id: 'mizan' },
    { label: 'Patents', id: 'patents' },
    { label: 'Research', id: 'research' },
    { label: 'Contact', id: 'about' },
  ]

  return (
    <div style={{
      height: '28px',
      background: 'rgba(8,8,15,0.95)',
      borderBottom: '0.5px solid rgba(255,255,255,0.07)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      fontFamily: 'var(--sans)',
      fontSize: '12px',
      color: 'rgba(255,255,255,0.7)',
      position: 'relative', zIndex: 100,
      userSelect: 'none',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span style={{
          fontFamily: 'var(--mono)', fontWeight: 700,
          background: 'linear-gradient(90deg, #a78bfa, #6ee7b7)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          fontSize: '13px',
        }}>Z://</span>
        {NAV.map(item => (
          <span
            key={item.id}
            onClick={() => onAppClick && onAppClick(item.id)}
            style={{ cursor: 'pointer', transition: 'color 0.15s' }}
            onMouseEnter={e => e.target.style.color = '#a78bfa'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
          >{item.label}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#10b981', display: 'inline-block',
          }} />
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px' }}>
            {OWNER.status}
          </span>
        </span>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mono)', fontSize: '11px' }}>
          AST {time}
        </span>
      </div>
    </div>
  )
}
