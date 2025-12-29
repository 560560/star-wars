import React from 'react'

import { Preloader } from '../Common/Preloader/Preloader'
import { planetsExtras } from './constants'
import PlanetListItem from './PlanetListItem/PlanetListItem'

import { useGetPlanetsQuery } from '@/api/planetsApi'

const Planets = () => {
  const { data: planets, isLoading } = useGetPlanetsQuery()
  // Ошибки автоматически показываются middleware - ничего делать не нужно!

  if (isLoading || !planets) {
    return <Preloader />
  }

  return (
    <div className="planetsListWrapper">
      <div className="container mx-auto px-4 planetListContainer">
        <h1 className="text-center pt-5 mb-5">
          Planets of the Star wars universe
        </h1>
        <div
          className={
            isLoading
              ? 'flex flex-wrap justify-center foggy'
              : 'flex flex-wrap justify-center'
          }
        >
          {planets.map((planet) => (
            <PlanetListItem
              key={planet.url}
              images={planetsExtras}
              planet={planet}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Planets
