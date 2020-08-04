import React from 'react';
import {Container, Row} from "react-bootstrap";
import PlanetListItem from "./PlanetListItem/PlanetListItem";

const Planets = ({images, planets}) => {
    return (
        <Container>
            <h1 className="text-center mt-5 mb-5">Planets of the Star wars universe</h1>
            <Row className="justify-content-center">
                {planets.map((planet, i) => <PlanetListItem key={i} images={images} planet={planet}/>)}
            </Row>
        </Container>
    );
}

export default Planets;