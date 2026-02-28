import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

function Header({ isProjectPage, homeHref = '#/' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = isProjectPage ? [{ href: homeHref, label: 'Back Home' }] : navLinks

  return (
    <header className="topbar">
      <a href="#/" className="brand">
        Shavin<span>.dev</span>
      </a>
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setIsMenuOpen((state) => !state)}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
      >
        Menu
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
