import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Star, MapPin, Briefcase, TrendingUp, Bot, Award, Clock } from 'lucide-react'

const professionals = [
  { id: 1, name: 'Suresh Kumar', spec: 'Senior Electrician', loc: 'Velachery', rating: 4.98, jobs: 1240, resp: '8 min', credit: 92, avatar: 'SK', badge: 'Elite Pro', tags: ['Wiring','Panel','Solar'], online: true },
  { id: 2, name: 'Ramesh Pillai', spec: 'Master Plumber', loc: 'Adyar', rating: 4.96, jobs: 980, resp: '12 min', credit: 88, avatar: 'RP', badge: 'Top Rated', tags: ['Pipes','Drainage','Bore'], online: true },
  { id: 3, name: 'Pradeep A/C', spec: 'AC & Refrigeration', loc: 'Anna Nagar', rating: 4.94, jobs: 856, resp: '20 min', credit: 85, avatar: 'PA', badge: 'Verified', tags: ['AC','Fridge','VRF'], online: false },
  { id: 4, name: 'Senthil M.', spec: 'Deep Clean Expert', loc: 'Porur', rating: 4.91, jobs: 712, resp: '25 min', credit: 80, avatar: 'SM', badge: 'Verified', tags: ['Sofa','Kitchen','Post-construction'], online: true },
]

const personalityTypes = [
  { id: 'silent', label: '🤫 Fast & Silent', desc: 'Gets the job done quickly, no small talk' },
  { id: 'friendly', label: '😊 Friendly & Talkative', desc: 'Great communicator, explains everything' },
  { id: 'expert', label: '🎓 Premium Expert', desc: 'Certified, thorough, uses best tools' },
]

const aiJobSteps = [
  { step: 1, title: 'Diagnose Issue', desc: 'AI scans appliance data and suggests root cause', icon: '🔍' },
  { step: 2, title: 'Tools Needed', desc: 'Auto-generates list of tools & spare parts required', icon: '🔧' },
  { step: 3, title: 'Step-by-Step Guide', desc: 'Repair walkthrough with AR overlay support', icon: '📱' },
  { step: 4, title: 'Quality Check', desc: 'Post-job AI verification with photo proof', icon: '✅' },
]

export default function Professionals() {
  useScrollReveal()
  const [personality, setPersonality] = useState('expert')

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <div className="ambient" />
      <div className="section" style={{ paddingTop: '2rem' }}>

        <div className="reveal" style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Pro Superpowers</p>
          <h2 className="section-title">Find Your <span className="gradient-text">Perfect Professional</span></h2>
          <p className="section-sub">AI-matched, personality-filtered, credit-scored professionals near you.</p>
        </div>

        {/* Personality matching */}
        <div className="service-card reveal delay-1" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <Bot size={20} color="var(--accent-2)" />
            <h3 style={{ fontSize: '1rem' }}>Personality Matching AI</h3>
            <span className="badge badge-accent" style={{ marginLeft: 'auto' }}>🧠 AI Powered</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-300)', marginBottom: '1.2rem' }}>
            Choose your preferred working style and we'll match you to the perfect professional.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem' }}>
            {personalityTypes.map(p => (
              <button
                key={p.id} id={`personality-${p.id}`}
                onClick={() => setPersonality(p.id)}
                style={{
                  padding: '1rem', borderRadius: 'var(--r-lg)', border: `1px solid ${personality === p.id ? 'var(--accent)' : 'var(--border)'}`,
                  background: personality === p.id ? 'rgba(255, 255, 255, 0.08)' : 'var(--surface)',
                  textAlign: 'left', transition: 'all 0.25s ease', cursor: 'none'
                }}
              >
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-100)', marginBottom: '0.3rem' }}>{p.label}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-400)' }}>{p.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Pro cards */}
        <div className="feature-grid" style={{ marginBottom: '2rem' }}>
          {professionals.map((pro, i) => (
            <div key={pro.id} className={`service-card reveal delay-${(i % 3) + 1}`}>
              {/* Header */}
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ position: 'relative' }}>
                  <div className="avatar" style={{ width: 52, height: 52, fontSize: '1rem' }}>{pro.avatar}</div>
                  {pro.online && <div className="pulse-dot" style={{ position: 'absolute', bottom: 2, right: 2, width: 10, height: 10 }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, color: 'var(--text-100)', marginBottom: '2px' }}>{pro.name}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-400)', marginBottom: '4px' }}>{pro.spec}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={10} color="var(--text-400)" />
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-400)' }}>{pro.loc}</span>
                  </div>
                </div>
                <span className="badge badge-accent" style={{ fontSize: '0.65rem', alignSelf: 'flex-start' }}>{pro.badge}</span>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                {[
                  { label: 'Rating', val: `★${pro.rating}` },
                  { label: 'Jobs', val: pro.jobs.toLocaleString() },
                  { label: 'Response', val: pro.resp },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center', padding: '0.5rem', borderRadius: 'var(--r-sm)', background: 'var(--surface-2)' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-100)' }}>{s.val}</p>
                    <p style={{ fontSize: '0.68rem', color: 'var(--text-400)' }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Credit score */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-300)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Award size={11} /> Pro Credit Score
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--emerald)', fontWeight: 700 }}>{pro.credit}/100</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${pro.credit}%`, background: 'linear-gradient(to right, var(--emerald), #34d399)' }} />
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {pro.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <button className="mag-btn" style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
                id={`book-pro-${pro.id}`}>
                Book {pro.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

        <div className="divider" />

        {/* AI Job Assistant */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className="section-label reveal">For Professionals</p>
            <h2 className="section-title reveal delay-1">AI <span className="gradient-text">Job Assistant</span></h2>
            <p className="section-sub reveal delay-2" style={{ margin: '0 auto' }}>
              Works like a co-pilot. Suggests tools, repair steps, and quality checks in real-time.
            </p>
          </div>
          <div className="grid-4">
            {aiJobSteps.map((s, i) => (
              <div key={s.step} className={`service-card reveal-scale delay-${i + 1}`} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', fontSize: '0.7rem', fontWeight: 800 }}>{s.step}</div>
                <p style={{ fontWeight: 700, color: 'var(--text-100)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>{s.title}</p>
                <p style={{ fontSize: '0.8rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
