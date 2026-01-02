import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import {
  startViewTransition,
  supportsViewTransitions,
} from '@/utils/viewTransition'

interface TransitionLinkProps {
  activeClassName?: string
  children: React.ReactNode
  className?: string
  onPrefetch?: () => void
  to: string
}

/**
 * Link component with View Transitions API support
 * Provides smooth animated navigation and optional prefetch on hover
 */
export const TransitionLink: React.FC<TransitionLinkProps> = ({
  activeClassName,
  children,
  className,
  onPrefetch,
  to,
}) => {
  const history = useHistory()
  const location = useLocation()

  const normalizedTo = to.replace(/\/\d+$/, '')
  const normalizedPath = location.pathname.replace(/\/\d+$/, '')

  const isActive =
    to === '/'
      ? location.pathname === '/'
      : normalizedPath === normalizedTo ||
        location.pathname.startsWith(`${normalizedTo}/`)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      if (isActive) return

      if (supportsViewTransitions()) {
        startViewTransition(() => {
          history.push(to)
        })
      } else {
        history.push(to)
      }
    },
    [history, to, isActive],
  )

  const handleMouseEnter = useCallback(() => {
    onPrefetch?.()
  }, [onPrefetch])

  const combinedClassName = [className, isActive && activeClassName]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      className={combinedClassName}
      href={to}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </a>
  )
}
