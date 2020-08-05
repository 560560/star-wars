import React from 'react';
import {Card, Container, Row} from "react-bootstrap";
import Preloader from "../Common/Preloader/preloader";
import {NavLink} from "react-router-dom";

const Home = ({images, sections}) => {
    const screenHeight = window.innerHeight

    if (!sections) return <Preloader/>
    else {
        const sectionsNames = Object.keys(sections)
        return (
            <div className="homeWrapper">
                <Container style={{height: `${screenHeight}px`}}>
                    <h1 className="text-center pt-5 mb-5">Welcome to Star Wars universe</h1>
                    <Row className="justify-content-center">
                        {sectionsNames.map((section, i) =>
                            <Card key={i} className="col-lg-3 sectionCard text-center m-3 p-0">
                                <Card.Img variant="top" src={(images.filter(item => item.name === section))[0].imgSrc} className="mx-auto mt-3 mb-2"/>
                                <Card.Body>
                                    <Card.Title className="mb-4"><NavLink to={"/" + section + "/1"}
                                                                          className="descriptionButton sections">{section.toLowerCase()}</NavLink></Card.Title>

                                </Card.Body>
                            </Card>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;