import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Clamp from 'components/clamp';
import Rating from 'react-rating';

const CourseCard = ({ title, link, price, rating, description, votes }) => {
  return (
    <Card>
      <Row className="g-0 sh-19">
        <Col xs="auto" className="h-100 position-relative">
          <img src="/img/james/scw-rn-udemy.jpeg" alt="alternate text" className="card-img-horizontal  sw-17 sw-lg-20" />
        </Col>
        <Col>
          <Card.Body style={{ padding: '18px' }}>
            <div className="mb-0 h6">
              <a target="blank" href={link} style={{ marginBottom: '5px' }} className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                <Clamp tag="span" clamp="1">
                  {title}
                </Clamp>
              </a>
              <Clamp tag="span" style={{ marginTop: '10px' }} className=" text-muted" clamp="2">
                {description}
              </Clamp>
              <div style={{ marginTop: '10px', marginBottom: '0px' }} className="card-text mb-2">
                <div>{price}</div>
              </div>
              <div>
                <Rating
                  initialRating={rating}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top">({votes})</div>
              </div>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CourseCard;
