import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { startViewTransition } from '@/utils/viewTransition'

/**
 * Hook for navigation with View Transitions API
 * Provides smooth animated transitions between pages
 */
export const useViewTransition = () => {
  const history = useHistory()

  const navigate = useCallback(
    (to: string, options?: { replace?: boolean }) => {
      startViewTransition(() => {
        if (options?.replace) {
          history.replace(to)
        } else {
          history.push(to)
        }
      })
    },
    [history],
  )

  const goBack = useCallback(() => {
    startViewTransition(() => {
      history.goBack()
    })
  }, [history])

  return { navigate, goBack }
}
