import { useState } from 'react'
import { PATENTS } from '../data/portfolio'

export default function PatentsWindow() {
  const [selected, setSelected] = useState(null)
  const [unlocked, setUnlocked] = useState({})

  const unlock = (id) => setUnlocked(u => ({ ...u, [id]: true }))

  return (
    <div style={{ height: '360px', overflowY: 'auto', fontFamily: 'var(--mono)' }}>
      <div style={{
        padding: '12px 16px',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <span style={{
          fontSize: '10px', color: '#ef4444',
          background: 'rgba(239,68,68,0.12)',
          border: '0.5px solid rgba(239,68,68,0.3)',
          padding: '2px 8px', borderRadius: '4px',
          letterSpacing: '1px',
        }}>⚠ USPTO PROVISIONAL — CONFIDENTIAL</span>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>
          {PATENTS.length} filings · Micro Entity · OptvanceAI Arabia LTD
        </span>
      </div>

      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {PATENTS.map((p, i) => {
          const isUnlocked = unlocked[p.id]
          return (
            <div
              key={p.id}
              onClick={() => isUnlocked ? setSelected(p.id === selected ? null : p.id) : unlock(p.id)}
              style={{
                padding: '10px 14px',
                background: selected === p.id
                  ? 'rgba(239,68,68,0.08)'
                  : 'rgba(255,255,255,0.025)',
                border: `0.5px solid ${selected === p.id ? 'rgba(239,68,68,0.25)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (selected !== p.id) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { if (selected !== p.id) e.currentTarget.style.background = 'rgba(255,255,255,0.025)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontSize: '10px', color: '#ef4444', opacity: 0.7,
                    fontWeight: 700, minWidth: '36px',
                  }}>{p.id}</span>
                  <span style={{
                    fontSize: '12px',
                    color: isUnlocked ? 'rgba(255,255,255,0.85)' : 'transparent',
                    background: isUnlocked ? 'transparent' : 'rgba(255,255,255,0.25)',
                    borderRadius: isUnlocked ? 0 : '2px',
                    userSelect: isUnlocked ? 'text' : 'none',
                    transition: 'all 0.3s',
                  }}>
                    {isUnlocked ? p.title : '█████████████████'}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '10px',
                    color: p.status === 'provisional' ? '#f59e0b' : '#a78bfa',
                    background: p.status === 'provisional' ? 'rgba(245,158,11,0.1)' : 'rgba(167,139,250,0.1)',
                    border: `0.5px solid ${p.status === 'provisional' ? 'rgba(245,158,11,0.2)' : 'rgba(167,139,250,0.2)'}`,
                    padding: '1px 6px', borderRadius: '3px',
                  }}>{p.status}</span>
                  {!isUnlocked && (
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>🔒</span>
                  )}
                </div>
              </div>

              {selected === p.id && isUnlocked && (
                <div style={{
                  marginTop: '10px', paddingTop: '10px',
                  borderTop: '0.5px solid rgba(255,255,255,0.07)',
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '6px 16px',
                }}>
                  {[
                    ['Application', p.app],
                    ['Organization', p.org],
                    ['Filed', p.filed],
                    ['Status', p.status],
                    ...(p.claims ? [['Claims', `${p.claims} claims`]] : []),
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>{k}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>{v}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
