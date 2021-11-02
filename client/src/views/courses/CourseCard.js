import React from 'react';
import { Card, NavLink } from 'react-bootstrap';
import Rating from 'react-rating';

// id(pin):1
// name(pin):"Udemy React Native max"
// link(pin):"https://google.com"
// rating(pin):4.2
// description(pin):"React Native with max SCE"
// duration(pin):40
// price(pin):0
// level(pin):"No Experience"
// course_type(pin):"Video Course"

const CourseCard = ({ name, rating, price, course_type: courseType, duration, level, description }) => {
  return (
    <Card className="h-100">
      {/* <Card.Img src="/img/product/small/product-9.jpg" className="card-img-top sh-22" alt="card image" /> */}
      <Card.Body>
        <h5 className="heading mb-0">
          <NavLink to="/courses/detail" className="body-link stretched-link">
            {name}
          </NavLink>
          <span className="text-muted  text-small">{level}</span>
        </h5>
        <p className="text-muted">{description}</p>
      </Card.Body>
      <Card.Footer className="border-0 pt-0">
        <div className="mb-2">
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={<i className="cs-star text-primary" />}
            fullSymbol={<i className="cs-star-full text-primary" />}
          />
          <div className="text-muted d-inline-block text-small align-text-top ms-1">(53)</div>
        </div>
        <div className="card-text mb-0">
          <div className="text-muted  text-small">
            {courseType} ({duration} hours)
          </div>
          <div> {price === 0 ? 'free' : `$ ${price}`}</div>
          <div> </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
