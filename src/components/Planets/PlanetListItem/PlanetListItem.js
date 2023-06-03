import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PlanetListItem = ({ images, planet, setPlanetListYPosition }) => {
  const planetImgSrc = images.filter((item) => item.name === planet.name)[0].imgSrc;
  const planetId = parseInt(planet.url.replace(/[^\d]/g, ''));

  return (
    <Card className="col-lg-3 col-md-4 col-sm-5 col-12 planetCard text-center m-3 p-0">
      <Card.Img variant="top" src={planetImgSrc} className="mx-auto mt-3 mb-2" />
      <Card.Body onClick={() => setPlanetListYPosition(window.scrollY)}>
        <Card.Title className="mb-4">{planet.name.toLowerCase()}</Card.Title>
        <NavLink to={'/planet/' + planetId} className="descriptionButton mb-2">
          Description
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default PlanetListItem;
