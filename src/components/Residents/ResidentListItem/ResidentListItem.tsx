import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import emptyImg from '../../../assets/images/empty_img.png'

import type { IPerson } from '@/api/types'

interface ResidentListItemProps {
  resident: IPerson
  currentPage?: number
  setPeopleListYPosition?: (position: number) => void
}

const ResidentListItem: React.FC<ResidentListItemProps> = ({
  resident,
  setPeopleListYPosition,
}) => {
  const residentId = parseInt(resident.url.replace(/[^\d]/g, ''))
  return (
    <Card className="col-lg-3 col-md-4 col-sm-5 col-12 residentCard text-center m-3 p-0">
      <Card.Img
        className="mx-auto mt-3 mb-2"
        src={emptyImg}
        variant="top"
        width={150}
      />
      <Card.Body onClick={() => setPeopleListYPosition?.(window.scrollY)}>
        <Card.Title className="mb-4">{resident.name.toLowerCase()}</Card.Title>
        <NavLink
          className="descriptionButton mb-2"
          to={`/resident/${residentId}`}
        >
          Description
        </NavLink>
      </Card.Body>
    </Card>
  )
}

export default ResidentListItem
