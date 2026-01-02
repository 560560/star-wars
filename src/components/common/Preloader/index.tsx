import React, { useEffect, useState } from 'react'

import preloader from '../../../assets/images/preloader.gif'

const DELAY_MS = 300

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
      <img alt="Loading" className="w-[150px]" src={preloader} />
    </div>
  )
}
