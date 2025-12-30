import React, { useCallback } from 'react'

import emptyImg from '../../../assets/images/empty_img.png'

import { peopleApi } from '@/api/peopleApi'
import type { IPerson } from '@/api/types'
import { TransitionLink } from '@/components/common/TransitionLink'
import { useAppDispatch } from '@/store/hooks'

interface ResidentListItemProps {
  resident: IPerson
  currentPage?: number
  setPeopleListYPosition?: (position: number) => void
}

const ResidentListItem: React.FC<ResidentListItemProps> = ({
  resident,
  setPeopleListYPosition,
}) => {
  const dispatch = useAppDispatch()
  const residentId = parseInt(resident.url.replace(/[^\d]/g, ''))

  const handlePrefetch = useCallback(() => {
    dispatch(peopleApi.endpoints.getPerson.initiate(residentId))
  }, [dispatch, residentId])

  return (
    <div className="w-[300px] h-[250px] residentCard text-center m-3 p-0">
      <img
        alt={resident.name}
        className="h-[150px] w-[150px] mx-auto mt-3 mb-2"
        src={emptyImg}
        width={150}
      />
      <div
        className="p-4"
        onClick={() => setPeopleListYPosition?.(window.scrollY)}
      >
        <TransitionLink
          className="descriptionButton mb-2"
          to={`/resident/${residentId}`}
          onPrefetch={handlePrefetch}
        >
          <h5 className="card-title text-center m-0">
            {resident.name.toLowerCase()}
          </h5>
        </TransitionLink>
      </div>
    </div>
  )
}

export default ResidentListItem
