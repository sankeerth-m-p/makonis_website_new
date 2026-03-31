import { useContext } from 'react'
import { PageTransitionContext } from './PageTransitionContext.jsx'

function usePageTransition() {
  const context = useContext(PageTransitionContext)

  if (!context) {
    throw new Error('usePageTransition must be used within PageTransitionProvider')
  }

  return context
}

export default usePageTransition
