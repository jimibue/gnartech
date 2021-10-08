import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function HomeCard({ header, description, img, url = '' }) {
  return (
    <Card>
      <Card.Body>
        <div className="text-center">
          <img src={img} className="theme-filter" alt="performance" />
          <div className="d-flex flex-column sh-5">
            <NavLink to={url} className="heading stretched-link">
              {header}
            </NavLink>
          </div>
        </div>
        <div className="text-muted text-center">{description}</div>
      </Card.Body>
    </Card>
  );
}
