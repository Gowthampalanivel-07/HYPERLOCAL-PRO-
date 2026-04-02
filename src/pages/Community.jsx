import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Heart, MessageCircle, Share2, Star, Trophy, Users, ThumbsUp } from 'lucide-react'

const feedPosts = [
  { id: 1, user: 'Raj Kumar', loc: 'Velachery', avatar: 'RK', time: '2 hrs ago', service: 'AC Repair', pro: 'Suresh A/C Pro', rating: 5, text: 'AC dead for 3 days. Auto-booking kicked in and Suresh showed up in 18 minutes! 🙌', likes: 24, badge: 'badge-cyan' },
  { id: 2, user: 'Divya M.', loc: 'Adyar', avatar: 'DM', time: '5 hrs ago', service: 'Deep Clean', pro: 'CleanSphere Team', rating: 5, text: 'Festival cleaning package for Pongal — floors, fans, kitchen. Health score jumped 8 pts! 🎉', likes: 41, badge: 'badge-green' },
  { id: 3, user: 'Karthik S.', loc: 'Porur', avatar: 'KS', time: '1 day ago', service: 'Plumbing', pro: 'QuickFix', rating: 4, text: 'Group booking with 4 neighbors — ₹180 per house for drain cleaning. Genius feature! 💰', likes: 67, badge: 'badge-accent' },
  { id: 4, user: 'Meena R.', loc: 'T. Nagar', avatar: 'MR', time: '2 days ago', service: 'Pest Control', pro: 'EcoGuard', rating: 5, text: 'AI matched me to a pet-safe service automatically. Transparent pricing + live tracking. 🐾', likes: 89, badge: 'badge-rose' },
]

const topPros = [
  { rank: 1, name: 'Suresh K.', spec: 'Electrician', rating: 4.98, jobs: 1240 },
  { rank: 2, name: 'Ramesh A.', spec: 'Plumbing',    rating: 4.96, jobs: 980  },
  { rank: 3, name: 'Pradeep V.',spec: 'AC Repair',   rating: 4.94, jobs: 856  },
  { rank: 4, name: 'Senthil M.',spec: 'Deep Clean',  rating: 4.91, jobs: 712  },
  { rank: 5, name: 'Vijay K.', spec: 'Carpentry',   rating: 4.88, jobs: 634  },
]

const topUsers = [
  { rank: 1, name: 'Kavitha S.', city: 'Bangalore', pts: 4200 },
  { rank: 2, name: 'Arjun M.',   city: 'Mumbai',    pts: 3800 },
  { rank: 3, name: 'Priya R.',   city: 'Chennai',   pts: 3100 },
  { rank: 4, name: 'Anil V.',    city: 'Delhi',     pts: 2750 },
  { rank: 5, name: 'Sneha T.',   city: 'Pune',      pts: 2400 },
]

const groupDeals = [
  { id: 1, service: 'Terrace Waterproofing', joined: 3, needed: 5, discount: '35%', deadline: '2 days left', icon: '🏠' },
  { id: 2, service: 'Solar Panel Cleaning',  joined: 6, needed: 8, discount: '28%', deadline: '5 days left', icon: '☀️' },
  { id: 3, service: 'CCTV Installation',     joined: 2, needed: 6, discount: '40%', deadline: '3 days left', icon: '📹' },
]

