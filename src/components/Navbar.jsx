import { useState, useEffect, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Bell, Menu, X, ChevronDown, Globe } from 'lucide-react'
import MagButton from './MagButton'
import { LanguageContext } from '../contexts/LanguageContext'

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
]

const featureGroups = [
  {
    label: 'Tier 1: Predictive',
    items: [
      { to: '/predictive', label: '🔮 Predictive Services' },
      { to: '/auto-booking', label: '🤖 Auto-Booking' }
    ]
  },
  {
    label: 'Tier 2: Personalization',
    items: [
      { to: '/personalization', label: '🧑 Personalization' },
      { to: '/visual-intelligence', label: '📸 Visual AI' },
      { to: '/community', label: '👥 Community Hub' }
    ]
  },
  {
    label: 'Tier 3: Professional',
    items: [
      { to: '/professional-tools', label: '🧑‍🔧 Pro Tools' },
      { to: '/trust', label: '🛡️ Trust Revolution' },
      { to: '/speed-efficiency', label: '⚡ Speed & Efficiency' }
    ]
  },
  {
    label: 'Tier 4: Advanced',
    items: [
      { to: '/marketplace', label: '🛒 Ecosystem' },
      { to: '/gamification', label: '🎮 Gamification' },
      { to: '/ai-features', label: '🤖 AI Mega' },
      { to: '/india-features', label: '🇮🇳 India Specific' }
    ]
  }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedGroup, setExpandedGroup] = useState(null)
  const [toasts, setToasts] = useState([])
  const [langDropdown, setLangDropdown] = useState(false)
  const location = useLocation()
  const { language, changeLanguage, languages, t } = useContext(LanguageContext)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const showToast = () => {
    const msgs = [
      '🔮 Your fridge may fail in 10 days!',
      '🤖 Auto-booking a plumber for you…',
      '⭐ Raj from your street got 5 stars!',
    ]
    const toast = { id: Date.now(), msg: msgs[Math.floor(Math.random() * msgs.length)] }
    setToasts(prev => [...prev, toast])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== toast.id)), 3800)
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <NavLink to="/" className="nav-logo">⚡ HyperLocal Pro++</NavLink>

        <ul className="nav-links" style={{ display: 'flex' }}>
          {mainLinks.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          {/* Features Dropdown */}
          <li style={{ position: 'relative', group: 'features-dropdown' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem'
              }}
              onMouseEnter={() => setExpandedGroup(0)}
            >
              Features <ChevronDown size={16} />
            </button>
            {expandedGroup === 0 && (
              <div
                onMouseLeave={() => setExpandedGroup(null)}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  minWidth: '220px',
                  marginTop: '0.5rem',
                  zIndex: 1000
                }}
              >
                {featureGroups.map((group, idx) => (
                  <div key={idx} style={{ paddingBottom: idx < featureGroups.length - 1 ? '0.5rem' : 0, borderBottom: idx < featureGroups.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <p style={{ padding: '0.75rem 1rem 0.5rem', fontSize: '0.75rem', color: 'var(--text-400)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {group.label}
                    </p>
                    {group.items.map(item => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        style={{ display: 'block', padding: '0.6rem 1rem', fontSize: '0.9rem', color: 'var(--text-200)' }}
                        className={({ isActive }) => isActive ? 'active' : ''}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Bell with notif badge */}
          <button
            id="nav-bell"
            onClick={showToast}
            style={{
              position: 'relative', background: 'none', border: 'none', color: 'var(--text-300)',
              fontSize: '1.2rem', display: 'flex', alignItems: 'center'
            }}
          >
            <Bell size={20} />
            <span className="notif-badge">3</span>
          </button>

          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              style={{
                background: 'none', border: 'none', color: 'var(--text-200)',
                fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <Globe size={18} />
              {languages[language]?.code.toUpperCase()}
              <ChevronDown size={14} />
            </button>
            {langDropdown && (
              <div
                style={{
                  position: 'absolute', top: '100%', right: 0,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)', minWidth: '140px', marginTop: '0.5rem', zIndex: 1000
                }}
              >
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => {
                      changeLanguage(code)
                      setLangDropdown(false)
                    }}
                    style={{
                      width: '100%', textAlign: 'left', padding: '0.6rem 1rem',
                      background: language === code ? 'var(--fill-secondary)' : 'transparent',
                      border: 'none', color: 'var(--text-200)', cursor: 'pointer',
                      fontSize: '0.9rem', transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'var(--fill-primary)'}
                    onMouseLeave={(e) => e.target.style.background = language === code ? 'var(--fill-secondary)' : 'transparent'}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <MagButton id="nav-cta" onClick={() => {}} style={{ fontSize: '0.8rem', padding: '0.5rem 1.2rem' }}>
            {t('bookNow')}
          </MagButton>

          {/* Mobile menu */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text-200)' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: 'rgba(6,8,17,0.97)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--border)', padding: '1.5rem',
          zIndex: 999, display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto'
        }}>
          {mainLinks.map(l => (
            <NavLink key={l.to} to={l.to} style={{ color: 'var(--text-200)', fontWeight: 500, padding: '0.4rem 0' }}>
              {l.label}
            </NavLink>
          ))}
          {featureGroups.map((group, idx) => (
            <div key={idx}>
              <button
                onClick={() => setExpandedGroup(expandedGroup === idx ? null : idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-200)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {group.label}
                <ChevronDown size={16} style={{ transform: expandedGroup === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </button>
              {expandedGroup === idx && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                  {group.items.map(item => (
                    <NavLink key={item.to} to={item.to} style={{ color: 'var(--text-300)', fontSize: '0.9rem' }}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Toast stack */}
      <div style={{
        position: 'fixed', bottom: '6rem', right: '2rem', zIndex: 9999,
        display: 'flex', flexDirection: 'column', gap: '0.5rem'
      }}>
        {toasts.map(t => (
          <div key={t.id} className="toast glass-2">
            {t.msg}
          </div>
        ))}
      </div>
    </>
  )
}
