import React from 'react';
import { Button } from 'react-bootstrap';

const SkillCard = ({ title }) => {
  return (
    <Button variant="outline-primary" style={{ marginRight: '10px' }}>
      {title}
    </Button>
  );
};

export default SkillCard;
