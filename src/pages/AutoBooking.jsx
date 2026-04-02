import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, AlertCircle, Zap, MapPin, User } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const bookingFlows = [
  {
    id: 1,
    title: 'Auto-Book Critical Issues',
    icon: '🚨',
    description: 'Emergency fixes like burst pipes, power failures - booked within 1 hour',
    steps: [
      { num: 1, title: 'Detection', desc: 'AI detects critical problem', time: '< 1 min' },
      { num: 2, title: 'Verification', desc: 'User gets instant alert', time: '< 2 mins' },
      { num: 3, title: 'Auto-Match', desc: 'Best available pro selected', time: '< 5 mins' },
      { num: 4, title: 'Confirmation', desc: 'Service begins route optimization', time: 'Real-time' }
    ],
    autoBooked: 3,
    avgTime: '32 mins',
    status: 'active'
  },
  {
    id: 2,
    title: 'Routine Maintenance Scheduling',
    icon: '🔧',
    description: 'Regular checkups and preventive services - booked for optimal timing',
    steps: [
      { num: 1, title: 'Analysis', desc: 'AI analyzes usage patterns', time: '< 1 hour' },
      { num: 2, title: 'Scheduling', desc: 'Finds your free slots', time: '< 24 hours' },
      { num: 3, title: 'Matching', desc: 'Expert pro selected', time: '< 1 day' },
      { num: 4, title: 'Notification', desc: 'You confirm (or reschedule)', time: 'Before booking' }
    ],
    autoBooked: 12,
    avgTime: '3-7 days',
    status: 'active'
  },
  {
    id: 3,
    title: 'Seasonal Services Auto-Book',
    icon: '🌤️',
    description: 'Pre-summer AC tune-up, monsoon waterproofing - booked at perfect times',
    steps: [
      { num: 1, title: 'Seasonal Alert', desc: 'Season changing detected', time: '2-3 wks prior' },
      { num: 2, title: 'Preparation', desc: 'Queue service for review', time: '1-2 wks prior' },
      { num: 3, title: 'Auto-Confirm', desc: 'User confirms (or skips)', time: 'User decides' },
      { num: 4, title: 'Execution', desc: 'Scheduled perfectly', time: 'At right time' }
    ],
    autoBooked: 5,
    avgTime: '⏰ Optimal timing',
    status: 'active'
  }
]

function BookingFlowCard({ flow, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="service-card"
    >
      <div onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '2.5rem' }}>{flow.icon}</span>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: 'var(--text-100)', fontSize: '1.1rem', fontWeight: 700 }}>
              {flow.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginTop: '0.25rem' }}>
              {flow.description}
            </p>
          </div>
          <span className="badge badge-cyan" style={{ whiteSpace: 'nowrap' }}>
            ✓ Active
          </span>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <div>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
              Bookings This Month
            </p>
            <p style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)', marginTop: '0.25rem' }}>
              {flow.autoBooked}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-400)', textTransform: 'uppercase', fontWeight: 700 }}>
              Avg Response
            </p>
            <p style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)', marginTop: '0.25rem' }}>
              {flow.avgTime}
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Steps */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}
        >
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-200)', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Booking Flow:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {flow.steps.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 700
                  }}>
                    {step.num}
                  </div>
                  {i < flow.steps.length - 1 && (
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-400)' }}>→</div>
                  )}
                </div>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-100)' }}>
                  {step.title}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-300)' }}>
                  {step.desc}
                </p>
                <p style={{ fontSize: '0.7rem', color: 'var(--accent-2)', fontWeight: 600 }}>
                  ⏱️ {step.time}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

function RecentAutoBooking({ booking, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="service-card"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ color: 'var(--text-100)', fontWeight: 700, marginBottom: '0.5rem' }}>
            {booking.service}
          </h4>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-300)' }}>
            <span>📍 {booking.location}</span>
            <span>👤 {booking.pro}</span>
          </div>
          <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
            <span className="badge badge-cyan">{booking.status}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginLeft: 'auto' }}>
              {booking.date}
            </span>
          </div>
        </div>
        <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent)' }}>
          {booking.cost}
        </span>
      </div>
    </motion.div>
  )
}

export default function AutoBooking() {
  useScrollReveal()

  const recentBookings = [
    { id: 1, service: 'Refrigerator Emergency Check', location: 'Bangalore', pro: 'TechFix Pro', status: 'In Progress', date: 'Today 2-3 PM', cost: '₹450' },
    { id: 2, service: 'AC Quarterly Maintenance', location: 'Whitefield', pro: 'CoolAir Experts', status: 'Scheduled', date: 'Mar 15, 10 AM', cost: '₹650' },
    { id: 3, service: 'Water Heater De-scale', location: 'Koramangala', pro: 'Home Genius', status: 'Completed', date: 'Mar 5', cost: '₹800' }
  ]

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />

      <div className="section">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">🤖 Set & Forget</p>
          <h1 className="section-title">
            Auto-Booking Mode
          </h1>
          <p className="section-sub">
            Enable autonomous service booking. The app detects problems, finds the best provider, and schedules services—you just get notified.
          </p>
        </div>

        {/* Booking Flows */}
        <div className="reveal delay-1" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-100)', marginBottom: '1.5rem' }}>
            Three Auto-Booking Modes
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {bookingFlows.map((flow, idx) => (
              <BookingFlowCard key={flow.id} flow={flow} index={idx} />
            ))}
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="reveal delay-2">
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-100)', marginBottom: '1.5rem' }}>
            Recent Auto-Bookings
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
            {recentBookings.map((booking, idx) => (
              <RecentAutoBooking key={booking.id} booking={booking} index={idx} />
            ))}
          </div>
        </div>

        {/* Dashboard Link */}
        <div className="reveal delay-3" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <button style={{
            padding: '1rem 2rem',
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--r-md)',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            ⚙️ Configure Auto-Booking Settings
          </button>
        </div>
      </div>
    </div>
  )
}
