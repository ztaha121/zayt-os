import { motion } from 'framer-motion'
import { APPS } from '../data/portfolio'

export function DesktopIcons({ openWindows, onOpen }) {
  return (
    <div style={{
      position: 'absolute',
      top: '20px', right: '20px',
      display: 'flex', flexDirection: 'column', gap: '8px',
      zIndex: 1,
    }}>
      {APPS.map((app, i) => (
        <motion.div
          key={app.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 + 0.2 }}
          onDoubleClick={() => onOpen(app.id)}
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '6px 10px',
            borderRadius: '8px',
            cursor: 'pointer',
            background: openWindows.includes(app.id)
              ? 'rgba(255,255,255,0.06)'
              : 'transparent',
            transition: 'background 0.15s',
          }}
          whileHover={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <div style={{
            width: '36px', height: '36px',
            borderRadius: '8px',
            background: app.color + '22',
            border: `0.5px solid ${app.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '15px', flexShrink: 0,
            fontFamily: 'var(--mono)', fontWeight: 700,
            color: app.color,
          }}>{app.icon}</div>
          <div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--sans)' }}>
              {app.label}
            </div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--sans)' }}>
              {app.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function Dock({ openWindows, onOpen }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: '16px', left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex', gap: '8px', alignItems: 'flex-end',
      background: 'rgba(255,255,255,0.06)',
      border: '0.5px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      padding: '8px 12px',
      zIndex: 50,
    }}>
      {APPS.map((app) => (
        <motion.div
          key={app.id}
          onClick={() => onOpen(app.id)}
          title={app.label}
          whileHover={{ y: -8, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          style={{
            width: '42px', height: '42px',
            borderRadius: '10px',
            background: app.color + '28',
            border: `0.5px solid ${app.color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '18px', fontFamily: 'var(--mono)', fontWeight: 700,
            color: app.color,
            position: 'relative',
          }}
        >
          {app.icon}
          {openWindows.includes(app.id) && (
            <div style={{
              position: 'absolute', bottom: '-5px',
              width: '4px', height: '4px', borderRadius: '50%',
              background: app.color,
            }} />
          )}
        </motion.div>
      ))}
    </div>
  )
}
