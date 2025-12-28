import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import preloader from '../../../assets/images/preloader.gif'

const screenHeight = window.innerHeight
const preloaderHeight = 200
const preloaderPositionHeight = screenHeight - preloaderHeight / 2
const rowStyle = { height: `${preloaderPositionHeight}px` }

export const Preloader = () => {
  return (
    <Container>
      <Row className="align-items-center text-center" style={rowStyle}>
        <Col>
          <img
            alt="Loading"
            className="mt-5"
            height={preloaderHeight}
            src={preloader}
          />
        </Col>
      </Row>
    </Container>
  )
}
