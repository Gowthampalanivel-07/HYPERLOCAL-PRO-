import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const feeds = [
  {
    id: 1,
    user: 'Raj Kumar',
    action: 'Fixed AC',
    location: 'Whitefield',
    time: '2 hours ago',
    pro: 'CoolAir Experts',
    avatar: '👨',
    trustRating: 4.8
  },
  {
    id: 2,
    user: 'Priya S.',
    action: 'Water heater serviced',
    location: 'Indiranagar',
    time: '6 hours ago',
    pro: 'Hot Water Pros',
    avatar: '👩',
    trustRating: 4.9
  },
  {
    id: 3,
    user: 'Vikram',
    action: 'Refrigerator repair completed',
    location: 'Koramangala',
    time: '1 day ago',
    pro: 'TechFix Pro',
    avatar: '👨‍💼',
    trustRating: 4.7
  }
]

const leaderboard = [
  { rank: 1, name: 'Ramesh K.', services: 342, rating: 4.98, badge: '⭐ Top Pro' },
  { rank: 2, name: 'Deepak S.', services: 298, rating: 4.95, badge: '🔥 Hot' },
  { rank: 3, name: 'Kumar V.', services: 267, rating: 4.93, badge: '✨ Trusted' },
  { rank: 4, name: 'Arun M.', services: 245, rating: 4.91, badge: '🌟 Rising' },
  { rank: 5, name: 'Suresh P.', services: 201, rating: 4.88, badge: '📈 New' }
]

const groupBookings = [
  {
    id: 1,
    service: 'Residential Deep Cleaning',
    saving: '₹2,400 per house',
    households: 5,
    status: 'Full'
  },
  {
    id: 2,
    service: 'AC Pre-Summer Tune-up',
    saving: '₹800 per AC',
    households: 8,
    status: 'Full'
  },
  {
    id: 3,
    service: 'Plumbing Inspection',
    saving: '₹500 per house',
    households: 3,
    status: '1 slot left'
  }
]

function FeedItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="service-card"
    >
      <div style={{ display: 'flex', gap: '1rem' }}>
        <span style={{ fontSize: '2rem' }}>{item.avatar}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
            <p style={{ color: 'var(--text-100)', fontWeight: 700 }}>
              {item.user}
            </p>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-400)' }}>{item.time}</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-200)', marginBottom: '0.5rem' }}>
            {item.action} by <strong style={{ color: 'var(--accent)' }}>{item.pro}</strong>
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-300)' }}>📍 {item.location}</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--amber)' }}>⭐ {item.trustRating}</span>
          </div>
        </div>
      </div>
      <button style={{
        width: '100%',
        marginTop: '1rem',
        padding: '0.6rem',
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid var(--accent)',
        color: 'var(--accent)',
        borderRadius: 'var(--r-sm)',
        fontWeight: 600,
        cursor: 'pointer'
      }}>
        See Details
      </button>
    </motion.div>
  )
}

export default function CommunityHub() {
  useScrollReveal()
  const [tab, setTab] = useState('feed')

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />

      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">👥 Local Community</p>
          <h1 className="section-title">
            Trust Through Community
          </h1>
          <p className="section-sub">
            See what your neighbors are booking, celebrate top professionals, and save money with group bookings.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal delay-1" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
            {['feed', 'leaderboard', 'group'].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  background: 'none',
                  borderBottom: tab === t ? '2px solid var(--accent)' : 'none',
                  color: tab === t ? 'var(--accent)' : 'var(--text-300)',
                  fontWeight: tab === t ? 700 : 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {t === 'feed' ? '🏘️ Neighborhood Feed' : t === 'leaderboard' ? '🏆 Top Professionals' : '🤝 Group Bookings'}
              </button>
            ))}
          </div>
        </div>

        {/* Feed */}
        {tab === 'feed' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
            {feeds.map((item, idx) => (
              <FeedItem key={item.id} item={item} index={idx} />
            ))}
          </div>
        )}

        {/* Leaderboard */}
        {tab === 'leaderboard' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="service-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {leaderboard.map((pro, idx) => (
                <div key={pro.rank} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: idx % 2 === 0 ? 'var(--surface-2)' : 'transparent',
                  borderRadius: 'var(--r-md)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: pro.rank === 1 ? 'var(--amber)' : pro.rank === 2 ? '#FFB74D' : pro.rank === 3 ? '#FF9100' : 'var(--surface)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem'
                  }}>
                    {pro.rank}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: 'var(--text-100)', fontWeight: 700 }}>{pro.name}</p>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-300)' }}>
                      <span>📊 {pro.services} services</span>
                      <span>⭐ {pro.rating}</span>
                    </div>
                  </div>
                  <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255, 255, 255, 0.08)', color: 'var(--accent)', borderRadius: 'var(--r-sm)', fontSize: '0.8rem', fontWeight: 600 }}>
                    {pro.badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Group Bookings */}
        {tab === 'group' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {groupBookings.map((group, idx) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="service-card"
              >
                <h3 style={{ color: 'var(--text-100)', fontWeight: 700, marginBottom: '1rem' }}>
                  {group.service}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Savings per unit
                    </p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--emerald)', marginTop: '0.25rem' }}>
                      {group.saving}
                    </p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-300)' }}>
                      👥 {group.households} households
                    </span>
                    <span className="badge badge-cyan">{group.status}</span>
                  </div>
                </div>
                <button style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--r-sm)',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}>
                  Join Group
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
