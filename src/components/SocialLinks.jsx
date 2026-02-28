// Keep social destinations in one place so hero/footer stay consistent.
const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Shavin30',
    iconClass: 'ri-github-fill',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shavin-de-silva',
    iconClass: 'ri-linkedin-box-fill',
    external: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shav.in._?igsh=N25jazhpZjVnM3Rz',
    iconClass: 'ri-instagram-fill',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:shavindesilva360@gmail.com',
    iconClass: 'ri-mail-fill',
    external: false,
  },
]

function SocialLinks({ className, linkClassName = '' }) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className={linkClassName}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
        >
          <i className={item.iconClass} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