export default function Community() {
  useScrollReveal()
  const [likes, setLikes] = useState({})
  const [activeLeader, setActiveLeader] = useState('pros')
  const toggleLike = (id) => setLikes(p => ({ ...p, [id]: !p[id] }))

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section" style={{ paddingTop: '2rem' }}>
        <div className="reveal" style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Social Layer</p>
          <h2 className="section-title">Your <span className="gradient-text">Neighborhood Network</span></h2>
          <p className="section-sub">Real-time service feed, group discounts, and local leaderboards.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '2rem', alignItems: 'start' }}>
          {/* Feed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div className="pulse-dot" />
              <h3 style={{ fontSize: '1rem' }}>Live Service Feed</h3>
              <span className="badge badge-cyan" style={{ marginLeft: 'auto' }}><Users size={10} /> 128 active</span>
            </div>

            {feedPosts.map((post, i) => (
              <div key={post.id} className={`feed-post reveal delay-${(i % 3) + 1}`}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div className="avatar" style={{ width: 40, height: 40, fontSize: '0.82rem' }}>{post.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-100)' }}>{post.user}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-400)' }}>📍 {post.loc} · {post.time}</p>
                  </div>
                  <span className={`badge ${post.badge}`}>{post.service}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-200)', marginBottom: '0.75rem' }}>{post.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', borderRadius: 'var(--r-md)', background: 'var(--surface-2)', marginBottom: '0.75rem', fontSize: '0.8rem' }}>
                  <span style={{ color: 'var(--text-300)' }}>Pro:</span>
                  <span style={{ color: 'var(--text-100)', fontWeight: 600 }}>{post.pro}</span>
                  <div style={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
                    {[...Array(post.rating)].map((_, j) => <Star key={j} size={11} fill="var(--amber)" color="var(--amber)" />)}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button id={`like-${post.id}`} onClick={() => toggleLike(post.id)} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', fontSize: '0.82rem', color: likes[post.id] ? 'var(--accent-2)' : 'var(--text-400)', cursor: 'none' }}>
                    <Heart size={14} fill={likes[post.id] ? 'currentColor' : 'none'} />
                    {post.likes + (likes[post.id] ? 1 : 0)}
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', fontSize: '0.82rem', color: 'var(--text-400)', cursor: 'none' }}>
                    <MessageCircle size={14} />
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', fontSize: '0.82rem', color: 'var(--text-400)', cursor: 'none', marginLeft: 'auto' }}>
                    <Share2 size={14} /> Share
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Leaderboard */}
            <div className="service-card reveal delay-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
                <Trophy size={18} color="var(--amber)" />
                <h3 style={{ fontSize: '1rem' }}>Neighborhood Leaders</h3>
              </div>
              <div className="tabs" style={{ marginBottom: '1rem' }}>
                {['pros', 'users'].map(t => (
                  <button key={t} className={`tab ${activeLeader === t ? 'active' : ''}`} onClick={() => setActiveLeader(t)} id={`leader-tab-${t}`} style={{ background: 'none', border: 'none', fontFamily: 'inherit', fontSize: '0.8rem' }}>
                    {t === 'pros' ? '🔧 Pros' : '👤 Users'}
                  </button>
                ))}
              </div>
              {(activeLeader === 'pros' ? topPros : topUsers).map((item, i) => (
                <div key={i} className="lb-row">
                  <span className={`lb-rank ${item.rank <= 3 ? 'top' : ''}`}>{item.rank <= 3 ? ['🥇','🥈','🥉'][item.rank-1] : item.rank}</span>
                  <div className="avatar" style={{ width: 32, height: 32, fontSize: '0.7rem' }}>{item.name.split(' ').map(w => w[0]).join('')}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-100)' }}>{item.name}</p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-400)' }}>{activeLeader === 'pros' ? `${item.spec} · ${item.jobs} jobs` : `${item.city} · ${item.pts} pts`}</p>
                  </div>
                  {activeLeader === 'pros' && <span style={{ fontSize: '0.78rem', color: 'var(--amber)', fontWeight: 700 }}>★{item.rating}</span>}
                </div>
              ))}
            </div>

            {/* Group Deals */}
            <div className="service-card reveal delay-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
                <ThumbsUp size={18} color="var(--emerald)" />
                <h3 style={{ fontSize: '1rem' }}>Group Booking Deals</h3>
              </div>
              {groupDeals.map(deal => (
                <div key={deal.id} style={{ padding: '0.85rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)', background: 'var(--surface)', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{deal.icon}</span>
                    <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-100)', flex: 1 }}>{deal.service}</p>
                    <span className="badge badge-green">{deal.discount} off</span>
                  </div>
                  <div className="progress-bar" style={{ marginBottom: '0.4rem' }}>
                    <div className="progress-fill" style={{ width: `${(deal.joined / deal.needed) * 100}%` }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-400)' }}>{deal.joined}/{deal.needed} joined</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--amber)' }}>{deal.deadline}</span>
                  </div>
                  <button className="mag-btn" style={{ width: '100%', fontSize: '0.78rem', padding: '0.4rem', justifyContent: 'center' }} id={`group-join-${deal.id}`}>Join Group Deal</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
