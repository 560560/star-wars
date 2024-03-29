import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Preloader } from '../../Common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { getPageId } from '../../../utils';
import { ContentListLoader } from '../../Common/ContentLoader';

const PlanetItem = ({
  images,
  isFetching,
  planet,
  filmsDescription,
  residentsDescription,
  lastLocation,
  handleBack,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!planet) return <Preloader />;
  else {
    const planetImgSrc = images.filter((item) => item.name === planet.name)[0].imgSrc;

    return (
      <div className="planetItemWrapper">
        <Container className={isFetching ? 'foggy text-center planetItemContainer' : 'text-center planetItemContainer'}>
          <Row className="pt-5 mb-5  align-items-center">
            <Col className="col-sm-5 text-lg-right text-md-right text-sm-center pl-sm-5 pb-sm-0 pb-3">
              <img src={planetImgSrc} alt={planet.name} />
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
            <Col className="col-8 text-left descriptionText">{planet.rotation_period}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Orbital period:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{planet.orbital_period}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Diameter:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{planet.diameter}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Climate:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{planet.climate}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Gravity:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{planet.gravity}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Terrain:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{planet.terrain}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Surface water:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{planet.surface_water}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Population:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{planet.population}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Residents:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">
              {planet.residents.length !== residentsDescription.length ? (
                <ContentListLoader />
              ) : (
                <Row>
                  {residentsDescription.map((resident, i) => (
                    <Col key={i} className="col-md-4 col-sm-6 col-12 mt-1 mb-1">
                      <NavLink className="link" to={'/resident/' + getPageId(resident.url)}>
                        {resident.name}
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
              {planet.films.length !== filmsDescription.length ? (
                <ContentListLoader />
              ) : (
                <Row>
                  {filmsDescription.map((film, i) => (
                    <Col key={i} className="col-md-4 col-sm-6 col-12 mb-1">
                      <NavLink className="link" to={'/films/' + getPageId(film.url)}>
                        {film.title}
                      </NavLink>
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
          {!lastLocation && (
            <NavLink to={'/planets/1'} className="backToPlanetsButton mb-3 w-100">
              Back to planet list
            </NavLink>
          )}
          {lastLocation && (
            <Button onClick={handleBack} className="backToPlanetsButton mb-3 w-100">
              {lastLocation.pathname.includes('/planets/') ? 'Back to planet list' : 'Go back'}
            </Button>
          )}
        </Container>
      </div>
    );
  }
};

export default PlanetItem;
