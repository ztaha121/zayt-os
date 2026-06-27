export default function AboutWindow() {
  return (
    <div style={{
      height: '380px', overflowY: 'auto',
      padding: '20px 22px',
      fontFamily: 'var(--sans)',
      fontSize: '13px',
      lineHeight: '1.75',
      color: 'rgba(255,255,255,0.7)',
    }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '10px',
        color: 'rgba(255,255,255,0.25)', marginBottom: '16px',
      }}>
        # about.md — last updated June 2026
      </div>

      <h1 style={{ fontSize: '20px', fontWeight: 500, color: 'rgba(255,255,255,0.92)', marginBottom: '4px', letterSpacing: '-0.02em' }}>
        Zaynab Taha
      </h1>
      <p style={{ fontSize: '13px', color: '#a78bfa', marginBottom: '20px', fontFamily: 'var(--mono)' }}>
        developer · founder · MSc candidate
      </p>

      <Section title="Who I am">
        I'm a developer and founder based in Dhahran, Saudi Arabia.
        I build full-stack software and AI-powered products — mostly for markets and
        users that the broader tech industry tends to overlook. I'm currently completing
        an MSc in Interdisciplinary AI at the University of Ottawa while shipping real products.
      </Section>

      <Section title="What I build">
        From React frontends to FastAPI backends to mobile apps — I build things end to end
        and put them in production. My work spans health tech, developer tooling, and enterprise AI.
        I write code in Python and JavaScript, build for Arabic-speaking users, and deploy on Vercel and AWS.
      </Section>

      <Section title="Currently">
        Working on Mizan — an AI-powered food tracking app built for Gulf and Arabic-speaking users.
        Live on the web and Google Play. Pursuing MSc coursework in ML and data science at the
        University of Ottawa. Open to new opportunities.
      </Section>

      <Section title="Stack">
        Python · React · Vite · FastAPI · Flask · Node.js · Supabase · PostgreSQL ·
        Scikit-learn · Pandas · Kafka · Airflow · AWS · Vercel · Android Studio
      </Section>

      <Section title="Contact">
        <a href="mailto:zay.taha@gmail.com" style={{ color: '#10b981', textDecoration: 'none' }}>
          zay.taha@gmail.com
        </a>
        {' · '}
        <a href="https://github.com/ztaha121" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none' }}>
          github.com/ztaha121
        </a>
        {' · '}
        <a href="https://www.linkedin.com/in/zaynab-taha/" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none' }}>
          linkedin.com/in/zaynab-taha
        </a>
        {' · '}
        <span style={{ color: '#10b981' }}>+966 58 043 7821</span>
      </Section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{
        fontSize: '10px', fontFamily: 'var(--mono)',
        color: '#a78bfa', letterSpacing: '1px',
        textTransform: 'uppercase', marginBottom: '6px',
      }}>## {title}</div>
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: '1.75' }}>
        {children}
      </div>
    </div>
  )
}
