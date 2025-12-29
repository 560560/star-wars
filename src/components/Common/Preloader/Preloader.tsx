import React from 'react'

import preloader from '../../../assets/images/preloader.gif'

const screenHeight = window.innerHeight
const preloaderHeight = 200
const preloaderPositionHeight = screenHeight - preloaderHeight / 2
const rowStyle = { height: `${preloaderPositionHeight}px` }

export const Preloader = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center text-center -mx-3" style={rowStyle}>
        <div className="w-full px-3">
          <img
            alt="Loading"
            className="mt-5"
            height={preloaderHeight}
            src={preloader}
          />
        </div>
      </div>
    </div>
  )
}
