import React from 'react'
import { Card } from 'react-bootstrap'
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
    <Card className="col-lg-3 col-md-4 col-sm-5 col-12 planetCard text-center m-3 p-0">
      <Card.Img
        className="mx-auto mt-3 mb-2"
        src={planetImgSrc}
        variant="top"
      />
      <Card.Body onClick={() => setPlanetListYPosition?.(window.scrollY)}>
        <Card.Title className="mb-4">{planet.name.toLowerCase()}</Card.Title>
        <NavLink className="descriptionButton mb-2" to={`/planet/${planetId}`}>
          Description
        </NavLink>
      </Card.Body>
    </Card>
  )
}

export default PlanetListItem
