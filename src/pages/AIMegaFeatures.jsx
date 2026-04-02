import { useScrollReveal } from '../hooks/useScrollReveal'

export default function AIMegaFeatures() {
  useScrollReveal()

  const features = [
    {
      icon: '🗣️',
      title: 'Voice-First App',
      desc: 'Full voice control: "Fix my leaking tap tomorrow"'
    },
    {
      icon: '🧠',
      title: 'Behavior Learning Engine',
      desc: 'AI learns your preferences and personalizes everything'
    },
    {
      icon: '💼',
      title: 'Digital Twin Profiles',
      desc: 'AI profiles show professional strengths & specialties'
    }
  ]

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🤖 AI Mega Features</p>
          <h1 className="section-title">Next-Gen AI Capabilities</h1>
          <p className="section-sub">Voice control, behavior learning, and AI-powered professional profiles.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {features.map((feature, idx) => (
            <div key={idx} className="service-card">
              <span style={{ fontSize: '3rem' }}>{feature.icon}</span>
              <h3 style={{ color: 'var(--text-100)', fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-300)' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal delay-2" style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 'var(--r-lg)' }}>
          <p style={{ color: 'var(--text-100)', fontSize: '1rem' }}>
            🎤 Try Voice Commands
          </p>
          <button style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--r-sm)',
            fontWeight: 700,
            cursor: 'pointer'
          }}>
            Start Listening
          </button>
        </div>
      </div>
    </div>
  )
}
