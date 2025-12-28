import React, { useCallback, useEffect, useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import moment from 'moment'

import { ContentListLoader } from '../Common/ContentLoader'
import { Preloader } from '../Common/Preloader/Preloader'
import { filmsExtras } from './constants'
import { List } from './List'

import { useGetResourcesByUrlsQuery } from '@/api/baseApi'
import { useGetFilmsQuery } from '@/api/filmsApi'

const screenHeight = window.innerHeight
const style = { minHeight: `${screenHeight}px` }

export const Films = React.memo(() => {
  const history = useHistory()
  const { filmId } = useParams<{ filmId?: string }>()
  const [index, setIndex] = useState(0)
  const [internalRouting, setInternalRouting] = useState(false)

  // Fetch all films
  const { data: films, isLoading: isFilmsLoading } = useGetFilmsQuery()

  const currentFilm = films?.[index]

  // Fetch related resources - RTK Query automatically handles skip and caching
  const { data: characters, isLoading: isCharactersLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.characters, { skip: !currentFilm })

  const { data: planets, isLoading: isPlanetsLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.planets, { skip: !currentFilm })

  const { data: starships, isLoading: isStarshipsLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.starships, { skip: !currentFilm })

  const { data: vehicles, isLoading: isVehiclesLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.vehicles, { skip: !currentFilm })

  const { data: species, isLoading: isSpeciesLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.species, { skip: !currentFilm })

  // Sync URL param with state
  useEffect(() => {
    if (filmId && !internalRouting) {
      const chosenFilm = parseInt(filmId) - 1
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIndex((prevIndex) =>
        prevIndex !== chosenFilm ? chosenFilm : prevIndex,
      )
    }
  }, [filmId, internalRouting])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSelect = useCallback(
    (selectedIndex: number) => {
      setIndex(selectedIndex)
      history.push(`/films/${selectedIndex + 1}`)
      setInternalRouting(true)
    },
    [history],
  )

  if (isFilmsLoading || !films) {
    return <Preloader />
  }

  return (
    <div className="filmsWrapper" style={style}>
      <Container>
        <Row className="justify-content-center carousel-wrapper">
          <Carousel
            activeIndex={index}
            className="pb-5"
            interval={null}
            onSelect={handleSelect}
          >
            {filmsExtras.map(({ episode_id, imgSrc }) => (
              <Carousel.Item key={episode_id}>
                <img
                  alt={String(episode_id)}
                  className="d-block w-100"
                  src={imgSrc}
                />
                <Carousel.Caption>
                  <h1>STAR WARS: episode {episode_id}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>

        <h1 className="text-center mt-sm-4 mt-2 mb-sm-5 mb-3">
          {films[index].title}
        </h1>
        <Row className="mb-4 pt-2">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Description:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {films[index].opening_crawl}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Director:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {films[index].director}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Producer:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {films[index].producer}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Release date:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {moment(films[index].release_date).format('DD.MM.YYYY')}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Characters:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isCharactersLoading ? (
              <ContentListLoader />
            ) : (
              <List items={characters} to={'resident'} />
            )}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Planets:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isPlanetsLoading ? (
              <ContentListLoader />
            ) : (
              <List items={planets} to={'planet'} />
            )}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Starships:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isStarshipsLoading ? (
              <ContentListLoader />
            ) : (
              <List items={starships} to={'starship'} />
            )}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Vehicles:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isVehiclesLoading ? (
              <ContentListLoader />
            ) : (
              <List items={vehicles} to={'vehicle'} />
            )}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Species:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isSpeciesLoading ? (
              <ContentListLoader />
            ) : (
              <List items={species} to={'specie'} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
})
