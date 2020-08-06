import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Preloader from "../../Common/Preloader/preloader";
import {NavLink} from "react-router-dom";


const PlanetItem = ({images, isFetching, planet, filmsDescription, residentsDescription, parentPage}) => {
        const screenHeight = window.innerHeight
    const pageID = (url) => (parseInt((url).replace(/[^\d]/g, '')))
    if (!planet || isFetching) return <Preloader/>
    else {
        const planetImgSrc = (images.filter(item => item.name === planet.name))[0].imgSrc

        return (
            <div className="planetItemWrapper">
                <Container style={{height: `${screenHeight}px`}} className="text-center">

                    <Row className="pt-5 mb-5   text-center align-items-center">
                        <Col className="col-5"><img src={planetImgSrc} alt={planet.name}/></Col>
                        <Col className="col-6 ">
                            <h1>{planet.name.toLowerCase()}</h1>
                            <h2>{planet.name.toLowerCase()}</h2>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Rotation period:</h5></Col>
                        <Col className="col-8 text-left">{planet.rotation_period}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Orbital period:</h5></Col>
                        <Col className="col-8 text-left">{planet.orbital_period}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Diameter:</h5></Col>
                        <Col className="col-8 text-left">{planet.diameter}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Climate:</h5></Col>
                        <Col className="col-8 text-left">{planet.climate}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Gravity:</h5></Col>
                        <Col className="col-8 text-left">{planet.gravity}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Terrain:</h5></Col>
                        <Col className="col-8 text-left">{planet.terrain}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Surface water:</h5></Col>
                        <Col className="col-8 text-left">{planet.surface_water}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Population:</h5></Col>
                        <Col className="col-8 text-left">{planet.population}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Residents:</h5></Col>
                        <Col className="col-8 text-left">
                            <Row>{residentsDescription.map((resident, i) =>
                                <Col key={i} className="col-4 mt-1 mb-1">
                                    <NavLink className="link" to={"/resident/" + pageID(resident.url)}>
                                        {resident.name}
                                    </NavLink>
                                </Col>)}
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Films:</h5></Col>
                        <Col className="col-8 text-left">
                            <Row>{filmsDescription.map((film, i) =>
                                <Col key={i} className="col-4 mt-1 mb-1">
                                    <NavLink className="link" to={"/films/" + pageID(film.url)}>
                                        {film.title}
                                    </NavLink>
                                </Col>)}
                            </Row>
                        </Col>
                    </Row>

                    <NavLink to={"/planets/"+ parentPage} className="backToPlanetsButton mb-3 w-100">Back to planet list</NavLink>
                </Container>
            </div>
        );
    }
}

export default PlanetItem;