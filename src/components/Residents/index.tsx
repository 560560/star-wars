import React from 'react'

import { Preloader } from '../common/Preloader'
import ResidentListItem from './ResidentListItem'

import { useGetPeopleQuery } from '@/api/peopleApi'

const Residents = () => {
  const { data: people, isLoading } = useGetPeopleQuery()

  if (isLoading || !people) {
    return <Preloader />
  }

  return (
    <div className="sectionsContainer mx-auto px-4 max-w-[1100px]">
      <h1 className="sectionTitle text-center pt-5 mb-5">
        People of the Star wars universe
      </h1>
      <div
        className={
          isLoading
            ? 'flex flex-wrap justify-center foggy'
            : 'flex flex-wrap justify-center mt-10 gap-y-6'
        }
      >
        {people.map((resident) => (
          <ResidentListItem key={resident.url} resident={resident} />
        ))}
      </div>
    </div>
  )
}

export default Residents
