import { useEffect, useState } from 'react'

export default function Particles({ count = 30 }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() > 0.7 ? 'lg' : Math.random() > 0.3 ? 'sm' : '',
      duration: 6 + Math.random() * 6,
      delay: i * 0.1,
      type: Math.random() > 0.6 ? 'float-slow' : Math.random() > 0.3 ? 'drift' : 'float',
      glow: Math.random() > 0.5
    }))
    setParticles(newParticles)
  }, [count])

  return (
    <div className="particle-container">
      {particles.map(p => (
        <div
          key={p.id}
          className={`particle particle-${p.type} ${p.size ? `particle-${p.size}` : ''} ${p.glow ? 'particle-glow' : ''}`}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}
    </div>
  )
}
