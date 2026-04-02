import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  Home, Thermometer, Zap, Droplets, Wind, ShieldCheck,
  AlertTriangle, CheckCircle, Clock, TrendingUp, Bot
} from 'lucide-react'

/* ─── Appliances data ─── */
const appliances = [
  { id: 'fridge',  icon: '🧊', name: 'Refrigerator',     age: '4 yrs', health: 38, status: 'warning',  alert: 'May fail in ~10 days' },
  { id: 'ac',      icon: '❄️', name: 'Air Conditioner',   age: '2 yrs', health: 82, status: 'good',     alert: null },
  { id: 'geyser',  icon: '🚿', name: 'Water Heater',      age: '6 yrs', health: 55, status: 'warning',  alert: 'Service overdue by 3 months' },
  { id: 'washing', icon: '👕', name: 'Washing Machine',   age: '3 yrs', health: 91, status: 'good',     alert: null },
  { id: 'inverter',icon: '🔋', name: 'Inverter/Battery',  age: '5 yrs', health: 30, status: 'critical', alert: 'Battery life critical!' },
  { id: 'ro',      icon: '💧', name: 'Water Purifier',    age: '1 yr',  health: 94, status: 'good',     alert: null },
]

/* ─── Recent bookings ─── */
const recentBookings = [
  { id: 1, service: 'AC Tune-Up',     pro: 'Ramesh K.',    date: 'Mar 28', status: 'completed', cost: '₹650'  },
  { id: 2, service: 'Pest Control',   pro: 'Pest Shield',  date: 'Mar 15', status: 'completed', cost: '₹1200' },
  { id: 3, service: 'Refrigerator',   pro: 'Auto-Booked',  date: 'Apr 3',  status: 'upcoming',  cost: '₹450'  },
]

/* ─── Home Health Score Ring ─── */
function ScoreRing({ score }) {
  const r = 64
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ

  const color =
    score >= 75 ? 'var(--emerald)' :
    score >= 50 ? 'var(--amber)'   : 'var(--rose)'

  return (
    <div className="score-ring" style={{ position: 'relative', width: 160, height: 160, flexShrink: 0 }}>
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} fill="none" stroke="var(--surface-2)" strokeWidth="10" />
        <circle
          cx="80" cy="80" r={r} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.34,1.56,0.64,1)', filter: `drop-shadow(0 0 8px ${color})` }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color }}>{score}</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Health</span>
      </div>
    </div>
  )
}

/* ─── Auto-booking toggle ─── */
function AutoBookToggle({ label, desc, on, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ flex: 1 }}>
        <p style={{ color: 'var(--text-100)', fontWeight: 600, fontSize: '0.9rem' }}>{label}</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-400)', marginTop: 2 }}>{desc}</p>
      </div>
      <div className={`toggle-switch ${on ? 'on' : ''}`} onClick={onToggle} id={`toggle-${label.replace(/\s/g,'-').toLowerCase()}`} />
    </div>
  )
}

