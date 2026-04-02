import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Gift, Zap, Star, Award, Flame, Trophy } from 'lucide-react'

const rewardHistory = [
  { action: 'Left a review',       pts: +50,  icon: '⭐', date: 'Today' },
  { action: 'Referred Arjun M.',   pts: +200, icon: '👥', date: 'Yesterday' },
  { action: 'Service streak: 3 mo',pts: +150, icon: '🔥', date: 'Mar 28' },
  { action: 'Deep Clean booked',   pts: +30,  icon: '🏠', date: 'Mar 15' },
]

const badges = [
  { name: 'Early Adopter',   icon: '🚀', earned: true,  desc: 'Joined in beta' },
  { name: 'Health Hero',     icon: '🧬', earned: true,  desc: 'Score 80+' },
  { name: 'Street Champion', icon: '🏆', earned: true,  desc: 'Top neighbor' },
  { name: 'Group Leader',    icon: '👥', earned: false, desc: 'Start a group deal' },
  { name: 'Smart Saver',     icon: '💰', earned: false, desc: 'Save ₹5000 via deals' },
  { name: 'Eco Warrior',     icon: '🌱', earned: false, desc: 'Book 5 eco services' },
]

const streakData = [
  { month: 'Oct', done: true }, { month: 'Nov', done: true }, { month: 'Dec', done: true },
  { month: 'Jan', done: true }, { month: 'Feb', done: true }, { month: 'Mar', done: true },
  { month: 'Apr', done: false },
]

const skillBattles = [
  { id: 1, title: 'Speed Challenge', desc: 'First pro to complete 10 AC jobs this week', prize: '₹3,000 + 500 pts', ends: '3 days', participants: 24, icon: '⚡' },
  { id: 2, title: 'Quality King',    desc: 'Highest avg rating across 20 jobs',           prize: '₹5,000 + badge',  ends: '7 days', participants: 31, icon: '👑' },
  { id: 3, title: 'Customer Fave',   desc: 'Most repeat bookings this month',             prize: '₹2,500 + premium listing', ends: '15 days', participants: 58, icon: '❤️' },
]

const rewards = [
  { pts: 500,  label: '₹50 Discount', icon: '🎟️' },
  { pts: 1000, label: '₹150 Off',     icon: '💸' },
  { pts: 2000, label: 'Free Service', icon: '🎁' },
  { pts: 5000, label: 'Premium Month',icon: '👑' },
]

