import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import BootScreen from './components/BootScreen'
import MenuBar from './components/MenuBar'
import Wallpaper from './components/Wallpaper'
import Window from './components/Window'
import { DesktopIcons, Dock } from './components/Desktop'
import TerminalWindow from './components/TerminalWindow'
import ProjectsWindow from './components/ProjectsWindow'
import PatentsWindow from './components/PatentsWindow'
import ResearchWindow from './components/ResearchWindow'
import AboutWindow from './components/AboutWindow'
import MizanWindow from './components/MizanWindow'

const WINDOW_CONFIG = {
  terminal: { title: 'Terminal — zsh', width: 560, x: 80, y: 50 },
  mizan:    { title: 'Mizan.app — ميزان', width: 440, x: 200, y: 80 },
  zayt:     { title: 'ZAYT.cv — CV Services', width: 440, x: 260, y: 100 },
  patents:  { title: 'Patents.vault — CONFIDENTIAL', width: 560, x: 120, y: 60 },
  research: { title: 'Research.dir — ADIPEC 2026', width: 500, x: 160, y: 70 },
  about:    { title: 'about.md', width: 480, x: 140, y: 55 },
}

function WindowContent({ id }) {
  switch (id) {
    case 'terminal': return <TerminalWindow />
    case 'mizan':    return <MizanWindow />
    case 'patents':  return <PatentsWindow />
    case 'research': return <ResearchWindow />
    case 'about':    return <AboutWindow />
    case 'zayt': return (
      <div style={{ height: '280px', padding: '22px', fontFamily: 'var(--sans)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '14px',
            background: 'linear-gradient(135deg, #d97706, #b45309)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '26px',
          }}>✦</div>
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.9)', marginBottom: '2px' }}>ZAYT CV Services</h2>
            <p style={{ fontSize: '11px', color: '#f59e0b', fontFamily: 'var(--mono)' }}>live · @zayt.cvservices</p>
          </div>
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75', marginBottom: '16px' }}>
          CV writing and optimization service for Arabic-speaking professionals in Saudi Arabia.
          Bilingual (Arabic/English), WhatsApp-native delivery. Multiple paying clients, 60–200 SAR per CV.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[['Instagram', '@zayt.cvservices'], ['WhatsApp', 'DM for inquiries']].map(([k, v]) => (
            <div key={k} style={{
              flex: 1, padding: '10px',
              background: 'rgba(217,119,6,0.08)',
              border: '0.5px solid rgba(217,119,6,0.2)',
              borderRadius: '7px',
            }}>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>{k}</div>
              <div style={{ fontSize: '12px', color: '#f59e0b', fontFamily: 'var(--mono)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    )
    default: return null
  }
}

export default function App() {
  const [booted, setBooted] = useState(false)
  const [openWindows, setOpenWindows] = useState([])
  const [zOrders, setZOrders] = useState({})
  const [zTop, setZTop] = useState(10)

  const openWindow = useCallback((id) => {
    setOpenWindows(prev => prev.includes(id) ? prev : [...prev, id])
    setZTop(z => {
      const next = z + 1
      setZOrders(o => ({ ...o, [id]: next }))
      return next
    })
  }, [])

  const closeWindow = useCallback((id) => {
    setOpenWindows(prev => prev.filter(w => w !== id))
  }, [])

  const focusWindow = useCallback((id) => {
    setZTop(z => {
      const next = z + 1
      setZOrders(o => ({ ...o, [id]: next }))
      return next
    })
  }, [])

  if (!booted) {
    return <BootScreen onDone={() => setBooted(true)} />
  }

  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', background: 'var(--bg)',
    }}>
      <MenuBar />

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <Wallpaper />
        <DesktopIcons openWindows={openWindows} onOpen={openWindow} />

        {openWindows.length === 0 && (
          <div style={{
            position: 'absolute', left: '50%', top: '45%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center', pointerEvents: 'none', zIndex: 1,
          }}>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '3.5rem', fontWeight: 700,
              background: 'linear-gradient(135deg, #a78bfa 0%, #6ee7b7 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.03em', marginBottom: '12px',
            }}>Z://OS</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--sans)' }}>
              double-click an icon or use the dock below
            </div>
          </div>
        )}

        <AnimatePresence>
          {openWindows.map(id => {
            const cfg = WINDOW_CONFIG[id] || {}
            return (
              <Window
                key={id} id={id}
                title={cfg.title || id}
                onClose={() => closeWindow(id)}
                initialX={cfg.x || 100} initialY={cfg.y || 60}
                width={cfg.width || 480}
                zIndex={zOrders[id] || 10}
                onFocus={focusWindow}
              >
                <WindowContent id={id} />
              </Window>
            )
          })}
        </AnimatePresence>

        <Dock openWindows={openWindows} onOpen={openWindow} />
      </div>
    </div>
  )
}
