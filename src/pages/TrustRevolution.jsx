import { useScrollReveal } from '../hooks/useScrollReveal'

const trustFeatures = [
  {
    id: 1,
    icon: '🔗',
    title: 'Blockchain Work History',
    desc: 'Every completed job stored permanently and immutably',
    benefits: ['Tamper-proof records', 'Lifetime reputation', 'Instant verification']
  },
  {
    id: 2,
    icon: '🤖',
    title: 'AI Fraud Detection',
    desc: 'Automatically detects fake reviews and overcharging patterns',
    benefits: ['99% accuracy', 'Real-time alerts', 'Community protected']
  },
  {
    id: 3,
    icon: '💰',
    title: 'Smart Contracts',
    desc: 'Payment released only after job completion and approval',
    benefits: ['Automatic execution', 'No disputes', 'Fair to all parties']
  }
]

export default function TrustRevolution() {
  useScrollReveal()

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🛡️ Trust Revolution</p>
          <h1 className="section-title">Blockchain-Verified Trust</h1>
          <p className="section-sub">Permanent, tamper-proof service records with AI fraud protection.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {trustFeatures.map((feature, idx) => (
            <div key={feature.id} className="service-card">
              <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
              <h3 style={{ color: 'var(--text-100)', fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginBottom: '1rem' }}>
                {feature.desc}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {feature.benefits.map((benefit, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-300)' }}>
                    ✓ {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal delay-2" style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(108,99,255,0.08)', borderRadius: 'var(--r-lg)' }}>
          <p style={{ color: 'var(--text-100)', fontSize: '1rem', marginBottom: '1rem' }}>
            🚀 Coming Soon: Blockchain verification will launch Q3 2026
          </p>
        </div>
      </div>
    </div>
  )
}
