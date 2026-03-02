import SocialLinks from './SocialLinks'

function HeroSection() {
  const cvUrl = `${import.meta.env.BASE_URL}Shavin-De-Silva-CV.pdf`

  return (
    <section className="hero-shell reveal">
      <div className="hero-main">
        <div className="hero-content">
          <p className="kicker">Computer Science Undergraduate</p>
          <h1>
            <span className="accent">Shavin</span> De Silva
          </h1>
          <p className="hero-subtitle">
           Turn real-world problems into clean, efficient, and meaningful digital solutions.
          </p>
          <div className="hero-console">
            <span className="prompt">$</span> status --dev mode
            --ready to build
          </div>
          <div className="hero-actions hero-actions-center">
            <a className="btn btn-primary hero-download-btn" href={cvUrl} download>
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
