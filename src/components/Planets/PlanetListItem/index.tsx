import React, { useCallback } from 'react'

import { planetsApi } from '@/api/planetsApi'
import type { IPlanet } from '@/api/types'
import { TransitionLink } from '@/components/common/TransitionLink'
import { useAppDispatch } from '@/store/hooks'

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
  const dispatch = useAppDispatch()

  const planetImg = images.find((item) => item.name === planet.name)
  const planetImgSrc =
    planetImg?.imgSrc || images.find((item) => item.name === 'unknown')?.imgSrc
  const planetId = parseInt(planet.url.replace(/[^\d]/g, ''))

  const handlePrefetch = useCallback(() => {
    dispatch(planetsApi.endpoints.getPlanet.initiate(planetId))
  }, [dispatch, planetId])

  return (
    <div className="w-[300px] h-[250px] planetCard text-center m-3 p-0">
      <img
        alt={planet.name}
        className="h-[150px] w-[150px] mx-auto mt-3 mb-2"
        src={planetImgSrc}
      />
      <div
        className="p-4"
        onClick={() => setPlanetListYPosition?.(window.scrollY)}
      >
        <TransitionLink
          className="descriptionButton mb-2"
          to={`/planet/${planetId}`}
          onPrefetch={handlePrefetch}
        >
          <h5 className="card-title text-center m-0">
            {planet.name.toLowerCase()}
          </h5>
        </TransitionLink>
      </div>
    </div>
  )
}

export default PlanetListItem
