import React from 'react';
import {Container, Row} from "react-bootstrap";
import PlanetListItem from "./PlanetListItem/PlanetListItem";
import Preloader from "../Common/Preloader/preloader";

const Planets = ({images, planets}) => {
    if (!planets) return <Preloader/>
    else {
        return (
            <div className="planetsListWrapper">
            <Container>
                <h1 className="text-center pt-5 mb-5">Planets of the Star wars universe</h1>
                <Row className="justify-content-center">
                    {planets.map((planet, i) => <PlanetListItem key={i} images={images} planet={planet}/>)}
                </Row>
            </Container>
            </div>
        );
    }
}

export default Planets;