import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useHistory, useParams } from 'react-router-dom'

import { ContentListLoader } from '../../Common/ContentLoader'
import { Preloader } from '../../Common/Preloader/Preloader'
import { planetsExtras } from '../constants'

import { useGetResourcesByUrlsQuery } from '@/api/baseApi'
import { useGetPlanetQuery } from '@/api/planetsApi'

const getPageId = (url: string): number => parseInt(url.replace(/[^\d]/g, ''))

const PlanetItem = () => {
  const { planetId } = useParams<{ planetId?: string }>()
  const history = useHistory()

  const images = planetsExtras

  const { data: planet, isLoading } = useGetPlanetQuery(
    planetId ? parseInt(planetId) : 0,
  )

  const { data: residents, isLoading: isResidentsLoading } =
    useGetResourcesByUrlsQuery(planet?.residents, { skip: !planet })

  const { data: films, isLoading: isFilmsLoading } = useGetResourcesByUrlsQuery(
    planet?.films,
    { skip: !planet },
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    history.goBack()
  }

  if (isLoading || !planet) {
    return <Preloader />
  }

  const planetImg = images.find((item) => item.name === planet.name)
  const planetImgSrc =
    planetImg?.imgSrc || images.find((item) => item.name === 'unknown')?.imgSrc

  return (
    <div className="planetItemWrapper">
      <Container
        className={
          isLoading
            ? 'foggy text-center planetItemContainer'
            : 'text-center planetItemContainer'
        }
      >
        <Row className="pt-5 mb-5  align-items-center">
          <Col className="col-sm-5 text-lg-right text-md-right text-sm-center pl-sm-5 pb-sm-0 pb-3">
            <img alt={planet.name} src={planetImgSrc} />
          </Col>
          <Col className="col-sm-6 col-12 text-lg-center text-md-center text-sm-left">
            <h1>{planet.name.toLowerCase()}</h1>
            <h2>{planet.name.toLowerCase()}</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Rotation period:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {planet.rotation_period}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Orbital period:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {planet.orbital_period}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Diameter:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {planet.diameter}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Climate:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {planet.climate}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Gravity:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {planet.gravity}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Terrain:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {planet.terrain}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Surface water:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {planet.surface_water}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Population:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {planet.population}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-4 text-right descriptionTitle">
            <h5>Residents:</h5>
          </Col>
          <Col className="col-8 text-left descriptionText">
            {isResidentsLoading || !residents ? (
              <ContentListLoader />
            ) : (
              <Row>
                {residents.map((resident) => (
                  <Col
                    key={resident.url}
                    className="col-md-4 col-sm-6 col-12 mt-1 mb-1"
                  >
                    <NavLink
                      className="link"
                      to={`/resident/${getPageId(resident.url)}`}
                    >
                      {'name' in resident ? resident.name : ''}
                    </NavLink>
                  </Col>
                ))}
              </Row>
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
        <Button className="backToPlanetsButton mb-3 w-100" onClick={handleBack}>
          Back
        </Button>
      </Container>
    </div>
  )
}

export default PlanetItem
