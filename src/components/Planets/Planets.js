import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PlanetListItem from "./PlanetListItem/PlanetListItem";
import Preloader from "../Common/Preloader/preloader";
import {NavLink} from "react-router-dom";

const Planets = ({isFetching, images, planets, prevPage, nextPage, currentPage}) => {
    if (!planets) return <Preloader/>
    else {

        const pageID = (url) => {
            if (!url) return
            else {
                return parseInt((url).replace(/[^\d]/g, ''))
            }
        }

        return (
            <div className="planetsListWrapper" >
                <Container>
                    <h1 className="text-center pt-5 mb-5">Planets of the Star wars universe</h1>
                    <Row className={isFetching ? "justify-content-center foggy" : "justify-content-center"}>
                        {planets.map((planet, i) => <PlanetListItem key={i} images={images} planet={planet}/>)}
                    </Row>
                    <Row className="justify-content-center mt-3 mb-4">

                        <Col className={prevPage ? "text-right paginator" : "text-right paginator pseudoButtonOff" }>
                            <NavLink  to={prevPage ? "/planets/" + pageID(prevPage) : "/planets/" + currentPage}>Previous page</NavLink>
                        </Col>

                        <Col className={nextPage ? "text-left paginator" : "text-left paginator pseudoButtonOff" }>
                            <NavLink  to={nextPage ? "/planets/" + pageID(nextPage) : "/planets/" + currentPage}>Next page</NavLink>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Planets;