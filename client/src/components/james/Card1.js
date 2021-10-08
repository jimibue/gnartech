import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

export default function Card1() {
  return (
    <Card className="h-100">
      <Card.Img src="https://reactjs.org/logo-og.png" className="card-img-top sh-22" alt="card image" />
      <Card.Body>
        <h5 className="heading mb-0">
          <NavLink to="/courses/detail" className="body-link stretched-link">
            React Native
          </NavLink>
        </h5>
      </Card.Body>
      <Card.Footer className="border-0 pt-0">
        <div className="mb-2">
          <Rating initialRating={5} readonly emptySymbol={<i className="cs-star text-primary" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          <div className="text-muted d-inline-block text-small align-text-top ms-1">(84)</div>
        </div>
        <div className="card-text mb-0">
          <div className="text-muted text-overline text-small">
            <del>$ 33.25</del>
          </div>
          <div>$ 22.15</div>
        </div>
      </Card.Footer>
    </Card>
  );
}
