import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const professionalFeatures = [
  {
    id: 'ai-assistant',
    title: '🧠 AI Job Co-Pilot',
    desc: 'Real-time job guidance',
    features: [
      'Get smart tool recommendations for current job',
      'Step-by-step repair guidance with images',
      'Real-time performance tracking',
      'Efficiency score for each job'
    ]
  },
  {
    id: 'credit-score',
    title: '📊 Professional Credit Score',
    desc: 'Your reputation as currency',
    features: [
      'Built on reliability, quality, and customer feedback',
      'Unlock loans with better rates',
      'Priority job assignment',
      'Earn premium badges'
    ]
  },
  {
    id: 'b2b-mode',
    title: '💼 B2B Corporate Hiring',
    desc: 'Bulk services for businesses',
    features: [
      'Rent skilled teams for recurring jobs',
      'Monthly maintenance contracts',
      'Corporate bulk discounts',
      'Priority support & SLAs'
    ]
  }
]

const sampleJobs = [
  {
    id: 1,
    name: 'AC Repair - Compressor Issue',
    location: 'Whitefield',
    customer: 'Mrs. Sharma',
    rating: 4.8,
    tools: ['Refrigerant', 'Multimeter', 'Wrench Set'],
    estimatedTime: '1-2 hours'
  },
  {
    id: 2,
    name: 'Leaking Tap - Valve Replacement',
    location: 'Indiranagar',
    customer: 'Raj Kumar',
    rating: 4.9,
    tools: ['Pipe Wrench', 'PTFE Tape', 'Valve'],
    estimatedTime: '30-45 mins'
  }
]

export default function ProfessionalTools() {
  useScrollReveal()
  const [activeFeature, setActiveFeature] = useState('ai-assistant')

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />

      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🧑‍🔧 Professional Superpowers</p>
          <h1 className="section-title">
            Tools for Service Excellence
          </h1>
          <p className="section-sub">
            AI co-pilot, professional credit scores, and B2B corporate solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="reveal delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {professionalFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              style={{
                cursor: 'pointer',
                padding: '1.5rem',
                border: activeFeature === feature.id ? '2px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                background: activeFeature === feature.id ? 'rgba(255, 255, 255, 0.08)' : 'var(--surface)',
                transition: 'all 0.2s'
              }}
              className="service-card"
            >
              <h3 style={{ color: 'var(--text-100)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-300)' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Active Feature Details */}
        {activeFeature === 'ai-assistant' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="reveal delay-2">
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-100)', marginBottom: '1.5rem' }}>
              🧠 AI Job Co-Pilot
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div className="service-card">
                <h3 style={{ color: 'var(--text-100)', fontWeight: 700, marginBottom: '1rem' }}>
                  Available Jobs
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {sampleJobs.map(job => (
                    <div key={job.id} style={{
                      padding: '1rem',
                      background: 'var(--surface-2)',
                      borderRadius: 'var(--r-md)',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}>
                      <p style={{ fontWeight: 700, color: 'var(--text-100)', marginBottom: '0.3rem' }}>
                        {job.name}
                      </p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-300)' }}>
                        {job.location} • ⭐ {job.rating}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-card">
                <h3 style={{ color: 'var(--text-100)', fontWeight: 700, marginBottom: '1rem' }}>
                  Tool Recommendations
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {sampleJobs[0].tools.map((tool, i) => (
                    <div key={i} style={{
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--r-sm)',
                      fontSize: '0.9rem',
                      color: 'var(--text-100)',
                      fontWeight: 600
                    }}>
                      ✓ {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-300)' }}>
              The AI assistant helps you prepare for jobs, optimize your approach, and improve efficiency scores.
            </p>
          </motion.div>
        )}

        {activeFeature === 'credit-score' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="reveal delay-2">
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-100)', marginBottom: '1.5rem' }}>
              📊 Professional Credit Score
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div className="service-card">
                <p style={{ fontSize: '0.8rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Your Score
                </p>
                <p style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginTop: '0.5rem' }}>
                  4.87 / 5.0
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-300)' }}>
                  <div>✓ 342 completed jobs</div>
                  <div>✓ 98.5% on-time delivery</div>
                  <div>✓ 92% positive reviews</div>
                </div>
              </div>

              <div className="service-card" style={{ background: 'rgba(76,175,80,0.08)' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--emerald)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Loan Opportunity
                </p>
                <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--emerald)', marginTop: '0.5rem' }}>
                  ₹2.5 Lakhs Available
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginTop: '0.5rem' }}>
                  At 12% APR - Low for professionals
                </p>
                <button style={{
                  marginTop: '1rem',
                  width: '100%',
                  padding: '0.6rem',
                  background: 'var(--emerald)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--r-sm)',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}>
                  Apply for Loan
                </button>
              </div>
            </div>

            <div className="service-card" style={{ marginTop: '1.5rem' }}>
              <h3 style={{ color: 'var(--text-100)', fontWeight: 700, marginBottom: '1rem' }}>
                Benefits of High Score
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Priority job assignments',
                  'Premium badge visibility',
                  'Better loan rates',
                  'Featured in top professional lists',
                  'Corporate partnership opportunities'
                ].map((benefit, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-300)' }}>
                    ✓ {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {activeFeature === 'b2b-mode' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="reveal delay-2">
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-100)', marginBottom: '1.5rem' }}>
              💼 B2B Corporate Solutions
            </h2>
            
            <div className="service-card">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {[
                  { label: 'Bulk Hiring', value: '50+ staff available' },
                  { label: 'Contracts', value: 'Monthly maintenance' },
                  { label: 'Discount', value: 'Up to 40% off' },
                  { label: 'SLA', value: '24/7 support' }
                ].map((item, i) => (
                  <div key={i} style={{ padding: '1.5rem', background: 'var(--surface-2)', borderRadius: 'var(--r-md)' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-400)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent)', marginTop: '0.5rem' }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
