/**
 * View Transitions API utilities
 * Provides smooth page transitions with fallback for unsupported browsers
 */

/**
 * Check if browser supports View Transitions API
 */
export const supportsViewTransitions = (): boolean => {
  return 'startViewTransition' in document
}

/**
 * Start a view transition with fallback
 * @param callback - Function to execute during transition (usually navigation)
 */
export const startViewTransition = (callback: () => void): void => {
  if (supportsViewTransitions() && document.startViewTransition) {
    document.startViewTransition(callback)
  } else {
    // Fallback for browsers without support (Firefox)
    callback()
  }
}
