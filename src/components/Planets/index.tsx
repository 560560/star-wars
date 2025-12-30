import React from 'react'

import { Preloader } from '../common/Preloader'
import { planetsExtras } from './constants'
import PlanetListItem from './PlanetListItem'

import { useGetPlanetsQuery } from '@/api/planetsApi'

const Planets = () => {
  const { data: planets, isLoading } = useGetPlanetsQuery()
  // Ошибки автоматически показываются middleware - ничего делать не нужно!

  if (isLoading || !planets) {
    return <Preloader />
  }

  return (
    <div className="sectionsContainer mx-auto px-4 max-w-[1100px]">
      <h1 className="sectionTitle text-center pt-5 mb-5">
        Planets of the Star wars universe
      </h1>
      <div
        className={
          isLoading
            ? 'flex flex-wrap justify-center foggy'
            : 'flex flex-wrap justify-center mt-10 gap-y-6'
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
  )
}

export default Planets
