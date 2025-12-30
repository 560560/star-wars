import React from 'react'

import underConstruction from '../../../assets/images/underConstruction.png'

export const UnderConstruction = () => {
  return (
    <div className="flexWrapper container mx-auto px-4">
      <div className="underConstruction flex items-center justify-center flex-wrap -mx-3">
        <div className="w-full px-3">
          <img alt="" className="mx-auto block" src={underConstruction} />
        </div>
      </div>
    </div>
  )
}
