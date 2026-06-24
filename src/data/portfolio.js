export const OWNER = {
  name: 'Zaynab Taha',
  handle: 'ztaha',
  title: 'AI Developer · Founder · MSc Candidate',
  location: 'Dhahran, Saudi Arabia',
  nationality: 'Canadian-Moroccan 🇨🇦🇲🇦',
  status: 'Building Mizan v2 · ADIPEC 2026',
  bio: 'I build AI systems, file patents, and ship products for Arabic-speaking markets. Co-inventor at DTH Technology. Founder of Mizan & ZAYT.',
  links: {
    github: 'https://github.com/ztaha121',
    email: 'zay.taha@gmail.com',
  }
}

export const APPS = [
  {
    id: 'terminal',
    label: 'Terminal',
    icon: '>_',
    color: '#7c3aed',
    description: 'Ask me anything'
  },
  {
    id: 'mizan',
    label: 'Mizan.app',
    icon: '⚖',
    color: '#059669',
    description: 'AI calorie tracker'
  },
  {
    id: 'zayt',
    label: 'ZAYT.cv',
    icon: '✦',
    color: '#d97706',
    description: 'CV optimization service'
  },
  {
    id: 'patents',
    label: 'Patents.vault',
    icon: '⬡',
    color: '#dc2626',
    description: '10 USPTO filings'
  },
  {
    id: 'research',
    label: 'Research.dir',
    icon: '◈',
    color: '#0284c7',
    description: 'MSc & ADIPEC work'
  },
  {
    id: 'about',
    label: 'about.md',
    icon: '≡',
    color: '#6d28d9',
    description: 'The full story'
  },
]

export const PROJECTS = [
  {
    id: 'mizan',
    name: 'Health Mizan — ميزان الصحة',
    status: 'live',
    stack: ['React', 'Vite', 'Supabase', 'Claude Haiku', 'Vercel'],
    description: 'AI-powered calorie tracking PWA for Arabic-speaking and Gulf users. 140+ Gulf/Arabic/Moroccan food database, barcode scanner, Claude AI food analysis, Lemon Squeezy payments.',
    url: 'https://calorie-tracker-fawn-sigma.vercel.app',
    github: 'https://github.com/ztaha121/calorie-tracker',
    metrics: ['140+ Gulf foods', 'PWA + biometric login', 'USPTO patent filed'],
  },
  {
    id: 'zayt',
    name: 'ZAYT CV Services',
    status: 'live',
    stack: ['Node.js', 'docx', 'LibreOffice', 'WhatsApp'],
    description: 'CV writing and optimization service for Arabic-speaking professionals in Saudi Arabia. Bilingual (Arabic/English), WhatsApp-native workflow.',
    metrics: ['Multiple paying clients', '60–200 SAR/CV', 'Saudi + Gulf market'],
  },
  {
    id: 'jobagent',
    name: 'JobAgent AI',
    status: 'shipped',
    stack: ['Flask', 'Gmail OAuth', 'Playwright', 'Groq', 'Adzuna API'],
    description: 'Autonomous job application agent — scrapes listings, drafts emails, applies on your behalf.',
    github: 'https://github.com/ztaha121/job-application-agent',
    metrics: ['Fully autonomous', 'Gmail + Playwright', 'Open source'],
  },
  {
    id: 'farmOS',
    name: 'AD Agrotech Farm OS',
    status: 'shipped',
    stack: ['FastAPI', 'PostgreSQL', 'React', 'WhatsApp bridge'],
    description: 'Full farm management OS with real-time WhatsApp message classification and React Native mobile app.',
    metrics: ['WhatsApp-native', 'React Native mobile', 'Live sensor data'],
  },
]

