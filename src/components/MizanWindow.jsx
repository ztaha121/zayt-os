export default function MizanWindow() {
  return (
    <div style={{
      height: '320px', padding: '20px 22px',
      fontFamily: 'var(--sans)',
      display: 'flex', flexDirection: 'column', gap: '16px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '14px',
          background: 'linear-gradient(135deg, #059669, #0d9488)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '26px', flexShrink: 0,
        }}>⚖</div>
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.9)', marginBottom: '2px' }}>
            Health Mizan — ميزان الصحة
          </h2>
          <p style={{ fontSize: '11px', color: '#10b981', fontFamily: 'var(--mono)' }}>
            live · calorie-tracker-fawn-sigma.vercel.app
          </p>
        </div>
      </div>

      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7' }}>
        AI-powered calorie tracker built for Arabic-speaking and Gulf users.
        140+ region-specific foods, barcode scanner, Claude Haiku AI analysis,
        biometric login, dark/light mode, PWA — and a USPTO provisional patent pending.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
        {[
          ['140+', 'Gulf foods'],
          ['PWA', 'iOS + Android'],
          ['100', 'patent claims'],
        ].map(([num, label]) => (
          <div key={label} style={{
            background: 'rgba(16,185,129,0.08)',
            border: '0.5px solid rgba(16,185,129,0.2)',
            borderRadius: '8px', padding: '10px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#10b981', fontFamily: 'var(--mono)' }}>{num}</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <a
          href="https://calorie-tracker-fawn-sigma.vercel.app"
          target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, padding: '9px', textAlign: 'center',
            background: 'rgba(16,185,129,0.15)',
            border: '0.5px solid rgba(16,185,129,0.3)',
            borderRadius: '7px', color: '#10b981',
            fontSize: '12px', fontFamily: 'var(--mono)',
            textDecoration: 'none', transition: 'all 0.15s',
          }}
        >↗ open app</a>
        <a
          href="https://github.com/ztaha121/calorie-tracker"
          target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, padding: '9px', textAlign: 'center',
            background: 'rgba(255,255,255,0.04)',
            border: '0.5px solid rgba(255,255,255,0.1)',
            borderRadius: '7px', color: 'rgba(255,255,255,0.5)',
            fontSize: '12px', fontFamily: 'var(--mono)',
            textDecoration: 'none',
          }}
        >⌥ github</a>
      </div>
    </div>
  )
}
