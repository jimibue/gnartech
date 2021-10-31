import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const SkillCard = ({ title }) => {
  return (
    <Card className="h-30 hover-scale-up position-relative">
      <Card.Body className="text-center">
        {/* <div className="sw-5 sh-5 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl mx-auto">
        <div className="text-white">S</div>
      </div> */}
        <NavLink to="#" className="heading mt-1 stretched-link">
          {title}
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;
