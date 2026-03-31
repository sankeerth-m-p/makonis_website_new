import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import useAppRoute from '../routing/useAppRoute.jsx'

const PageTransitionContext = createContext(null)

let transitionSeed = 0

function PageTransitionProvider({ children }) {
  const { pathname, navigate } = useAppRoute()
  const [transition, setTransition] = useState(null)
  const frameRef = useRef(null)

  const clearTransition = useCallback(() => {
    setTransition(null)
  }, [])

  const setTransitionPhase = useCallback((phase) => {
    setTransition((current) =>
      current ? { ...current, phase } : current,
    )
  }, [])

  const beginPageTransition = useCallback(
    ({ href, rect, backgroundColor, borderRadius }) => {
      if (!href || !rect || transition || href === pathname) {
        return
      }

      if (frameRef.current != null) {
        window.cancelAnimationFrame(frameRef.current)
      }

      const nextId = transitionSeed + 1
      transitionSeed = nextId

      setTransition({
        id: nextId,
        href,
        rect,
        backgroundColor: backgroundColor || '#ffffff',
        borderRadius: borderRadius || '16px',
        phase: 'initial',
      })

      frameRef.current = window.requestAnimationFrame(() => {
        navigate(href)
        setTransitionPhase('expanding')
        frameRef.current = null
      })
    },
    [navigate, pathname, setTransitionPhase, transition],
  )

  useEffect(() => () => {
    if (frameRef.current != null) {
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const value = useMemo(
    () => ({
      transition,
      beginPageTransition,
      clearTransition,
      setTransitionPhase,
      isTransitioning: Boolean(transition),
    }),
    [beginPageTransition, clearTransition, setTransitionPhase, transition],
  )

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
    </PageTransitionContext.Provider>
  )
}

export { PageTransitionContext, PageTransitionProvider }
