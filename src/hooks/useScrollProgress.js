import { useEffect, useState } from 'react'

export default function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(nextProgress)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollProgress
}
