import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import CustomCursor   from './components/CustomCursor'
import Navbar         from './components/Navbar'
import Particles      from './components/Particles'
import { LanguageProvider } from './contexts/LanguageContext'
import Home           from './pages/Home'
import Dashboard      from './pages/Dashboard'
import Community      from './pages/Community'
import Professionals  from './pages/Professionals'
import Trust          from './pages/Trust'
import Gamification   from './pages/Gamification'

/* Tier 1: Predictive & Auto-Booking */
import PredictiveServices from './pages/PredictiveServices'
import AutoBooking from './pages/AutoBooking'

/* Tier 2: Personalization & Social */
import Personalization from './pages/Personalization'
import VisualIntelligence from './pages/VisualIntelligence'
import CommunityHub from './pages/CommunityHub'

/* Tier 3: Professional & Advanced */
import ProfessionalTools from './pages/ProfessionalTools'
import TrustRevolution from './pages/TrustRevolution'
import SpeedEfficiency from './pages/SpeedEfficiency'

/* Tier 4: Ecosystem & AI */
import EcosystemMarketplace from './pages/EcosystemMarketplace'
import GamificationRewards from './pages/GamificationRewards'
import AIMegaFeatures from './pages/AIMegaFeatures'
import IndiaSpecificFeatures from './pages/IndiaSpecificFeatures'

/* Page transition variants */
const pageVariants = {
  initial:  { opacity: 0, y: 18 },
  animate:  { opacity: 1, y: 0,  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit:     { opacity: 0, y: -12, transition: { duration: 0.25 } },
}

function AnimatedPage({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

/* Voice command mock — floating AI button */
function AIFab() {
  const [listening, setListening] = useState(false)

  const handleVoice = () => {
    setListening(true)
    setTimeout(() => setListening(false), 2500)
  }

  return (
    <button
      id="ai-voice-fab"
      className="ai-fab"
      onClick={handleVoice}
      title="Voice AI: say &quot;Fix my leaking tap tomorrow&quot;"
      style={{ transform: listening ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s var(--t-spring)' }}
    >
      {listening ? '🎙️' : '🤖'}
    </button>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <LanguageProvider>
      <Particles count={25} />
      <CustomCursor />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Main pages */}
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/dashboard" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
          
          {/* Tier 1: Predictive & Auto-Booking */}
          <Route path="/predictive" element={<AnimatedPage><PredictiveServices /></AnimatedPage>} />
          <Route path="/auto-booking" element={<AnimatedPage><AutoBooking /></AnimatedPage>} />
          
          {/* Tier 2: Personalization & Visual */}
          <Route path="/personalization" element={<AnimatedPage><Personalization /></AnimatedPage>} />
          <Route path="/visual-intelligence" element={<AnimatedPage><VisualIntelligence /></AnimatedPage>} />
          <Route path="/community" element={<AnimatedPage><CommunityHub /></AnimatedPage>} />
          
          {/* Tier 3: Professional & Trust */}
          <Route path="/professional-tools" element={<AnimatedPage><ProfessionalTools /></AnimatedPage>} />
          <Route path="/trust" element={<AnimatedPage><TrustRevolution /></AnimatedPage>} />
          <Route path="/speed-efficiency" element={<AnimatedPage><SpeedEfficiency /></AnimatedPage>} />
          
          {/* Tier 4: Ecosystem & AI */}
          <Route path="/marketplace" element={<AnimatedPage><EcosystemMarketplace /></AnimatedPage>} />
          <Route path="/gamification" element={<AnimatedPage><GamificationRewards /></AnimatedPage>} />
          <Route path="/ai-features" element={<AnimatedPage><AIMegaFeatures /></AnimatedPage>} />
          <Route path="/india-features" element={<AnimatedPage><IndiaSpecificFeatures /></AnimatedPage>} />
          
          {/* Legacy routes (for compatibility) */}
          <Route path="/professionals" element={<AnimatedPage><Professionals /></AnimatedPage>} />
          <Route path="/legacy-community" element={<AnimatedPage><Community /></AnimatedPage>} />
          <Route path="/legacy-trust" element={<AnimatedPage><Trust /></AnimatedPage>} />
          <Route path="/legacy-gamification" element={<AnimatedPage><Gamification /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>

      <AIFab />
    </LanguageProvider>
  )
}
