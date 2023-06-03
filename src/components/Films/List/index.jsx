import { Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getPageId } from '../../../utils';
import React from 'react';
import { useDispatch } from 'react-redux';

export const List = ({ items, to, isLoadingError, onReload }) => {
  const dispatch = useDispatch();
  if (isLoadingError) {
    return (
      <div>
        Something goes wrong. Please{' '}
        <Button variant="secondary" size="sm" onClick={() => dispatch(onReload)}>
          Reload
        </Button>
      </div>
    );
  }
  return (
    <Row>
      {items.map((item, i) => (
        <Col key={i} className="col-lg-4 col-sm-6 col-6 mt-1 mb-1">
          <NavLink className="link" to={`/${to}/${getPageId(item.url)}`}>
            {item.name}
          </NavLink>
        </Col>
      ))}
    </Row>
  );
};
