import React from 'react';
import {Container, Row} from "react-bootstrap";
import underConstruction from "../../../assets/images/underConstruction.jpg";

const UnderConstruction = (props) => {
    return (
        <Container>
            <Row className="pt-lg-5 mt-lg-5">
                <img src={underConstruction} alt=""/>
            </Row>
        </Container>
    );
}

export default UnderConstruction;