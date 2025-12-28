import React from 'react'
import { Container, Row } from 'react-bootstrap'

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
      <Container className="planetListContainer">
        <h1 className="text-center pt-5 mb-5">
          Planets of the Star wars universe
        </h1>
        <Row
          className={
            isLoading
              ? 'justify-content-center foggy'
              : 'justify-content-center'
          }
        >
          {planets.map((planet) => (
            <PlanetListItem
              key={planet.url}
              images={planetsExtras}
              planet={planet}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Planets
