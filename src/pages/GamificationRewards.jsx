import { useScrollReveal } from '../hooks/useScrollReveal'

export default function GamificationRewards() {
  useScrollReveal()

  const features = [
    {
      icon: '🪙',
      title: 'Reward Economy',
      desc: 'Earn points for reviews, referrals, and redeem for discounts'
    },
    {
      icon: '🔥',
      title: 'Service Streaks',
      desc: 'Regular maintenance unlocks special rewards and badges'
    },
    {
      icon: '⚔️',
      title: 'Skill Battles',
      desc: 'Professionals compete in speed and quality challenges'
    }
  ]

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🎮 Gamification</p>
          <h1 className="section-title">Engage & Earn Rewards</h1>
          <p className="section-sub">Make home maintenance fun with rewards, streaks, and challenges.</p>
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
          <p style={{ color: 'var(--text-100)', fontSize: '1rem', marginBottom: '1rem' }}>
            Your Rewards: 💰 2,340 points earned
          </p>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--r-sm)',
            fontWeight: 700,
            cursor: 'pointer'
          }}>
            Redeem Points
          </button>
        </div>
      </div>
    </div>
  )
}
