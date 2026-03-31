import { useEffect, useState } from 'react'
import useAppRoute from '../routing/useAppRoute.jsx'
import usePageTransition from './usePageTransition.jsx'

function TransitionOverlay() {
  const { pathname } = useAppRoute()
  const { transition, clearTransition, setTransitionPhase } = usePageTransition()
  const [isFadingOut, setIsFadingOut] = useState(false)
  const transitionId = transition?.id
  const transitionHref = transition?.href
  const transitionPhase = transition?.phase

  useEffect(() => {
    if (!transitionId || transitionPhase !== 'initial') {
      return undefined
    }

    const frame = window.requestAnimationFrame(() => {
      setTransitionPhase('expanding')
    })

    return () => window.cancelAnimationFrame(frame)
  }, [setTransitionPhase, transitionId, transitionPhase])

  useEffect(() => {
    if (!transitionId || pathname !== transitionHref || transitionPhase !== 'expanding') {
      return undefined
    }

    const fadeTimer = window.setTimeout(() => {
      setIsFadingOut(true)
    }, 140)

    const clearTimer = window.setTimeout(() => {
      clearTransition()
      setIsFadingOut(false)
    }, 520)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(clearTimer)
    }
  }, [clearTransition, pathname, transitionId, transitionHref, transitionPhase])

  if (!transition) {
    return null
  }

  const { rect, backgroundColor, borderRadius, phase } = transition
  const isExpanded = phase !== 'initial'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[70]"
      style={{
        top: isExpanded ? '0px' : `${rect.top}px`,
        left: isExpanded ? '0px' : `${rect.left}px`,
        width: isExpanded ? '100vw' : `${rect.width}px`,
        height: isExpanded ? '100vh' : `${rect.height}px`,
        borderRadius: isExpanded ? '0px' : borderRadius,
        opacity: isFadingOut ? 0 : 1,
        transition: 'top 650ms cubic-bezier(0.22, 1, 0.36, 1), left 650ms cubic-bezier(0.22, 1, 0.36, 1), width 650ms cubic-bezier(0.22, 1, 0.36, 1), height 650ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease',
        backgroundColor,
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.12)',
        overflow: 'hidden',
      }}
    />
  )
}

export default TransitionOverlay
