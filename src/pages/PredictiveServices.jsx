import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Zap, Droplets, Wind, TrendingDown, Calendar, Bot } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const predictions = [
  {
    id: 1,
    appliance: 'Refrigerator',
    icon: '🧊',
    currentHealth: 38,
    daysToFailure: 10,
    severity: 'critical',
    reason: 'Compressor efficiency declining 15% per week',
    suggestedAction: 'Schedule repair immediately',
    estimatedCost: '₹3,500-5,000',
    autoBookable: true
  },
  {
    id: 2,
    appliance: 'Water Heater (Geyser)',
    icon: '🚿',
    currentHealth: 55,
    daysToFailure: 45,
    severity: 'warning',
    reason: 'Scale buildup detected via usage patterns',
    suggestedAction: 'De-scaling service recommended',
    estimatedCost: '₹1,200-1,800',
    autoBookable: true
  },
  {
    id: 3,
    appliance: 'Inverter Battery',
    icon: '🔋',
    currentHealth: 30,
    daysToFailure: 5,
    severity: 'critical',
    reason: 'Battery discharge rate critically high (85% in 8 hrs)',
    suggestedAction: 'Replace battery or repair immediately',
    estimatedCost: '₹8,000-12,000',
    autoBookable: false
  },
  {
    id: 4,
    appliance: 'Air Conditioner',
    icon: '❄️',
    currentHealth: 82,
    daysToFailure: 120,
    severity: 'info',
    reason: 'Filter maintenance due in 3 months based on usage',
    suggestedAction: 'Schedule filter cleaning',
    estimatedCost: '₹400-600',
    autoBookable: true
  }
]

function PredictionCard({ pred, index }) {
  const severityColor = {
    critical: 'var(--rose)',
    warning: 'var(--amber)',
    info: 'var(--blue)'
  }

  const bgColor = {
    critical: 'rgba(244,63,94,0.08)',
    warning: 'rgba(245,158,11,0.08)',
    info: 'rgba(59,130,246,0.08)'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="service-card"
      style={{
        borderColor: severityColor[pred.severity],
        background: bgColor[pred.severity]
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'start', flex: 1 }}>
          <span style={{ fontSize: '2rem' }}>{pred.icon}</span>
          <div>
            <h3 style={{ color: 'var(--text-100)', fontSize: '1.1rem', fontWeight: 700 }}>
              {pred.appliance}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginTop: '0.25rem' }}>
              Health: {pred.currentHealth}% • {pred.daysToFailure} days to potential failure
            </p>
          </div>
        </div>
        <span className="badge" style={{ background: severityColor[pred.severity], color: 'white' }}>
          {pred.severity.toUpperCase()}
        </span>
      </div>

      <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: 'var(--r-md)', marginBottom: '1rem' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-300)', marginBottom: '0.5rem' }}>
          <strong>Why:</strong> {pred.reason}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
            Action
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-100)', marginTop: '0.3rem' }}>
            {pred.suggestedAction}
          </p>
        </div>
        <div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
            Est. Cost
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-100)', marginTop: '0.3rem' }}>
            {pred.estimatedCost}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {pred.autoBookable && (
          <button style={{
            flex: 1,
            padding: '0.75rem',
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--r-sm)',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '0.85rem'
          }}>
            🤖 Auto-Book
          </button>
        )}
        <button style={{
          flex: 1,
          padding: '0.75rem',
          background: 'var(--surface-2)',
          color: 'var(--text-100)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-sm)',
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '0.85rem'
        }}>
          View Details
        </button>
      </div>
    </motion.div>
  )
}

export default function PredictiveServices() {
  useScrollReveal()
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? predictions : predictions.filter(p => p.severity === filter)

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />

      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🔮 AI Prediction Engine</p>
          <h1 className="section-title">
            Predictive Home Health System
          </h1>
          <p className="section-sub">
            Our AI builds a digital twin of your home, analyzing appliance age, usage patterns, and failure indicators. Get alerts before problems happen.
          </p>
        </div>

        {/* Filter */}
        <div className="reveal delay-1" style={{ marginBottom: '2rem', display: 'flex', gap: '0.75rem' }}>
          {['all', 'critical', 'warning', 'info'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--r-sm)',
                border: f === filter ? '2px solid var(--accent)' : '1px solid var(--border)',
                background: f === filter ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                color: f === filter ? 'var(--accent)' : 'var(--text-300)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Predictions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((pred, idx) => (
            <PredictionCard key={pred.id} pred={pred} index={idx} />
          ))}
        </div>

        {/* Stats */}
        <div className="reveal delay-3" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="service-card">
            <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
              Critical Issues
            </p>
            <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--rose)', marginTop: '0.5rem' }}>
              2
            </p>
          </div>
          <div className="service-card">
            <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
              Avg Days to Failure
            </p>
            <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--amber)', marginTop: '0.5rem' }}>
              45d
            </p>
          </div>
          <div className="service-card">
            <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
              Est. Preventive Cost
            </p>
            <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', marginTop: '0.5rem' }}>
              ₹7.8k
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