export const PATENTS = [
  { id: 'OP1', title: 'HabiShield AI System', app: '64/073,074', org: 'OptvanceAI Arabia', filed: 'May 2026', status: 'provisional' },
  { id: 'OP2', title: 'WaterSentinel Hybrid Digital Twin', app: '64/084,248', org: 'OptvanceAI Arabia', filed: 'Jun 2026', status: 'provisional' },
  { id: 'OP3', title: 'Sentinel IWPP Optimiser', app: '64/084,249', org: 'OptvanceAI Arabia', filed: 'Jun 2026', status: 'provisional' },
  { id: 'OP4', title: 'DesalSentinel DTS-NODEx', app: '64/084,264', org: 'OptvanceAI Arabia', filed: 'Jun 2026', status: 'provisional' },
  { id: 'WS1', title: 'WaterSentinel Patent I', app: '64/084,738', org: 'OptvanceAI Arabia', filed: 'Jun 2026', status: 'provisional' },
  { id: 'WS2', title: 'WaterSentinel Patent II', app: '64/084,749', org: 'OptvanceAI Arabia', filed: 'Jun 2026', status: 'provisional' },
  { id: 'HM1', title: 'Health Mizan AI System', app: 'pending', org: 'DTH Technology', filed: '2026', status: 'pending payment', claims: 100 },
]

export const RESEARCH = [
  {
    title: 'WaterSentinel™ Hybrid Digital Twin',
    venue: 'ADIPEC 2026',
    id: '26ADIP-P-6569',
    status: 'submitted',
    date: 'Nov 2026',
    location: 'Abu Dhabi',
  },
  {
    title: 'Sentinel IWPP Optimiser',
    venue: 'ADIPEC 2026',
    id: '26ADIP-P-6662',
    status: 'submitted',
    date: 'Nov 2026',
    location: 'Abu Dhabi',
  },
  {
    title: 'DesalSentinel DTS-NODEx',
    venue: 'ADIPEC 2026',
    id: '26ADIP-P-6667',
    status: 'submitted',
    date: 'Nov 2026',
    location: 'Abu Dhabi',
  },
  {
    title: 'MSc Interdisciplinary AI',
    venue: 'University of Ottawa',
    status: 'in progress',
    date: 'Est. 2026',
    location: 'Ottawa, Canada (online)',
  },
]

export const TERMINAL_RESPONSES = {
  whoami: `Zaynab Taha — AI developer, founder, MSc candidate.\nDhahran, Saudi Arabia 🇸🇦 · Canadian 🇨🇦\nCo-inventor at DTH Technology SARL.\nFounder: Mizan AI + ZAYT CV Services.`,
  help: `Available commands:\n  whoami       — who is Zaynab?\n  skills       — technical stack\n  projects     — shipped work\n  patents      — USPTO filings\n  status       — what's being built now\n  contact      — get in touch\n  clear        — clear terminal`,
  skills: `Languages:    Python · JavaScript · TypeScript · SQL\nFrameworks:   React · Vite · FastAPI · Flask · Node.js\nAI/ML:        Claude API · Supabase Edge Functions · Scikit-learn\nData:         Pandas · PostgreSQL · Snowflake · Kafka · Airflow\nCloud:        Vercel · AWS (EC2/S3/IAM) · GoDaddy cPanel\nTools:        Git · Docker · LibreOffice · Android Studio`,
  projects: `→ Mizan AI (live)     calorie-tracker-fawn-sigma.vercel.app\n→ ZAYT CV (live)      Arabic CV optimization, Saudi market\n→ JobAgent AI         autonomous job application agent\n→ Farm OS             FastAPI + WhatsApp + React Native`,
  patents: `USPTO Provisional Patents filed as Micro Entity:\n\n  6 × Optvance AI patents   (64/073,074 – 64/084,264)\n  2 × WaterSentinel         (64/084,738 – 64/084,749)\n  1 × Health Mizan          pending payment\n\nAll nonprovisionals due within 12 months.`,
  status: `Currently building:\n  [■■■■■░░░] Mizan v2 — Google Play + Lemon Squeezy live\n  [■■■░░░░░] ADIPEC 2026 — 3 abstracts submitted\n  [■■■■■■░░] MIA 5126 — Assignment 2 due July 5\n  [■░░░░░░░] USPTO Health Mizan — awaiting payment`,
  contact: `Email:    zay.taha@gmail.com\nGitHub:   github.com/ztaha121\nLinkedIn: linkedin.com/in/zaynab-taha\nWhatsApp: for ZAYT CV inquiries`,
  clear: '__CLEAR__',
}
