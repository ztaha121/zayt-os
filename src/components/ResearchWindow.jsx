import { RESEARCH } from '../data/portfolio'

const STATUS_STYLE = {
  submitted: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
  'in progress': { color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
  accepted: { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
}

export default function ResearchWindow() {
  return (
    <div style={{ height: '340px', overflowY: 'auto', padding: '14px 16px', fontFamily: 'var(--sans)' }}>
      <div style={{
        fontSize: '10px', fontFamily: 'var(--mono)',
        color: 'rgba(255,255,255,0.25)', marginBottom: '14px',
      }}>
        3 × ADIPEC 2026 · 1 × MSc · author notifications Jun 23, 2026
      </div>

      {RESEARCH.map((r, i) => {
        const s = STATUS_STYLE[r.status] || STATUS_STYLE.submitted
        return (
          <div key={i} style={{
            padding: '14px',
            background: 'rgba(255,255,255,0.025)',
            border: '0.5px solid rgba(255,255,255,0.07)',
            borderRadius: '8px',
            marginBottom: '8px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 500, marginBottom: '4px', lineHeight: 1.4 }}>
                  {r.title}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px' }}>
                  {r.venue} · {r.location}
                </div>
                {r.id && (
                  <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'rgba(255,255,255,0.25)' }}>
                    ref: {r.id}
                  </div>
                )}
              </div>
              <div>
                <span style={{
                  fontSize: '10px',
                  color: s.color,
                  background: s.bg,
                  border: `0.5px solid ${s.border}`,
                  padding: '2px 7px', borderRadius: '4px',
                  whiteSpace: 'nowrap',
                }}>{r.status}</span>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '4px', textAlign: 'right' }}>
                  {r.date}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <div style={{
        marginTop: '4px', padding: '12px 14px',
        background: 'rgba(124,58,237,0.08)',
        border: '0.5px solid rgba(124,58,237,0.2)',
        borderRadius: '8px',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.4)',
        lineHeight: '1.6',
      }}>
        Conference: ADIPEC 2026 · Nov 2–5, Abu Dhabi · Full manuscripts due late August if accepted
      </div>
    </div>
  )
}
