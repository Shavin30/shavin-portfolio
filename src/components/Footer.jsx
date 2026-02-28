import SocialLinks from './SocialLinks'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-head">
          <p className="footer-brand">Shavin de Silva</p>
          <p className="footer-note">Comp Sci Undergrad</p>
        </div>
        <SocialLinks className="footer-links" linkClassName="icon-link" />
      </div>
    </footer>
  )
}

export default Footer
