import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ShieldCheck, Link2, Eye, CheckCircle, AlertCircle, FileCheck } from 'lucide-react'

const blockchainHistory = [
  { hash: '0x4f8a...c23e', job: 'AC Repair', pro: 'Suresh K.', date: 'Mar 28, 2026', amount: '₹650', verified: true },
  { hash: '0x9b1d...f07c', job: 'Pest Control', pro: 'EcoGuard', date: 'Mar 15, 2026', amount: '₹1200', verified: true },
  { hash: '0x2e7f...a84b', job: 'Deep Clean', pro: 'CleanSphere', date: 'Feb 20, 2026', amount: '₹2100', verified: true },
]

const fraudChecks = [
  { label: 'Review Authenticity', status: 'pass', detail: 'All 47 reviews verified as genuine' },
  { label: 'Price Fairness Check', status: 'pass', detail: 'Pricing within ±8% of market rate' },
  { label: 'Identity Verification', status: 'pass', detail: 'Aadhaar + Police clearance verified' },
  { label: 'Overcharging Pattern', status: 'warn', detail: '1 dispute flagged in Jan 2026 — resolved' },
]

export default function Trust() {
  useScrollReveal()
  const [contractStep, setContractStep] = useState(0)

  const contractSteps = [
    { label: 'Booking Confirmed', icon: '📋', done: true },
    { label: 'Pro En Route',      icon: '🚗', done: true },
    { label: 'Job In Progress',   icon: '🔧', done: true },
    { label: 'Job Complete',      icon: '✅', done: false },
    { label: 'Payment Released',  icon: '💰', done: false },
  ]

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section" style={{ paddingTop: '2rem' }}>
        <div className="reveal" style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Trust Revolution</p>
          <h2 className="section-title">Powered by <span className="gradient-text">Blockchain & AI</span></h2>
          <p className="section-sub">Every job recorded permanently. Every payment secured by smart contracts. Complete transparency.</p>
        </div>

        <div className="grid-2" style={{ marginBottom: '2rem' }}>
          {/* Blockchain history */}
          <div className="service-card reveal delay-1">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Link2 size={20} color="var(--cyan)" />
              <h3 style={{ fontSize: '1rem' }}>Blockchain Work History</h3>
              <span className="badge badge-cyan" style={{ marginLeft: 'auto' }}>Immutable</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {blockchainHistory.map((b, i) => (
                <div key={i} className="block-card" style={{ marginBottom: i < blockchainHistory.length - 1 ? '1.5rem' : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--cyan)', fontSize: '0.7rem' }}>{b.hash}</span>
                    {b.verified && <span className="badge badge-green" style={{ fontSize: '0.6rem' }}><CheckCircle size={8} /> on-chain</span>}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.3rem' }}>
                    {[['Job', b.job], ['Pro', b.pro], ['Date', b.date], ['Amount', b.amount]].map(([k, v]) => (
                      <div key={k}>
                        <span style={{ color: 'var(--text-400)', fontSize: '0.68rem' }}>{k}: </span>
                        <span style={{ color: 'var(--text-200)', fontSize: '0.72rem', fontWeight: 600 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart contract */}
          <div className="service-card reveal delay-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <FileCheck size={20} color="var(--accent-2)" />
              <h3 style={{ fontSize: '1rem' }}>Smart Contract Payment</h3>
              <span className="badge badge-accent" style={{ marginLeft: 'auto' }}>Live</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-300)', marginBottom: '1.5rem' }}>
              Payment locked in escrow. Released automatically only after job completion and your approval.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contractSteps.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                    background: s.done ? 'rgba(16,185,129,0.15)' : 'var(--surface-2)',
                    border: `1px solid ${s.done ? 'rgba(16,185,129,0.4)' : 'var(--border)'}`,
                  }}>
                    {s.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: s.done ? 600 : 400, color: s.done ? 'var(--text-100)' : 'var(--text-400)' }}>{s.label}</p>
                  </div>
                  {s.done && <CheckCircle size={16} color="var(--emerald)" />}
                </div>
              ))}
            </div>
            <button className="mag-btn" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }} id="approve-release">
              Approve & Release Payment
            </button>
          </div>
        </div>

        {/* AI Fraud Detection */}
        <div className="service-card reveal delay-3">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Eye size={20} color="var(--rose)" />
            <h3 style={{ fontSize: '1rem' }}>AI Fraud Detection Report</h3>
            <span className="badge badge-green" style={{ marginLeft: 'auto' }}>Safe to Book</span>
          </div>
          <div className="grid-2">
            {fraudChecks.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.85rem', borderRadius: 'var(--r-md)', background: 'var(--surface-2)', border: `1px solid ${c.status === 'pass' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)'}` }}>
                <div style={{ flexShrink: 0 }}>
                  {c.status === 'pass'
                    ? <CheckCircle size={18} color="var(--emerald)" />
                    : <AlertCircle   size={18} color="var(--amber)" />}
                </div>
                <div>
                  <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-100)', marginBottom: '2px' }}>{c.label}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-400)' }}>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AR Work recording notice */}
        <div className="reveal" style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: 'var(--r-lg)', background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.2)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '2rem' }}>🎥</span>
          <div>
            <p style={{ color: 'var(--text-100)', fontWeight: 700, marginBottom: '0.3rem' }}>Work Recording Enabled</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-300)' }}>With your consent, the entire job is recorded and encrypted. Provides complete transparency and dispute protection.</p>
          </div>
          <span className="badge badge-accent" style={{ flexShrink: 0, marginLeft: 'auto' }}>Optional</span>
        </div>
      </div>
    </div>
  )
}
