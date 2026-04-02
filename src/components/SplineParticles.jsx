import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

export default function SplineParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Hide Spline logo and watermark with comprehensive selectors
    const style = document.createElement('style')
    style.id = 'spline-hide-logo'
    style.textContent = `
      /* Hide Spline branding and UI elements */
      [role="button"][aria-label*="Spline"],
      [aria-label*="Spline"],
      [aria-label*="logo"],
      [aria-label*="Logo"],
      .spline-watermark,
      .spline-logo,
      .spline-branding,
      [data-testid*="logo"],
      [data-testid*="watermark"],
      [data-testid*="branding"],
      svg[aria-label*="Spline"],
      button[aria-label*="Spline"],
      img[src*="spline"],
      .spline-ui-overlay {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Hide any footer or credits */
      [class*="footer"],
      [class*="credit"],
      [class*="powered"],
      a[href*="spline"] {
        display: none !important;
      }
    `
    document.head.appendChild(style)
    
    // Also hide via iframe document if accessible
    setTimeout(() => {
      try {
        const iframes = document.querySelectorAll('iframe')
        iframes.forEach(iframe => {
          try {
            if (iframe.contentDocument) {
              const iframeStyle = iframe.contentDocument.createElement('style')
              iframeStyle.textContent = `
                button, [role="button"], svg, .watermark, .logo, .branding {
                  display: none !important;
                }
              `
              iframe.contentDocument.head.appendChild(iframeStyle)
            }
          } catch (e) {
            // Cross-origin iframe, silently fail
          }
        })
      } catch (e) {
        // Silently handle errors
      }
    }, 1000)
    
    return () => {
      const styleEl = document.getElementById('spline-hide-logo')
      if (styleEl) document.head.removeChild(styleEl)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'transparent'
      }}
    >
      <Spline scene="https://prod.spline.design/nweyVqaxOiueRyjJ/scene.splinecode" />
    </div>
  )
}


