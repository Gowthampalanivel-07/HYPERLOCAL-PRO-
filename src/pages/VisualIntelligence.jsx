import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const arGuidance = [
  {
    id: 1,
    title: 'AR Repair Guidance',
    icon: '📱',
    desc: 'Point camera at appliance for instant DIY help before booking',
    steps: ['Point camera', 'Get guided overlay', 'Try fix yourself', 'Or book pro']
  },
  {
    id: 2,
    title: 'Bill Scanner & Warranty',
    icon: '📄',
    desc: 'Upload invoice photos to track warranty and get alerts',
    steps: ['Snap invoice', 'Auto-extract warranty', 'Track expiry', 'Get alerts']
  },
  {
    id: 3,
    title: 'Work Recording',
    icon: '🎥',
    desc: 'Optional job documentation for transparency & dispute resolution',
    steps: ['Enable recording', 'Pro completes job', 'Review recording', 'Confirm & pay']
  }
]

function FeatureCard({ feature, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="service-card"
      onClick={() => setExpanded(!expanded)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
        <div style={{ flex: 1 }}>
          <h3 style={{ color: 'var(--text-100)', fontSize: '1.1rem', fontWeight: 700 }}>
            {feature.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginTop: '0.25rem' }}>
            {feature.desc}
          </p>
        </div>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {feature.steps.map((step, i) => (
              <div key={i} style={{
                padding: '0.5rem 1rem',
                background: 'rgba(108,99,255,0.1)',
                borderRadius: 'var(--r-sm)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--accent)'
              }}>
                {i + 1}. {step}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function VisualIntelligence() {
  useScrollReveal()

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />

      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">📸 Visual Intelligence</p>
          <h1 className="section-title">
            AI-Powered Visual Features
          </h1>
          <p className="section-sub">
            AR guidance, warranty tracking, and transparent work documentation—all powered by visual AI.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {arGuidance.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>

        {/* Demo CTA */}
        <div className="reveal delay-3" style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem', background: 'rgba(108,99,255,0.08)', borderRadius: 'var(--r-lg)' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-100)', marginBottom: '1rem' }}>
            📱 Try AR Guidance Now
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
            Open Camera
          </button>
        </div>
      </div>
    </div>
  )
}
