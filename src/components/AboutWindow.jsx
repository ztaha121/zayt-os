import { OWNER } from '../data/portfolio'

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
        AI developer · founder · MSc candidate
      </p>

      <Section title="Who I am">
        I'm a Canadian-Moroccan AI developer based in Dhahran, Saudi Arabia.
        I co-invent AI systems with my father Dr. Othman Taha at DTH Technology SARL,
        work as an AI & Data Analyst at Optvance.ai, and run two of my own products:
        Mizan (an AI calorie tracker for the Gulf) and ZAYT (a CV optimization service
        for Arabic-speaking professionals).
      </Section>

      <Section title="What I build">
        Full-stack AI products — from React/Vite frontends to FastAPI backends to
        Supabase edge functions calling Claude. I've filed 10 USPTO provisional patents,
        submitted 3 papers to ADIPEC 2026, and shipped code that real people pay for.
        I build in Arabic and English, for a market most developers ignore.
      </Section>

      <Section title="Education">
        BSc in Information Technology, Prince Mohammed Bin Fahd University (2025, GPA 3.3).
        Currently completing an MSc in Interdisciplinary AI at the University of Ottawa — online,
        covering ML, data science, system optimization, and applied AI.
      </Section>

      <Section title="Stack">
        Python · React · Vite · FastAPI · Flask · Node.js · Supabase · PostgreSQL · Claude API ·
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
