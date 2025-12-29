import React from 'react'
import { NavLink } from 'react-router-dom'

import type { IPlanet } from '@/api/types'

interface ImageItem {
  name: string
  imgSrc: string
}

interface PlanetListItemProps {
  images: ImageItem[]
  planet: IPlanet
  setPlanetListYPosition?: (position: number) => void
}

const PlanetListItem: React.FC<PlanetListItemProps> = ({
  images,
  planet,
  setPlanetListYPosition,
}) => {
  const planetImg = images.find((item) => item.name === planet.name)
  const planetImgSrc =
    planetImg?.imgSrc || images.find((item) => item.name === 'unknown')?.imgSrc
  const planetId = parseInt(planet.url.replace(/[^\d]/g, ''))

  return (
    <div className="w-full sm:w-[calc(41.66%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] planetCard text-center m-3 p-0">
      <img alt={planet.name} className="mx-auto mt-3 mb-2" src={planetImgSrc} />
      <div
        className="p-4"
        onClick={() => setPlanetListYPosition?.(window.scrollY)}
      >
        <h5 className="card-title mb-4">{planet.name.toLowerCase()}</h5>
        <NavLink className="descriptionButton mb-2" to={`/planet/${planetId}`}>
          Description
        </NavLink>
      </div>
    </div>
  )
}

export default PlanetListItem
