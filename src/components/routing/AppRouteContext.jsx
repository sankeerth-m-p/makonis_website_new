import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

const AppRouteContext = createContext(null)

function getCurrentPathname() {
  if (typeof window === 'undefined') {
    return '/'
  }

  return window.location.pathname || '/'
}

function AppRouteProvider({ children }) {
  const [pathname, setPathname] = useState(getCurrentPathname)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPathname())
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to, options = {}) => {
    const nextPath = to || '/'

    if (nextPath === getCurrentPathname()) {
      return
    }

    const { replace = false } = options

    if (replace) {
      window.history.replaceState({}, '', nextPath)
    } else {
      window.history.pushState({}, '', nextPath)
    }

    setPathname(nextPath)
    window.scrollTo(0, 0)
  }, [])

  const value = useMemo(
    () => ({
      pathname,
      navigate,
    }),
    [navigate, pathname],
  )

  return <AppRouteContext.Provider value={value}>{children}</AppRouteContext.Provider>
}

export { AppRouteContext, AppRouteProvider }
