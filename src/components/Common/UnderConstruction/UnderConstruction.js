import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import underConstruction from "../../../assets/images/underConstruction.png";

const UnderConstruction = (props) => {
    return (
        <Container className="flex" >
            <Row className="underConstruction align-items-center align-content-center">
                <Col >
                    <img src={underConstruction} className="mx-auto d-block" alt=""/>
                </Col>
            </Row>
        </Container>
    );
}

export default UnderConstruction;