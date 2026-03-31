import { useContext } from 'react'
import { AppRouteContext } from './AppRouteContext.jsx'

function useAppRoute() {
  const context = useContext(AppRouteContext)

  if (!context) {
    throw new Error('useAppRoute must be used within AppRouteProvider')
  }

  return context
}

export default useAppRoute
