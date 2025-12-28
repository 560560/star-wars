import React, { useEffect, useMemo } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Preloader } from '../Common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isEqual } from 'lodash'
import { getSections } from '../../redux/sections-reducer'

export const Home = () => {
  const dispatch = useDispatch()
  const images = useSelector((state) => state.imagesStore.sections, isEqual)
  const sections = useSelector((state) => state.sectionsPage.sections, isEqual)

  useEffect(() => {
    if (!sections) {
      dispatch(getSections())
    }
  }, [dispatch])

  const sectionsNames = useMemo(
    () => (sections ? Object.keys(sections)?.sort() : null),
    [sections],
  )

  if (!sectionsNames) {
    return <Preloader />
  }

  return (
    <div className="homeWrapper">
      <Container className="sectionsContainer">
        <h1 className="text-center pt-5 mb-5">Welcome to Star Wars universe</h1>
        <Row className="justify-content-center">
          {sectionsNames.map((section, i) => (
            <Card
              key={i}
              className="col-lg-3 col-md-4 col-sm-5 col-12 sectionCard text-center m-3 p-0"
            >
              <Card.Img
                variant="top"
                src={images.filter((item) => item.name === section)[0].imgSrc}
                className="mx-auto mt-3 mb-2"
              />
              <Card.Body>
                <Card.Title className="mb-4">
                  <NavLink
                    to={'/' + section + '/1'}
                    className="descriptionButton sections"
                  >
                    {section.toLowerCase()}
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
