import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import {
  startViewTransition,
  supportsViewTransitions,
} from '@/utils/viewTransition'

interface TransitionLinkProps {
  to: string
  className?: string
  children: React.ReactNode
  onPrefetch?: () => void
}

/**
 * Link component with View Transitions API support
 * Provides smooth animated navigation and optional prefetch on hover
 */
export const TransitionLink: React.FC<TransitionLinkProps> = ({
  to,
  className,
  children,
  onPrefetch,
}) => {
  const history = useHistory()

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      if (supportsViewTransitions()) {
        startViewTransition(() => {
          history.push(to)
        })
      } else {
        history.push(to)
      }
    },
    [history, to],
  )

  const handleMouseEnter = useCallback(() => {
    onPrefetch?.()
  }, [onPrefetch])

  return (
    <a
      className={className}
      href={to}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </a>
  )
}
