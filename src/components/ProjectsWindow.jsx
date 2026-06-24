import { useState } from 'react'
import { PROJECTS } from '../data/portfolio'

const STATUS_COLOR = {
  live: '#10b981',
  shipped: '#a78bfa',
  'in progress': '#f59e0b',
}

export default function ProjectsWindow() {
  const [active, setActive] = useState(null)

  const project = active ? PROJECTS.find(p => p.id === active) : null

  return (
    <div style={{ height: '360px', display: 'flex', fontFamily: 'var(--sans)' }}>
      {/* Sidebar */}
      <div style={{
        width: '180px', flexShrink: 0,
        borderRight: '0.5px solid rgba(255,255,255,0.07)',
        padding: '10px 0',
        overflowY: 'auto',
      }}>
        {PROJECTS.map(p => (
          <div
            key={p.id}
            onClick={() => setActive(p.id)}
            style={{
              padding: '8px 14px',
              cursor: 'pointer',
              background: active === p.id ? 'rgba(124,58,237,0.15)' : 'transparent',
              borderLeft: active === p.id ? '2px solid #7c3aed' : '2px solid transparent',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { if (active !== p.id) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            onMouseLeave={e => { if (active !== p.id) e.currentTarget.style.background = 'transparent' }}
          >
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginBottom: '2px' }}>{p.name.split('—')[0].trim()}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: STATUS_COLOR[p.status] || '#888',
                display: 'inline-block',
              }} />
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)' }}>{p.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {!project ? (
          <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', marginTop: '40px', textAlign: 'center' }}>
            ← select a project
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '4px' }}>
              <span style={{
                fontSize: '10px', fontFamily: 'var(--mono)',
                color: STATUS_COLOR[project.status] || '#888',
                textTransform: 'uppercase', letterSpacing: '1px',
              }}>{project.status}</span>
            </div>
            <h2 style={{ fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.92)', marginBottom: '10px', lineHeight: 1.3 }}>
              {project.name}
            </h2>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '16px' }}>
              {project.description}
            </p>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {project.stack.map(s => (
                  <span key={s} style={{
                    fontSize: '11px', fontFamily: 'var(--mono)',
                    padding: '2px 7px',
                    background: 'rgba(124,58,237,0.15)',
                    border: '0.5px solid rgba(124,58,237,0.3)',
                    borderRadius: '4px',
                    color: '#a78bfa',
                  }}>{s}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>Highlights</div>
              {project.metrics.map(m => (
                <div key={m} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '3px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#10b981' }}>→</span> {m}
                </div>
              ))}
            </div>

            {(project.url || project.github) && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: '11px', fontFamily: 'var(--mono)',
                    padding: '5px 12px',
                    background: 'rgba(16,185,129,0.15)',
                    border: '0.5px solid rgba(16,185,129,0.3)',
                    borderRadius: '6px', color: '#10b981',
                    textDecoration: 'none', transition: 'all 0.15s',
                  }}>↗ live demo</a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: '11px', fontFamily: 'var(--mono)',
                    padding: '5px 12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '0.5px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px', color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                  }}>⌥ github</a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
