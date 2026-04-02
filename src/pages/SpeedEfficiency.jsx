import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SpeedEfficiency() {
  useScrollReveal()

  const features = [
    {
      icon: '🚁',
      title: 'Drone Inspections',
      desc: 'Advanced roof and large property assessments'
    },
    {
      icon: '📍',
      title: 'Live Technician Tracking',
      desc: 'Real-time movement and delay predictions'
    },
    {
      icon: '🧭',
      title: 'Route Optimization',
      desc: 'AI-powered nearest professional assignment'
    }
  ]

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">⚡ Speed & Efficiency</p>
          <h1 className="section-title">Ultra-Fast Service Delivery</h1>
          <p className="section-sub">Advanced tech for fastest professional response.</p>
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
            🚀 Drone inspections launching Q4 2026
          </p>
        </div>
      </div>
    </div>
  )
}