export default function Gamification() {
  useScrollReveal()
  const [totalPts] = useState(2840)
  const nextReward = rewards.find(r => r.pts > totalPts) || rewards[rewards.length - 1]
  const progress = Math.min((totalPts / nextReward.pts) * 100, 100)

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section" style={{ paddingTop: '2rem' }}>

        <div className="reveal" style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Reward Economy</p>
          <h2 className="section-title">Earn More, <span className="gradient-text">Save More</span></h2>
          <p className="section-sub">Points for reviews, referrals and streaks. Redeem for discounts and free services.</p>
        </div>

        {/* Points overview */}
        <div className="grid-2 reveal delay-1" style={{ marginBottom: '2rem' }}>
          <div className="health-score-widget">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ color: 'var(--accent-2)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                Your Reward Points
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="reward-orb" style={{ width: 68, height: 68, fontSize: '1.6rem', flexShrink: 0 }}>🪙</div>
                <div>
                  <div className="stat-number" style={{ fontSize: '3rem' }}>{totalPts.toLocaleString()}</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-400)' }}>HyperPoints accumulated</p>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-300)', marginBottom: '0.5rem' }}>
                Next reward: <strong style={{ color: 'var(--text-100)' }}>{nextReward.label} {nextReward.icon}</strong> at {nextReward.pts.toLocaleString()} pts
              </p>
              <div className="progress-bar" style={{ marginBottom: '0.4rem' }}>
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-400)' }}>{nextReward.pts - totalPts} pts to go</p>
            </div>
          </div>

          {/* Reward catalog */}
          <div className="service-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <Gift size={18} color="var(--pink)" />
              <h3 style={{ fontSize: '1rem' }}>Redeem Rewards</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.75rem' }}>
              {rewards.map((r, i) => (
                <div key={i} style={{
                  padding: '1rem', borderRadius: 'var(--r-md)', textAlign: 'center',
                  background: totalPts >= r.pts ? 'rgba(100, 181, 246, 0.12)' : 'var(--surface-2)',
                  border: `1px solid ${totalPts >= r.pts ? 'rgba(100, 181, 246, 0.2)' : 'var(--border)'}}`,
                  opacity: totalPts >= r.pts ? 1 : 0.5
                }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>{r.icon}</div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-100)', marginBottom: '0.25rem' }}>{r.label}</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--accent-2)' }}>{r.pts.toLocaleString()} pts</p>
                  {totalPts >= r.pts && (
                    <button className="mag-btn" style={{ marginTop: '0.5rem', fontSize: '0.7rem', padding: '0.3rem 0.75rem' }}
                      id={`redeem-${i}`}>Redeem</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Streak + Points history */}
        <div className="grid-2 reveal delay-2" style={{ marginBottom: '2rem' }}>
          {/* Streak */}
          <div className="service-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <Flame size={18} color="var(--rose)" />
              <h3 style={{ fontSize: '1rem' }}>Service Streak</h3>
              <span className="badge badge-rose" style={{ marginLeft: 'auto' }}>🔥 6 months</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-300)', marginBottom: '1.2rem' }}>
              Book at least one service per month to keep your streak and earn bonus points.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {streakData.map((m, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: m.done ? 'rgba(244,63,94,0.15)' : 'var(--surface-2)',
                    border: `1px solid ${m.done ? 'rgba(244,63,94,0.4)' : 'var(--border)'}`,
                    fontSize: '1.1rem'
                  }}>
                    {m.done ? '🔥' : '⬜'}
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-400)' }}>{m.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Points history */}
          <div className="service-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <Zap size={18} color="var(--amber)" />
              <h3 style={{ fontSize: '1rem' }}>Recent Earnings</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {rewardHistory.map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                    {r.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-100)', fontWeight: 500 }}>{r.action}</p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-400)' }}>{r.date}</p>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: r.pts > 0 ? 'var(--emerald)' : 'var(--rose)' }}>
                    {r.pts > 0 ? '+' : ''}{r.pts} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="reveal delay-3" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={18} color="var(--amber)" /> Achievement Badges
          </h3>
          <div className="grid-3">
            {badges.map((b, i) => (
              <div key={i} style={{
                padding: '1.2rem', borderRadius: 'var(--r-lg)', border: '1px solid',
                borderColor: b.earned ? 'rgba(245,158,11,0.3)' : 'var(--border)',
                background: b.earned ? 'rgba(245,158,11,0.06)' : 'var(--surface)',
                display: 'flex', alignItems: 'center', gap: '1rem',
                opacity: b.earned ? 1 : 0.5, transition: 'all 0.25s'
              }}>
                <span style={{ fontSize: '1.8rem' }}>{b.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-100)' }}>{b.name}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-400)' }}>{b.desc}</p>
                  {b.earned && <span className="badge badge-accent" style={{ marginTop: '0.3rem', fontSize: '0.6rem' }}>Earned ✓</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Battles */}
        <div className="divider" />
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p className="section-label reveal">For Professionals</p>
          <h2 className="section-title reveal delay-1">Skill <span className="gradient-text">Battles</span></h2>
          <p className="section-sub reveal delay-2" style={{ margin: '0 auto' }}>Compete in speed and quality challenges to win cash prizes and premium badges.</p>
        </div>
        <div className="feature-grid">
          {skillBattles.map((b, i) => (
            <div key={b.id} className={`service-card reveal-scale delay-${i + 1}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.6rem' }}>{b.icon}</span>
                <h3 style={{ fontSize: '1rem' }}>{b.title}</h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-300)', marginBottom: '1rem' }}>{b.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span className="badge badge-green">🏆 {b.prize}</span>
                <span className="badge"><Star size={9} /> {b.participants} competing</span>
                <span className="badge badge-rose">⏳ {b.ends}</span>
              </div>
              <button className="mag-btn" style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }} id={`join-battle-${b.id}`}>
                Join Battle
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
