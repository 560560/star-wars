import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useHistory, useParams } from 'react-router-dom'

import emptyImg from '../../../assets/images/empty_img.png'
import { ContentListLoader } from '../../Common/ContentLoader'
import { Preloader } from '../../Common/Preloader/Preloader'

import {
  useGetResourceByUrlQuery,
  useGetResourcesByUrlsQuery,
} from '@/api/baseApi'
import { useGetPersonQuery } from '@/api/peopleApi'

const getPageId = (url: string): number => parseInt(url.replace(/[^\d]/g, ''))

const ResidentItem = () => {
  const { residentId } = useParams<{ residentId?: string }>()
  const history = useHistory()

  const { data: person, isLoading } = useGetPersonQuery(
    residentId ? parseInt(residentId) : 0,
  )

  const { data: homePlanet, isLoading: isHomePlanetLoading } =
    useGetResourceByUrlQuery(person?.homeworld || '', {
      skip: !person?.homeworld,
    })

  const { data: films, isLoading: isFilmsLoading } = useGetResourcesByUrlsQuery(
    person?.films,
    { skip: !person },
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    history.goBack()
  }

  if (isLoading || !person) {
    return <Preloader />
  }

  return (
    <div className="planetItemWrapper">
      <Container
        className={
          isLoading
            ? 'foggy text-center residentItemContainer'
            : 'text-center residentItemContainer'
        }
      >
        <Row className="pt-5 mb-5 align-items-center">
          <Col className="col-sm-5 text-lg-right text-md-right text-sm-center pl-sm-5 pb-sm-0 pb-3">
            <img alt={person.name} src={emptyImg} width={200} />
          </Col>
          <Col className="col-sm-6 col-12 text-lg-center text-md-center text-sm-left">
            <h1>{person.name.toLowerCase()}</h1>
            <h2>{person.name.toLowerCase()}</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Name:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">{person.name}</Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Height:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">{person.height}</Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Mass:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">{person.mass}</Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Hair color:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {person.hair_color}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Skin color:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {person.skin_color}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Eye color:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {person.eye_color}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Birth year:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {person.birth_year}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Gender:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">{person.gender}</Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Homeworld:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {isHomePlanetLoading || !homePlanet ? (
              <ContentListLoader />
            ) : (
              <NavLink
                className="link"
                to={`/planet/${getPageId(homePlanet.url)}`}
              >
                {'name' in homePlanet ? homePlanet.name : ''}
              </NavLink>
            )}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Films:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {isFilmsLoading || !films ? (
              <ContentListLoader />
            ) : (
              <Row>
                {films.map((film) => (
                  <Col key={film.url} className="col-md-4 col-sm-6 col-12 mb-1">
                    <NavLink
                      className="link"
                      to={`/films/${getPageId(film.url)}`}
                    >
                      {'title' in film ? film.title : ''}
                    </NavLink>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
        <Button className="backToPeopleButton mb-3 w-100" onClick={handleBack}>
          Back
        </Button>
      </Container>
    </div>
  )
}

export default ResidentItem
