import { useScrollReveal } from '../hooks/useScrollReveal'

export default function EcosystemMarketplace() {
  useScrollReveal()

  const modules = [
    { icon: '🛒', title: 'Parts Marketplace', desc: 'Buy appliances & spare parts' },
    { icon: '🧑‍🏫', title: 'Expert Classes', desc: 'Learn home maintenance skills' },
    { icon: '📱', title: 'Smart Home Hub', desc: 'IoT device integration' },
    { icon: '🏡', title: 'Property Management', desc: 'Full home ecosystem tools' }
  ]

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🌍 Ecosystem Expansion</p>
          <h1 className="section-title">Complete Home Services Platform</h1>
          <p className="section-sub">Beyond services: marketplace, education, and smart home integration.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {modules.map((module, idx) => (
            <div key={idx} className="service-card">
              <span style={{ fontSize: '3rem' }}>{module.icon}</span>
              <h3 style={{ color: 'var(--text-100)', fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>
                {module.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-300)' }}>
                {module.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal delay-2" style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 'var(--r-lg)' }}>
          <p style={{ color: 'var(--text-100)', fontSize: '1rem' }}>
            🚀 Marketplace features rolling out throughout 2026
          </p>
        </div>
      </div>
    </div>
  )
}
