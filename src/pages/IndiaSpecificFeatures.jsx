import { useContext, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { LanguageContext, languages } from '../contexts/LanguageContext'

export default function IndiaSpecificFeatures() {
  useScrollReveal()
  const { language, changeLanguage, t } = useContext(LanguageContext)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const features = [
    {
      icon: '🌐',
      title: 'Multi-Language Support',
      langs: 'Tamil, Hindi, Kannada, Telugu, Malayalam'
    },
    {
      icon: '💳',
      title: 'Payment Flexibility',
      desc: 'Cash, UPI, Pay Later available'
    },
    {
      icon: '🎉',
      title: 'Festival Packages',
      desc: 'Special cleaning & services for Diwali, Holi, more'
    },
    {
      icon: '🏘️',
      title: 'Village Networks',
      desc: 'Hyperlocal service hubs even in tier-2/3 cities'
    },
    {
      icon: '📱',
      title: 'Missed Call Booking',
      desc: 'USSD & SMS-based booking for low-data areas'
    },
    {
      icon: '🚗',
      title: 'Two-Wheeler Friendly',
      desc: 'Professionals with scooters for quick neighborhood service'
    }
  ]

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🇮🇳 India-First Features</p>
          <h1 className="section-title">Built for India</h1>
          <p className="section-sub">Multi-language, UPI payments, festival packages, and village-level networks.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {features.map((feature, idx) => (
            <div key={idx} className="service-card">
              <span style={{ fontSize: '3rem' }}>{feature.icon}</span>
              <h3 style={{ color: 'var(--text-100)', fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-300)' }}>
                {feature.langs || feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal delay-2" style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 'var(--r-lg)' }}>
          <p style={{ color: 'var(--text-100)', fontSize: '1rem' }}>
            🗣️ {t('currentLanguage')}: {languages[language]?.name}  
          </p>
          <div style={{ position: 'relative', marginTop: '1rem' }}>
            <button 
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--r-sm)',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              {t('changeLanguage')}
            </button>
            
            {showLanguageMenu && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: '0.5rem',
                background: 'var(--surface)',
                border: '1px solid rgba(255,109,0,0.2)',
                borderRadius: 'var(--r-sm)',
                padding: '0.5rem',
                minWidth: '200px',
                zIndex: 1000,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
              }}>
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => {
                      changeLanguage(code)
                      setShowLanguageMenu(false)
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: language === code ? 'rgba(255,109,0,0.2)' : 'transparent',
                      border: 'none',
                      color: language === code ? 'var(--accent)' : 'var(--text-100)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      borderRadius: 'var(--r-xs)',
                      fontWeight: language === code ? 700 : 400,
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255,109,0,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = language === code ? 'rgba(255,109,0,0.2)' : 'transparent'
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
