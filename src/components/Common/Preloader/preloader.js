import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import preloader from "../../../assets/images/preloader.gif"

const Preloader = (props) => {

    const screenHeight = window.innerHeight
    const preloaderHeight = 200
    const preloaderPositionHeight = screenHeight - preloaderHeight / 2

    return (
        <Container>
            <Row style={{height: `${preloaderPositionHeight}px`}} className="align-items-center text-center">
                <Col> <img src={preloader} alt="Loading" className="mt-5" height={preloaderHeight}/></Col>
            </Row>

        </Container>
    );
}

export default Preloader;