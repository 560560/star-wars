import React from 'react';
import {Card, Container, Row} from "react-bootstrap";
import Preloader from "../Common/Preloader/preloader";
import {NavLink} from "react-router-dom";

const Home = ({images}) => {
    const screenHeight = window.innerHeight
    const sections = {
        "people": "http://swapi.dev/api/people/",
        "planets": "http://swapi.dev/api/planets/",
        "films": "http://swapi.dev/api/films/",
        "species": "http://swapi.dev/api/species/",
        "vehicles": "http://swapi.dev/api/vehicles/",
        "starships": "http://swapi.dev/api/starships/"
    }
    const sectionsNames = Object.keys(sections)
    if (!sections) return <Preloader/>
    else {
          return (
            <div className="homeWrapper">
                <Container style={{height: `${screenHeight}px`}}>
                    <h1 className="text-center pt-5 mb-5">Welcome to Star Wars universe</h1>
                    <Row className="justify-content-center">
                        {sectionsNames.map((section, i) =>
                            <Card  key={i} className="col-lg-3 sectionCard text-center m-3 p-0">
                                <Card.Img variant="top" src={(images.filter(item => item.name === section))[0].imgSrc} className="mx-auto mt-3 mb-2"/>
                                <Card.Body>
                                    <Card.Title className="mb-4"><NavLink to={"/" + section} className="descriptionButton sections">{section.toLowerCase()}</NavLink></Card.Title>

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