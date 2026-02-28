import SocialLinks from './SocialLinks'

function HeroSection() {
  return (
    <section className="hero-shell reveal">
      <div className="hero-main">
        <div className="hero-content">
          <p className="kicker">Computer Science Undergraduate</p>
          <h1>
            <span className="accent">Shavin</span> De Silva
          </h1>
          <p className="hero-subtitle">
            Building full-stack products with crisp UX, thoughtful architecture,
            and production-ready delivery.
          </p>
          <div className="hero-console">
            <span className="prompt">$</span> status --dev mode
            --ready to build
          </div>
          <div className="hero-actions hero-actions-center">
            <a className="btn btn-primary hero-download-btn" href="/Shavin-De-Silva-CV.pdf" download>
              Download CV
            </a>
          </div>
          <SocialLinks className="hero-social" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
