import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';

const CourseCard1 = ({ header, description }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <NavLink to="#" className="body-link stretched-link d-block mb-2 sh-3 h6 lh-1-5">
          <Clamp tag="span" clamp="1">
            {header}
          </Clamp>
        </NavLink>
        <Clamp tag="span" className="mb-3 text-muted sh-5" clamp="2">
          {description}
        </Clamp>
        <Row className="g-0 align-items-center mb-1">
          <Col xs="auto">
            <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
              <CsLineIcons icon="form-check" className="text-primary" />
            </div>
          </Col>
          <Col className="ps-3">
            <Row className="g-0">
              <Col>
                <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
              </Col>
              <Col xs="auto">
                <div className="sh-4 d-flex align-items-center text-alternate">25</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0 align-items-center mb-1">
          <Col xs="auto">
            <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
              <CsLineIcons icon="clock" className="text-primary" />
            </div>
          </Col>
          <Col className="ps-3">
            <Row className="g-0">
              <Col>
                <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
              </Col>
              <Col xs="auto">
                <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0 align-items-center mb-1">
          <Col xs="auto">
            <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
              <CsLineIcons icon="graduation" className="text-primary" />
            </div>
          </Col>
          <Col className="ps-3">
            <Row className="g-0">
              <Col>
                <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
              </Col>
              <Col xs="auto">
                <div className="sh-4 d-flex align-items-center text-alternate">Beginner</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CourseCard1;
