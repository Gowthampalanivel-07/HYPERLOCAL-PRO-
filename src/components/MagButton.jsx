import { useEffect, useRef } from 'react'

/**
 * Magnetic pull effect on hover.
 * strength: 0–1, how far the element follows the cursor.
 */
export default function MagButton({ children, className = '', strength = 0.3, onClick, id, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      const rect   = el.getBoundingClientRect()
      const cx     = rect.left + rect.width / 2
      const cy     = rect.top  + rect.height / 2
      const dx     = (e.clientX - cx) * strength
      const dy     = (e.clientY - cy) * strength
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }

    const handleLeave = () => {
      el.style.transform = 'translate(0,0)'
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength])

  return (
    <button
      ref={ref}
      className={`mag-btn ${className}`}
      onClick={onClick}
      id={id}
      style={{ transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease' }}
      {...rest}
    >
      {children}
    </button>
  )
}
