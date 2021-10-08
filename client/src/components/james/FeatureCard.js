import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function () {
  const x = 'experiment';
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="text-center">
          <img src={`/img/illustration/icon-${x}.png`} className="theme-filter" alt="performance" />
          <div className="d-flex flex-column sh-5">
            <NavLink to="/paths/list" className="heading stretched-link">
              Find a job
            </NavLink>
          </div>
        </div>
        <div className="text-muted">Your one stop shop for getting hired</div>
      </Card.Body>
    </Card>
  );
}
