import { useEffect, useState } from 'react'

function parseRouteFromHash() {
  const hash = window.location.hash.replace('#', '')
  if (hash.startsWith('/project/')) {
    const slug = hash.split('/project/')[1]
    return { page: 'project', slug }
  }
  if (hash === '/projects') {
    return { page: 'projects' }
  }
  return { page: 'home' }
}

export default function useHashRoute() {
  const [route, setRoute] = useState(parseRouteFromHash)

  useEffect(() => {
    const onHashChange = () => setRoute(parseRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}
