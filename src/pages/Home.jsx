import { useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MagButton from '../components/MagButton'
import SplineParticles from '../components/SplineParticles'
import { LanguageContext, languages } from '../contexts/LanguageContext'
import {
  Zap, Shield, Brain, MapPin, Star, Clock,
  ArrowRight, ChevronRight, Cpu, Wifi, Globe
} from 'lucide-react'

/* ── Ticker items ── */
const tickerItems = [
  '🔮 Predictive AI Health', '🤖 Auto-Booking Mode', '🏠 Digital Twin', '🌍 Hyperlocal Hubs',
  '📡 Offline Rural Mode', '🧬 Blockchain History', '🎮 Reward Economy', '🗣️ Voice-First AI',
  '💬 Community Feed', '🏆 Pro Leaderboard', '⚡ Drone Inspections', '🛒 Home Marketplace'
]

/* ── Services catalog ── */
const services = [
  { icon: '🔧', label: 'Plumbing',      color: '#6c63ff', time: '~15 min' },
  { icon: '⚡', label: 'Electrician',   color: '#06b6d4', time: '~20 min' },
  { icon: '❄️', label: 'AC Repair',     color: '#14b8a6', time: '~25 min' },
  { icon: '🏠', label: 'Deep Clean',    color: '#a78bfa', time: '~30 min' },
  { icon: '🔑', label: 'Locksmith',     color: '#f59e0b', time: '~10 min' },
  { icon: '🐛', label: 'Pest Control',  color: '#10b981', time: '~40 min' },
  { icon: '📦', label: 'Shifting',      color: '#ec4899', time: '~2 hrs'  },
  { icon: '🎨', label: 'Painting',      color: '#f43f5e', time: '~3 hrs'  },
]

/* ── AI features ── */
const aiFeatures = [
  {
    icon: <Brain size={24} />, color: '#6c63ff',
    title: 'Predictive Home Health',
    desc: 'AI digital twin monitors appliances, predicts failures up to 30 days ahead.'
  },
  {
    icon: <Zap size={24} />, color: '#06b6d4',
    title: 'Auto-Booking Mode',
    desc: 'Enable Set & Forget — app detects issues and books the best professional automatically.'
  },
  {
    icon: <Shield size={24} />, color: '#14b8a6',
    title: 'Blockchain Trust',
    desc: 'Every job permanently stored on-chain. Tamper-proof reputation for life.'
  },
  {
    icon: <Cpu size={24} />, color: '#a78bfa',
    title: 'AI Mood-Aware Booking',
    desc: 'Detects urgency from typing speed and tone. Prioritizes faster slots automatically.'
  },
  {
    icon: <Wifi size={24} />, color: '#f59e0b',
    title: 'Offline & Rural Mode',
    desc: 'Book via missed call or SMS. AI converts it into a full service request.'
  },
  {
    icon: <Globe size={24} />, color: '#10b981',
    title: 'Multi-language AI',
    desc: 'Supports Tamil, Hindi, Telugu, Kannada and more. Truly inclusive.'
  },
]

/* ── Testimonials ── */
const testimonials = [
  {
    name: 'Priya Rajan', loc: 'Chennai', avatar: 'PR', rating: 5,
    text: '"HyperLocal Pro warned me my AC would fail. Booked repair before summer — saved ₹8,000!"'
  },
  {
    name: 'Arjun Mehta', loc: 'Mumbai', avatar: 'AM', rating: 5,
    text: '"Auto-booking is a game changer. App fixed my plumbing while I was in a meeting!"'
  },
  {
    name: 'Kavitha S.',  loc: 'Bangalore', avatar: 'KS', rating: 5,
    text: '"My Home Health Score went from 42 to 81 in 3 months. Love the rewards I earn!"'
  },
]

/* ────────────────────── Ticker ────────────────────── */
function Ticker() {
  const doubled = [...tickerItems, ...tickerItems]
  return (
    <div className="ticker-wrapper">
      <div className="ticker-content">
        {doubled.map((item, i) => (
          <span key={i}><span className="dot">◆</span>{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ────────────────────── Stats counter ────────────────────── */
function StatCounter({ to, label }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    const step = to / 60
    const timer = setInterval(() => {
      start += step
      if (start >= to) { el.textContent = to + '+'; clearInterval(timer) }
      else el.textContent = Math.floor(start) + '+'
    }, 16)
    return () => clearInterval(timer)
  }, [to])
  return (
    <div className="hero-stat-item reveal delay-3">
      <div className="stat-number" ref={ref}>0+</div>
      <p>{label}</p>
    </div>
  )
}

/* ────────────────────── Home Page ────────────────────── */
export default function Home() {
  useScrollReveal()
  const { changeLanguage, language, t } = useContext(LanguageContext)

  return (
    <div className="page-wrapper">
      <div className="ambient" />
      
      {/* ─── SPLINE PARTICLE BACKGROUND ─── */}
      <SplineParticles />

      {/* ─── HERO ─── */}
      <section className="hero" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-badge reveal">
          <span>🧬</span> World's first AI-Predictive Home Services
        </div>

        <h1 className="kinetic" style={{ animationDelay: '0.1s' }}>
          {t('greeting')},{' '}
          <span className="gradient-text">Protected by AI</span>
          <br />Before Anything Breaks
        </h1>

        <p className="kinetic kinetic-2" style={{ fontSize: '1.15rem', color: 'var(--text-300)', maxWidth: '620px', animationDelay: '0.3s' }}>
          {t('tagline')} predicts, prevents, and auto-books home repairs — powered by
          digital twins, AI health scores, and a neighborhood-level service network.
        </p>

        <div className="hero-cta kinetic kinetic-3">
          <MagButton id="hero-primary-cta">
            Get Started Free <ArrowRight size={16} />
          </MagButton>
          <Link to="/dashboard" className="mag-btn-outline" id="hero-secondary-cta">
            View Dashboard <ChevronRight size={16} />
          </Link>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <StatCounter to={50000}  label="Homes Protected"    />
          <StatCounter to={12000}  label="Expert Professionals" />
          <StatCounter to={99}     label="Cities Covered"     />
          <StatCounter to={2800000} label="Jobs Completed"    />
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          animation: 'fab-float 2s ease-in-out infinite'
        }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-400)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Ticker />
      </div>

      {/* ─── SERVICES ─── */}
      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label reveal">What We Offer</p>
          <h2 className="section-title reveal delay-1">
            Every Home Service,<br /><span className="gradient-text">In Minutes</span>
          </h2>
          <p className="section-sub reveal delay-2" style={{ margin: '0 auto' }}>
            From emergency plumbing to deep cleaning — book in 30 seconds,
            get a verified professional at your door.
          </p>
        </div>

        <div className="feature-grid">
          {services.map((s, i) => (
            <div
              key={s.label}
              className={`service-card reveal delay-${(i % 4) + 1}`}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div className="service-icon" style={{ background: `${s.color}22`, borderColor: `${s.color}44`, fontSize: '1.6rem' }}>
                {s.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '2px' }}>{s.label}</h3>
                <span className="tag"><Clock size={11} />{s.time}</span>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <span style={{ color: 'var(--accent-2)', fontSize: '1.3rem' }}>›</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── AI FEATURES ─── */}
      <section className="section" style={{ paddingTop: 0, position: 'relative', zIndex: 1 }}>
        <div className="divider" />
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label reveal">Powered by Artificial Intelligence</p>
          <h2 className="section-title reveal delay-1">
            Features That Feel Like <span className="gradient-text">Magic</span>
          </h2>
          <p className="section-sub reveal delay-2" style={{ margin: '0 auto' }}>
            We combined predictive ML, blockchain, hyperlocal logistics, and community intelligence
            to make home maintenance completely effortless.
          </p>
        </div>

        <div className="feature-grid">
          {[
            {
              icon: <Brain size={24} />, color: '#6c63ff',
              titleKey: 'predictiveHealth',
              descKey: 'predictiveDesc'
            },
            {
              icon: <Zap size={24} />, color: '#06b6d4',
              titleKey: 'autoBooking',
              descKey: 'autoBookingDesc'
            },
            {
              icon: <Shield size={24} />, color: '#14b8a6',
              titleKey: 'blockchainTrust',
              descKey: 'blockchainDesc'
            },
            {
              icon: <Cpu size={24} />, color: '#a78bfa',
              titleKey: 'moodAware',
              descKey: 'moodAwareDesc'
            },
            {
              icon: <Wifi size={24} />, color: '#f59e0b',
              titleKey: 'offlineMode',
              descKey: 'offlineModeDesc'
            },
            {
              icon: <Globe size={24} />, color: '#10b981',
              titleKey: 'multiLanguage',
              descKey: 'multiLanguageDesc'
            },
          ].map((f, i) => (
            <div key={f.titleKey} className={`service-card reveal-scale delay-${(i % 3) + 1}`}
              style={{ background: `${f.color}08`, borderColor: `${f.color}22` }}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--r-md)',
                background: `${f.color}22`, border: `1px solid ${f.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem', color: f.color
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{t(f.titleKey)}</h3>
              <p style={{ fontSize: '0.875rem' }}>{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section" style={{ paddingTop: 0, position: 'relative', zIndex: 1 }}>
        <div className="divider" />
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label reveal">Real Stories</p>
          <h2 className="section-title reveal delay-1">
            Trusted by <span className="gradient-text">50,000+ Homes</span>
          </h2>
        </div>

        <div className="grid-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`service-card reveal delay-${i + 1}`}>
              <div style={{ display: 'flex', gap: 4, marginBottom: '0.8rem' }}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="var(--amber)" color="var(--amber)" />
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="avatar" style={{ width: 38, height: 38, fontSize: '0.8rem' }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{ color: 'var(--text-100)', fontSize: '0.875rem', fontWeight: 600 }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={10} />{t.loc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INDIA SPECIFIC ─── */}
      <section className="section" style={{ paddingTop: 0, position: 'relative', zIndex: 1 }}>
        <div className="divider" />
        <div className="reveal" style={{
          borderRadius: 'var(--r-xl)', padding: '3rem',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(220, 220, 220, 0.08))',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem'
        }}>
          <span style={{ fontSize: '3rem' }}>🇮🇳</span>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Built for <span className="gradient-text">Bharat</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Multi-language support · UPI + Cash + Pay Later · Festival cleaning packages ·
            Village-level service networks · Offline SMS booking
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className="lang-pill"
                style={{
                  cursor: 'pointer',
                  opacity: language === code ? 1 : 0.7,
                  transform: language === code ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1'
                  e.target.style.transform = 'scale(1.08)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = language === code ? '1' : '0.7'
                  e.target.style.transform = language === code ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['💳 UPI','💵 Cash','📲 Pay Later','🏧 EMI'].map(pay => (
              <span key={pay} className="badge badge-accent">{pay}</span>
            ))}
          </div>
          <MagButton id="india-cta">Explore All Features <ArrowRight size={16} /></MagButton>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer" style={{ position: 'relative', zIndex: 1 }}>
        <p className="nav-logo" style={{ marginBottom: '0.5rem' }}>⚡ HyperLocal Pro++</p>
        <p>© 2026 HyperLocal Pro++. AI-Powered Home Services. Made with ❤️ for Bharat.</p>
      </footer>
    </div>
  )
}
