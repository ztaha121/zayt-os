import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Window({ id, title, icon, children, onClose, initialX = 100, initialY = 60, width = 520, zIndex, onFocus }) {
  const [pos, setPos] = useState({ x: initialX, y: initialY })
  const [minimized, setMinimized] = useState(false)
  const dragStart = useRef(null)
  const ref = useRef(null)

  const onMouseDown = useCallback((e) => {
    if (e.target.closest('.win-btn')) return
    onFocus(id)
    dragStart.current = {
      mx: e.clientX, my: e.clientY,
      px: pos.x, py: pos.y,
    }
    const onMove = (e) => {
      if (!dragStart.current) return
      setPos({
        x: dragStart.current.px + e.clientX - dragStart.current.mx,
        y: dragStart.current.py + e.clientY - dragStart.current.my,
      })
    }
    const onUp = () => {
      dragStart.current = null
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [pos, id, onFocus])

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 16 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        onMouseDown={() => onFocus(id)}
        style={{
          position: 'absolute',
          left: pos.x, top: pos.y,
          width,
          zIndex,
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'rgba(15,15,26,0.97)',
          border: '0.5px solid rgba(255,255,255,0.1)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.05)',
        }}
      >
        {/* Titlebar */}
        <div
          onMouseDown={onMouseDown}
          style={{
            height: '38px',
            background: 'rgba(255,255,255,0.04)',
            borderBottom: '0.5px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center',
            padding: '0 12px', gap: '8px',
            cursor: 'grab', userSelect: 'none',
          }}
        >
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <button
              className="win-btn"
              onClick={onClose}
              style={{
                width: '11px', height: '11px', borderRadius: '50%',
                background: '#ff5f57', border: 'none', cursor: 'pointer',
                transition: 'filter 0.15s',
              }}
              onMouseEnter={e => e.target.style.filter = 'brightness(1.2)'}
              onMouseLeave={e => e.target.style.filter = 'brightness(1)'}
            />
            <button
              className="win-btn"
              onClick={() => setMinimized(m => !m)}
              style={{
                width: '11px', height: '11px', borderRadius: '50%',
                background: '#ffbd2e', border: 'none', cursor: 'pointer',
              }}
            />
            <button
              className="win-btn"
              style={{
                width: '11px', height: '11px', borderRadius: '50%',
                background: '#28c840', border: 'none', cursor: 'pointer',
              }}
            />
          </div>
          <span style={{
            flex: 1, textAlign: 'center',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.45)',
            fontFamily: 'var(--sans)',
            pointerEvents: 'none',
          }}>{title}</span>
        </div>

        {/* Content */}
        <AnimatePresence>
          {!minimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
