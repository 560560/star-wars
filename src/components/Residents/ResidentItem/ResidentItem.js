import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Preloader from "../../Common/Preloader/preloader";
import {NavLink} from "react-router-dom";
import emptyImg from "../../../assets/images/empty_img.png"


const ResidentItem = ({images, isFetching, person, filmsDescription, parentPage, lastLocation}) => {
        const screenHeight = window.innerHeight
    const pageID = (url) => (parseInt((url).replace(/[^\d]/g, '')))
    if (!person || isFetching) return <Preloader/>
    else {
       /* const planetImgSrc = (images.filter(item => item.name === person.name))[0].imgSrc
*/
        return (
            <div className="planetItemWrapper">
                <Container style={{height: `${screenHeight}px`}} className="text-center">

                    <Row className="pt-5 mb-5   text-center align-items-center">
                        <Col className="col-5"><img src={emptyImg} width={200} alt={person.name}/></Col>
                        <Col className="col-6 ">
                            <h1>{person.name.toLowerCase()}</h1>
                            <h2>{person.name.toLowerCase()}</h2>
                        </Col>
                    </Row>
                   <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Name:</h5></Col>
                        <Col className="col-8 text-left">{person.name}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Height:</h5></Col>
                        <Col className="col-8 text-left">{person.height}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Mass:</h5></Col>
                        <Col className="col-8 text-left">{person.mass}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Hair color:</h5></Col>
                        <Col className="col-8 text-left">{person.hair_color}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Skin color:</h5></Col>
                        <Col className="col-8 text-left">{person.skin_color}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Eye color:</h5></Col>
                        <Col className="col-8 text-left">{person.eye_color}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Birth year water:</h5></Col>
                        <Col className="col-8 text-left">{person.birth_year}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Gender:</h5></Col>
                        <Col className="col-8 text-left">{person.gender}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-4 text-right descriptionTitle"><h5>Homeworld:</h5></Col>
                        <Col className="col-8 text-left">{person.homeworld}</Col>
                    </Row>
                   {/* <Row className="mb-3">
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
                    </Row>*/}
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

                    {!lastLocation && <NavLink to={"/planets/1"} className="backToPlanetsButton mb-3 w-100">Back to planet list</NavLink>}
                    {lastLocation && <NavLink to={lastLocation.pathname} className="backToPlanetsButton mb-3 w-100">Go back</NavLink>}

                </Container>
            </div>
        );
    }
}

export default ResidentItem;