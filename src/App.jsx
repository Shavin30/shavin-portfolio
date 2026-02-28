import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ProjectsPage from './components/ProjectsPage'
import JourneySection from './components/JourneySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ProjectDetailPage from './components/ProjectDetailPage'
import { skillGroups } from './data/skillsData'
import { projects } from './data/projectsData'
import { timeline } from './data/timelineData'
import useHashRoute from './hooks/useHashRoute'
import useCustomCursor from './hooks/useCustomCursor'
import useScrollProgress from './hooks/useScrollProgress'
import useRevealOnScroll from './hooks/useRevealOnScroll'

const LOADER_DURATION_MS = 1200
const ORB_COUNT = 6

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const route = useHashRoute()
  const scrollProgress = useScrollProgress()
  const {
    cursorHover,
    cursorPressed,
    cursorVisible,
    spotlightRef,
    ringRef,
    dotRef,
  } = useCustomCursor()
  useRevealOnScroll(route)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADER_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  const activeProject =
    route.page === 'project'
      ? projects.find((project) => project.slug === route.slug)
      : null
  const isProjectDetail = route.page === 'project' && Boolean(activeProject)

  return (
    <div className="portfolio">
      {isLoading && (
        <div className="loader">
          <div className="loader-line" />
          <p>Loading Portfolio</p>
        </div>
      )}
      <div className="scroll-meter">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className={`spotlight ${cursorVisible ? '' : 'is-hidden'}`} ref={spotlightRef} />
      <div
        className={`cursor-ring ${cursorVisible ? '' : 'is-hidden'} ${cursorHover ? 'is-hover' : ''} ${cursorPressed ? 'is-pressed' : ''}`}
        ref={ringRef}
      />
      <div
        className={`cursor-dot ${cursorVisible ? '' : 'is-hidden'} ${cursorPressed ? 'is-pressed' : ''}`}
        ref={dotRef}
      />
      <div className="aurora-layer" />
      <div className="floating-orbs" aria-hidden="true">
        {[...Array(ORB_COUNT)].map((_, index) => (
          <span key={`orb-${index}`} />
        ))}
      </div>
      {!isLoading && (
        <Header isProjectPage={route.page === 'project'} homeHref="#/" />
      )}
      <main className="content">
        {isProjectDetail ? (
          <ProjectDetailPage project={activeProject} />
        ) : route.page === 'projects' ? (
          <ProjectsPage projects={projects} />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <SkillsSection skillGroups={skillGroups} />
            <ProjectsSection projects={projects} />
            <JourneySection timeline={timeline} />
            <ContactSection />
          </>
        )}
      </main>
      <button
        type="button"
        className={`scroll-top ${scrollProgress > 18 ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        Top
      </button>
      <Footer />
    </div>
  )
}

export default App
