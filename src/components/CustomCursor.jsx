import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const rafRef  = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current

    const moveMouse = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      ringRef.current.style.left = ring.current.x + 'px'
      ringRef.current.style.top  = ring.current.y + 'px'
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => document.body.classList.add('cursor-hover')
    const onLeave = () => document.body.classList.remove('cursor-hover')

    window.addEventListener('mousemove', moveMouse)
    document.querySelectorAll('a,button,.mag-btn,.mag-btn-outline,.service-card,.tab,.toggle-switch').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', moveMouse)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"  ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
