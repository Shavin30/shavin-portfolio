import { useEffect } from 'react'

export default function useRevealOnScroll(triggerKey) {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [triggerKey])
}
