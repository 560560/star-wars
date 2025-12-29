import React from 'react'
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
    <div className="w-full sm:w-[calc(41.66%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] residentCard text-center m-3 p-0">
      <img
        alt={resident.name}
        className="mx-auto mt-3 mb-2"
        src={emptyImg}
        width={150}
      />
      <div
        className="p-4"
        onClick={() => setPeopleListYPosition?.(window.scrollY)}
      >
        <h5 className="card-title mb-4">{resident.name.toLowerCase()}</h5>
        <NavLink
          className="descriptionButton mb-2"
          to={`/resident/${residentId}`}
        >
          Description
        </NavLink>
      </div>
    </div>
  )
}

export default ResidentListItem
