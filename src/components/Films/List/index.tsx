import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { getPageId } from '../../../utils'

interface ListItem {
  name?: string
  title?: string
  url: string
}

interface ListProps {
  items?: ListItem[]
  to: string
}

export const List: React.FC<ListProps> = ({ items, to }) => {
  if (!items || items.length === 0) {
    return <div>No data available</div>
  }

  return (
    <Row>
      {items.map((item) => (
        <Col key={item.url} className="col-lg-4 col-sm-6 col-6 mt-1 mb-1">
          <NavLink className="link" to={`/${to}/${getPageId(item.url)}`}>
            {item.name || item.title || 'Unknown'}
          </NavLink>
        </Col>
      ))}
    </Row>
  )
}
