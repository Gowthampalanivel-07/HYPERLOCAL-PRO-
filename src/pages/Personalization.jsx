import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const personalizationOptions = [
  {
    id: 'worker-type',
    title: 'Choose Your Perfect Professional',
    description: 'Select what matters most to you in service professionals',
    options: [
      { icon: '⚡', label: 'Fast & Silent', desc: 'Get it done quickly, minimal chat' },
      { icon: '😊', label: 'Friendly & Talkative', desc: 'Conversational, explain everything' },
      { icon: '👑', label: 'Premium Expert', desc: 'Top-rated specialists, premium care' }
    ]
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle-Based Suggestions',
    description: 'We learn your lifestyle and suggest services proactively',
    options: [
      { icon: '🐕', label: 'Pet Owner', desc: 'Special cleaning alerts, pet-safe products' },
      { icon: '💼', label: 'Working Professional', desc: 'Weekend slots, quick services' },
      { icon: '👶', label: 'New Parent', desc: 'Safety-focused, gentle services' },
      { icon: '🏠', label: 'Home Chef', desc: 'Kitchen appliance priority' }
    ]
  },
  {
    id: 'booking-mood',
    title: 'Mood-Aware Booking',
    description: 'App detects urgency and stress level to prioritize services',
    features: [
      'Types indicating urgency: "ASAP!!!", "Need help ASAP", "Urgent" → Prioritize express booking',
      'Relaxed language: "Sometime this week" → Suggest flexible affordable options',
      'Stressed indicators → Suggest senior/premium technicians for peace of mind'
    ]
  }
]

function PersonalizationCard({ item, index }) {
  const [selected, setSelected] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="service-card"
    >
      <h3 style={{ color: 'var(--text-100)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {item.title}
      </h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginBottom: '1.5rem' }}>
        {item.description}
      </p>

      {item.options ? (
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {item.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                padding: '1rem',
                border: selected === i ? '2px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: 'var(--r-md)',
                background: selected === i ? 'rgba(255, 255, 255, 0.08)' : 'var(--surface)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{opt.icon}</span>
                <div>
                  <p style={{ color: 'var(--text-100)', fontWeight: 600, fontSize: '0.95rem' }}>
                    {opt.label}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-400)' }}>
                    {opt.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {item.features?.map((feature, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-300)' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Personalization() {
  useScrollReveal()

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />

      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🧑 Hyper-Personalization</p>
          <h1 className="section-title">
            Your Perfect Service Experience
          </h1>
          <p className="section-sub">
            We learn your preferences, lifestyle, and patterns to make every service feel personalized.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {personalizationOptions.map((item, idx) => (
            <PersonalizationCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
