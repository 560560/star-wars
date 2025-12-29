import React from 'react'

import { Preloader } from '../Common/Preloader/Preloader'
import ResidentListItem from './ResidentListItem/ResidentListItem'

import { useGetPeopleQuery } from '@/api/peopleApi'

const Residents = () => {
  const { data: people, isLoading } = useGetPeopleQuery()

  if (isLoading || !people) {
    return <Preloader />
  }

  return (
    <div className="planetsListWrapper">
      <div className="container mx-auto px-4 peopleListContainer">
        <h1 className="text-center pt-5 mb-5">
          People of the Star wars universe
        </h1>
        <div
          className={
            isLoading
              ? 'flex flex-wrap justify-center foggy'
              : 'flex flex-wrap justify-center'
          }
        >
          {people.map((resident) => (
            <ResidentListItem key={resident.url} resident={resident} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Residents
