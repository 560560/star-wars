import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Preloader } from '../../Common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import emptyImg from '../../../assets/images/empty_img.png';
import { getPageId } from '../../../utils';
import { ContentListLoader } from '../../Common/ContentLoader';

const ResidentItem = ({ isFetching, person, filmsDescription, lastLocation, homePlanet, handleBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!person) return <Preloader />;
  else {
    return (
      <div className="planetItemWrapper">
        <Container
          className={isFetching ? 'foggy text-center residentItemContainer' : 'text-center residentItemContainer'}
        >
          <Row className="pt-5 mb-5 align-items-center">
            <Col className="col-sm-5 text-lg-right text-md-right text-sm-center pl-sm-5 pb-sm-0 pb-3">
              <img src={emptyImg} width={200} alt={person.name} />
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
            <Col className="col-8 text-left descriptionText">{person.hair_color}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Skin color:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{person.skin_color}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Eye color:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{person.eye_color}</Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Birth year:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">{person.birth_year}</Col>
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
              {!homePlanet ? (
                <ContentListLoader />
              ) : (
                <NavLink className="link" to={'/planet/' + getPageId(homePlanet.url)}>
                  {homePlanet.name}
                </NavLink>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-4 text-right descriptionTitle">
              <h5>Films:</h5>
            </Col>
            <Col className="col-8 text-left descriptionText">
              {person.films.length !== filmsDescription.length ? (
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
            <NavLink to={'/people/1'} className="backToPeopleButton mb-3 w-100">
              Back to people list
            </NavLink>
          )}
          {lastLocation && (
            <Button onClick={handleBack} className="backToPeopleButton mb-3 w-100">
              {lastLocation.pathname.includes('/people/') ? 'Back to people list' : 'Go back'}
            </Button>
          )}
        </Container>
      </div>
    );
  }
};

export default ResidentItem;
