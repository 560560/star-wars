import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Preloader from "../Common/Preloader/preloader";
import {NavLink} from "react-router-dom";
import ResidentListItem from "./ResidentListItem/ResidentListItem";


const Residents = ({isFetching, images, people, prevPage, nextPage, currentPage}) => {
    if (!people) return <Preloader/>
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
                    <h1 className="text-center pt-5 mb-5">People of the Star wars universe</h1>
                    <Row className={isFetching ? "justify-content-center foggy" : "justify-content-center"}>
                        {people.map((resident, i) => <ResidentListItem key={i} images={images} resident={resident} currentPage={currentPage}/>)}
                    </Row>
                    <Row className="justify-content-center mt-3 mb-4">

                        <Col className={prevPage ? "text-right paginator" : "text-right paginator pseudoButtonOff" }>
                            <NavLink  to={prevPage ? "/people/" + pageID(prevPage) : "/people/" + currentPage}>Previous page</NavLink>
                        </Col>

                        <Col className={nextPage ? "text-left paginator" : "text-left paginator pseudoButtonOff" }>
                            <NavLink  to={nextPage ? "/people/" + pageID(nextPage) : "/people/" + currentPage}>Next page</NavLink>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Residents;