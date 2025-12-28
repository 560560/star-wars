import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { sectionsExtras } from './constants'

export const Home = () => {
  return (
    <div className="homeWrapper">
      <Container className="sectionsContainer">
        <h1 className="text-center pt-5 mb-5">Welcome to Star Wars universe</h1>
        <Row className="justify-content-center">
          {sectionsExtras.map(({ name, imgSrc }) => (
            <Card
              key={name}
              className="col-lg-3 col-md-4 col-sm-5 col-12 sectionCard text-center m-3 p-0"
            >
              <Card.Img
                className="mx-auto mt-3 mb-2"
                src={imgSrc}
                variant="top"
              />
              <Card.Body>
                <Card.Title className="mb-4">
                  <NavLink
                    className="descriptionButton sections"
                    to={`/${name}`}
                  >
                    {name.toLowerCase()}
                  </NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  )
}