/* ─── Dashboard ─── */
export default function Dashboard() {
  useScrollReveal()
  const [score] = useState(72)
  const [autoBook, setAutoBook] = useState({ critical: true, routine: false, seasonal: true })
  const [activeTab, setActiveTab] = useState('twin')
  const [loadingAppliance, setLoadingAppliance] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoadingAppliance(false), 1500)
  }, [])

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />

      <div className="section" style={{ paddingTop: '2rem' }}>
        {/* ─── Header ─── */}
        <div className="reveal" style={{ marginBottom: '2rem' }}>
          <p className="section-label">Your Home Intelligence</p>
          <h2 className="section-title">
            AI Dashboard &amp; <span className="gradient-text">Digital Twin</span>
          </h2>
          <p className="section-sub">
            Your home's real-time health, predictive alerts, and autonomous service management.
          </p>
        </div>

        {/* ─── Top row: score + auto-book ─── */}
        <div className="grid-2 reveal delay-1" style={{ marginBottom: '2rem' }}>
          {/* Health Score */}
          <div className="health-score-widget">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ color: 'var(--accent-2)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Home Health Score
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <ScoreRing score={score} />
                <div>
                  <p style={{ color: 'var(--text-100)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                    Moderate Risk 🟡
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginBottom: '1rem' }}>
                    2 appliances need attention
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className="badge badge-rose"><AlertTriangle size={10} /> 1 Critical</span>
                    <span className="badge badge-accent">1 Warning</span>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label: 'Maintenance', val: 60 },
                  { label: 'Safety',      val: 85 },
                  { label: 'Efficiency',  val: 71 },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-300)' }}>{item.label}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-200)', fontWeight: 600 }}>{item.val}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${item.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Auto-booking Panel */}
          <div className="service-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <Bot size={20} color="var(--accent-2)" />
              <h3 style={{ fontSize: '1rem' }}>Auto-Booking Mode</h3>
              <span className="badge badge-cyan" style={{ marginLeft: 'auto' }}>Set &amp; Forget</span>
            </div>

            <AutoBookToggle
              label="Critical Issues"
              desc="Auto-book for emergencies like pipe burst, power failure"
              on={autoBook.critical}
              onToggle={() => setAutoBook(p => ({ ...p, critical: !p.critical }))}
            />
            <AutoBookToggle
              label="Routine Maintenance"
              desc="Regular checkups, filter cleaning, etc."
              on={autoBook.routine}
              onToggle={() => setAutoBook(p => ({ ...p, routine: !p.routine }))}
            />
            <AutoBookToggle
              label="Seasonal Services"
              desc="Pre-summer AC tune-up, monsoon waterproofing"
              on={autoBook.seasonal}
              onToggle={() => setAutoBook(p => ({ ...p, seasonal: !p.seasonal }))}
            />

            <div style={{
              marginTop: '1rem', padding: '0.75rem', borderRadius: 'var(--r-md)',
              background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.8rem', color: 'var(--accent-2)', display: 'flex', gap: '8px', alignItems: 'center'
            }}>
              <Zap size={14} /> Auto-booking will notify you before confirming any job.
            </div>
          </div>
        </div>

        {/* ─── TABS: Digital Twin / Bookings / Alerts ─── */}
        <div className="reveal delay-2">
          <div className="tabs">
            {['twin', 'bookings', 'alerts'].map(t => (
              <button
                key={t} id={`tab-${t}`}
                className={`tab ${activeTab === t ? 'active' : ''}`}
                onClick={() => setActiveTab(t)}
                style={{ background: 'none', border: 'none', fontFamily: 'inherit' }}
              >
                {t === 'twin' ? '🏠 Digital Twin' : t === 'bookings' ? '📅 Bookings' : '🔔 Alerts'}
              </button>
            ))}
          </div>

          {/* Digital Twin tab */}
          {activeTab === 'twin' && (
            <div className="feature-grid">
              {loadingAppliance
                ? [...Array(6)].map((_, i) => (
                    <div key={i} className="skeleton" style={{ height: 100, borderRadius: 'var(--r-lg)' }} />
                  ))
                : appliances.map(a => (
                    <div key={a.id} className="service-card"
                      style={{
                        borderColor: a.status === 'critical'
                          ? 'rgba(244,63,94,0.4)'
                          : a.status === 'warning'
                          ? 'rgba(245,158,11,0.4)'
                          : 'var(--border)',
                        background: a.status === 'critical'
                          ? 'rgba(244,63,94,0.05)'
                          : a.status === 'warning'
                          ? 'rgba(245,158,11,0.05)'
                          : 'var(--surface)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <span style={{ fontSize: '1.6rem' }}>{a.icon}</span>
                        <div style={{ flex: 1 }}>
                          <p style={{ color: 'var(--text-100)', fontWeight: 600, fontSize: '0.9rem' }}>{a.name}</p>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-400)' }}>Age: {a.age}</p>
                        </div>
                        {a.status === 'critical'
                          ? <AlertTriangle size={16} color="var(--rose)" />
                          : a.status === 'warning'
                          ? <AlertTriangle size={16} color="var(--amber)" />
                          : <CheckCircle size={16} color="var(--emerald)" />
                        }
                      </div>
                      <div className="progress-bar" style={{ marginBottom: '0.4rem' }}>
                        <div className="progress-fill" style={{
                          width: `${a.health}%`,
                          background: a.health < 40
                            ? 'linear-gradient(to right, var(--rose), #ff6b6b)'
                            : a.health < 65
                            ? 'linear-gradient(to right, var(--amber), #fcd34d)'
                            : 'linear-gradient(to right, var(--emerald), #34d399)'
                        }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-400)' }}>Health: {a.health}%</span>
                        {a.alert && (
                          <span style={{ fontSize: '0.7rem', color: a.status === 'critical' ? 'var(--rose)' : 'var(--amber)', fontWeight: 600 }}>
                            {a.alert}
                          </span>
                        )}
                      </div>
                    </div>
                  ))
              }
            </div>
          )}

          {/* Bookings tab */}
          {activeTab === 'bookings' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentBookings.map(b => (
                <div key={b.id} className="feed-post" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: 'var(--text-100)', fontWeight: 600, fontSize: '0.9rem' }}>{b.service}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-400)' }}>
                      by {b.pro} · {b.date}
                    </p>
                  </div>
                  <span style={{ fontWeight: 700, color: 'var(--text-200)' }}>{b.cost}</span>
                  <span className={`badge ${b.status === 'completed' ? 'badge-green' : 'badge-accent'}`}>
                    {b.status === 'completed' ? <CheckCircle size={10} /> : <Clock size={10} />}
                    {b.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Alerts tab */}
          {activeTab === 'alerts' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '🧊', level: 'critical', title: 'Refrigerator Failure Risk', msg: 'Compressor temperature spike detected. Predicted failure in 10 days.', action: 'Auto-Book Repair' },
                { icon: '🔋', level: 'critical', title: 'Inverter Battery Critical', msg: 'Remaining cycle life < 20%. Replace before next power cut season.', action: 'Book Replacement' },
                { icon: '🚿', level: 'warning',  title: 'Geyser Service Overdue', msg: 'Last serviced 15 months ago. Efficiency down by ~23%.', action: 'Schedule Service' },
              ].map((a, i) => (
                <div key={i} className="service-card reveal" style={{
                  borderColor: a.level === 'critical' ? 'rgba(244,63,94,0.4)' : 'rgba(245,158,11,0.4)',
                  background: a.level === 'critical' ? 'rgba(244,63,94,0.05)' : 'rgba(245,158,11,0.05)'
                }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.8rem' }}>{a.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                        <p style={{ color: 'var(--text-100)', fontWeight: 700 }}>{a.title}</p>
                        <span className={`badge ${a.level === 'critical' ? 'badge-rose' : 'badge-accent'}`}>
                          {a.level}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>{a.msg}</p>
                      <button className="mag-btn" style={{ fontSize: '0.78rem', padding: '0.4rem 1rem' }}>
                        {a.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ─── AI Insight Banner ─── */}
        <div className="reveal" style={{
          marginTop: '2rem', borderRadius: 'var(--r-lg)', padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(220, 220, 220, 0.08))',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex', alignItems: 'center', gap: '1rem'
        }}>
          <div className="reward-orb" style={{ width: 48, height: 48, fontSize: '1.2rem', flexShrink: 0 }}>
            🧠
          </div>
          <div>
            <p style={{ color: 'var(--text-100)', fontWeight: 700, marginBottom: '0.2rem' }}>
              AI Insight: Servicing your geyser now can save ~₹2,400 in energy costs
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-300)' }}>
              Based on your usage pattern and current appliance efficiency. Next best slot: Tomorrow 10–11 AM.
            </p>
          </div>
          <button className="mag-btn" style={{ fontSize: '0.78rem', padding: '0.5rem 1.2rem', flexShrink: 0 }}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
