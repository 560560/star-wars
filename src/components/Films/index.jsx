import React, { useCallback, useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { compact, isEqual } from 'lodash';
import moment from 'moment';

import { Preloader } from '../Common/Preloader/Preloader';
import {
  getCharacters,
  getFilmsList,
  getPlanets,
  getSpecies,
  getStarships,
  getVehicles,
  setChosenFilm,
} from '../../redux/films-reducer';
import { ContentListLoader } from '../Common/ContentLoader';
import { List } from './List';

const screenHeight = window.innerHeight;
const style = { minHeight: `${screenHeight}px` };

export const Films = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filmId } = useParams();
  const [index, setIndex] = useState(0);
  const [internalRouting, setInternalRouting] = useState(false);

  const chosenFilm = useSelector((state) => state.filmsPage.chosenFilm, isEqual);
  const loadingErrors = useSelector((state) => state.filmsPage.errors[chosenFilm] || {}, isEqual);
  const charactersData = useSelector((state) => state.peoplePage.peopleSource, isEqual);
  const planetsData = useSelector((state) => state.planetsPage.planetsSource, isEqual);
  const starshipsData = useSelector((state) => state.starshipsPage.starshipsSource, isEqual);
  const vehiclesData = useSelector((state) => state.vehiclesPage.vehiclesSource, isEqual);
  const speciesData = useSelector((state) => state.speciesPage.speciesSource, isEqual);
  const images = useSelector((state) => state.imagesStore.films, isEqual);
  const isFilmsFetching = useSelector((state) => state.filmsPage.isFilmsFetching, isEqual);
  const isFilmCharactersFetching = useSelector((state) => state.filmsPage.isFilmCharactersFetching, isEqual);
  const isFilmPlanetsFetching = useSelector((state) => state.filmsPage.isFilmPlanetsFetching, isEqual);
  const isFilmStarshipsFetching = useSelector((state) => state.filmsPage.isFilmStarshipsFetching, isEqual);
  const isFilmSpeciesFetching = useSelector((state) => state.filmsPage.isFilmSpeciesFetching, isEqual);
  const isFilmVehiclesFetching = useSelector((state) => state.filmsPage.isFilmVehiclesFetching, isEqual);
  const films = useSelector((state) => state.filmsPage.films, isEqual);

  const characters = useSelector(() => {
    if (films && films[chosenFilm] && !isFilmCharactersFetching) {
      return compact(films[chosenFilm].characters?.map((character) => charactersData[character]));
    }
  }, isEqual);

  const planets = useSelector(() => {
    if (films && films[chosenFilm] && !isFilmPlanetsFetching) {
      return compact(films[chosenFilm].planets?.map((planet) => planetsData[planet]));
    }
  }, isEqual);

  const starships = useSelector(() => {
    if (films && films[chosenFilm] && !isFilmStarshipsFetching) {
      return compact(films[chosenFilm].starships?.map((starship) => starshipsData[starship]));
    }
  }, isEqual);

  const species = useSelector(() => {
    if (films && films[chosenFilm] && !isFilmSpeciesFetching) {
      return compact(films[chosenFilm].species?.map((specie) => speciesData[specie]));
    }
  }, isEqual);

  const vehicles = useSelector(() => {
    if (films && films[chosenFilm] && !isFilmVehiclesFetching) {
      return compact(films[chosenFilm].vehicles?.map((vehicle) => vehiclesData[vehicle]));
    }
  }, isEqual);

  useEffect(() => {
    dispatch(setChosenFilm(filmId - 1));
  }, [filmId]);

  useEffect(() => {
    if (!isFilmsFetching) {
      dispatch(getFilmsList());
    }
  }, [chosenFilm, isFilmsFetching]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = useCallback(
    (selectedIndex) => {
      setChosenFilm(selectedIndex + 1);
      setIndex(selectedIndex);
      history.push('/films/' + (selectedIndex + 1));
      setInternalRouting(true);
    },
    [setChosenFilm, setInternalRouting]
  );

  useEffect(() => {
    if (chosenFilm !== null && chosenFilm !== index && !internalRouting) {
      setIndex(chosenFilm);
    }
  }, [chosenFilm, index, internalRouting, setIndex]);

  if (isFilmsFetching || !films) {
    return <Preloader />;
  }
  return (
    <div className="filmsWrapper" style={style}>
      <Container>
        <Row className="justify-content-center carousel-wrapper">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="pb-5">
            {images.map((item, i) => (
              <Carousel.Item key={i}>
                <img className="d-block w-100" src={item.imgSrc} alt={item.episode_id} />
                <Carousel.Caption>
                  <h1>STAR WARS: episode {item.episode_id}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>

        <h1 className="text-center mt-sm-4 mt-2 mb-sm-5 mb-3">{films[index].title}</h1>
        <Row className="mb-4 pt-2">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Description:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">{films[index].opening_crawl}</Col>
        </Row>
        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Director:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">{films[index].director}</Col>
        </Row>
        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Producer:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">{films[index].producer}</Col>
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
            {isFilmCharactersFetching ? (
              <ContentListLoader />
            ) : (
              <List
                items={characters}
                to={'resident'}
                isLoadingError={loadingErrors.characters}
                onReload={getCharacters}
              />
            )}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Planets:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isFilmPlanetsFetching ? (
              <ContentListLoader />
            ) : (
              <List items={planets} to={'planets'} isLoadingError={loadingErrors.planets} onReload={getPlanets} />
            )}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Starships:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isFilmStarshipsFetching ? (
              <ContentListLoader />
            ) : (
              <List
                items={starships}
                to={'starship'}
                isLoadingError={loadingErrors.starships}
                onReload={getStarships}
              />
            )}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Vehicles:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isFilmVehiclesFetching ? (
              <ContentListLoader />
            ) : (
              <List items={vehicles} to={'vehicle'} isLoadingError={loadingErrors.vehicles} onReload={getVehicles} />
            )}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-sm-4 col-12 text-sm-right text-left descriptionTitle">
            <h5>Species:</h5>
          </Col>
          <Col className="col-sm-8 col-12 text-left descriptionText">
            {isFilmSpeciesFetching ? (
              <ContentListLoader />
            ) : (
              <List items={species} to={'specie'} isLoadingError={loadingErrors.species} onReload={getSpecies} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
});
