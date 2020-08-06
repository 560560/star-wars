import React, {useState} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import Preloader from "../Common/Preloader/preloader";
import {NavLink} from "react-router-dom";

const Films = ({films, images, isFetching, chosenFilm, planetsDescription, charactersDescription, starshipsDescription, vehiclesDescription, speciesDescription}) => {
    const screenHeight = window.innerHeight
    const [index, setIndex] = useState(0);
    const [internalRouting, setInternalRouting] = useState(false)

    const handleSelect = (selectedIndex, e) => {

        setIndex(selectedIndex);
        setInternalRouting(true)
    };
    if (chosenFilm !== null && chosenFilm !== index && !internalRouting) {
        setIndex(chosenFilm)
    }

    if (isFetching || !films)
        return <Preloader/>
    else {
        const pageID = (url) => (parseInt((url).replace(/[^\d]/g, '')))
        return (

            <div className="filmsWrapper" style={{minHeight: `${screenHeight}px`}}>
                <Container>
                    <Row className="justify-content-center">
                        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="pb-5">
                            {images.map((item, i) =>
                                <Carousel.Item key={i}>
                                    <img
                                        className="d-block w-100"
                                        src={item.imgSrc}
                                        alt={item.episode_id}
                                    />
                                    <Carousel.Caption>
                                        <h1>STAR WARS: episode {item.episode_id}</h1>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )}

                        </Carousel>

                    </Row>
                    <h1 className="text-center mt-4 mb-5">{films[index].title}</h1>

                    <Row className="mb-4 pt-2">
                        <Col className="col-4 text-right descriptionTitle"><h5>Description:</h5></Col>
                        <Col className="col-8 text-left">{films[index].opening_crawl}</Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="col-4 text-right descriptionTitle"><h5>Director:</h5></Col>
                        <Col className="col-8 text-left">{films[index].director}</Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="col-4 text-right descriptionTitle"><h5>Producer:</h5></Col>
                        <Col className="col-8 text-left">{films[index].producer}</Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="col-4 text-right descriptionTitle"><h5>Release date:</h5></Col>
                        <Col className="col-8 text-left">{films[index].release_date}</Col>
                    </Row>

                    <Row className="mb-4">
                        <Col className="col-4 text-right descriptionTitle"><h5>Characters:</h5></Col>
                        <Col className="col-8 text-left">
                            <Row>{charactersDescription[index].map((character, i) =>
                                <Col key={i} className="col-4 mt-1 mb-1">
                                    <NavLink className="link" to={"/people/" + pageID(character.url)}>
                                        {character.name}
                                    </NavLink>
                                </Col>)}
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col className="col-4 text-right descriptionTitle"><h5>Planets:</h5></Col>
                        <Col className="col-8 text-left">
                            <Row>{planetsDescription[index].map((planet, i) =>
                                <Col key={i} className="col-4 mt-1 mb-1">
                                    <NavLink className="link" to={"/planet/" + pageID(planet.url)}>
                                        {planet.name}
                                    </NavLink>
                                </Col>)}
                            </Row>
                        </Col>
                    </Row>


                    <Row className="mb-4">
                        <Col className="col-4 text-right descriptionTitle"><h5>Starships:</h5></Col>
                        <Col className="col-8 text-left">
                            <Row>{starshipsDescription[index].map((starship, i) =>
                                <Col key={i} className="col-4 mt-1 mb-1">
                                    <NavLink className="link" to={"/starship/" + pageID(starship.url)}>
                                        {starship.name}
                                    </NavLink>
                                </Col>)}
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col className="col-4 text-right descriptionTitle"><h5>Vehicles:</h5></Col>
                        <Col className="col-8 text-left">
                            <Row>{vehiclesDescription[index].map((vehicle, i) =>
                                <Col key={i} className="col-4 mt-1 mb-1">
                                    <NavLink className="link" to={"/vehicle/" + pageID(vehicle.url)}>
                                        {vehicle.name}
                                    </NavLink>
                                </Col>)}
                            </Row>
                        </Col>
                    </Row>


                    <Row className="mb-4">
                        <Col className="col-4 text-right descriptionTitle"><h5>Species:</h5></Col>
                        <Col className="col-8 text-left">
                            <Row>{speciesDescription[index].map((species, i) =>
                                <Col key={i} className="col-4 mt-1 mb-1">
                                    <NavLink className="link" to={"/specie/" + pageID(species.url)}>
                                        {species.name}
                                    </NavLink>
                                </Col>)}
                            </Row>
                        </Col>
                    </Row>




                </Container>

            </div>

        );
    }


}

export default Films;