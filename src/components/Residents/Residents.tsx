import React from 'react'
import { Container, Row } from 'react-bootstrap'

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
      <Container className="peopleListContainer">
        <h1 className="text-center pt-5 mb-5">
          People of the Star wars universe
        </h1>
        <Row
          className={
            isLoading
              ? 'justify-content-center foggy'
              : 'justify-content-center'
          }
        >
          {people.map((resident) => (
            <ResidentListItem key={resident.url} resident={resident} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Residents
