import React from 'react';
import { Badge, Card, NavLink } from 'react-bootstrap';
import Rating from 'react-rating';

import CsLineIcons from 'cs-line-icons/CsLineIcons';
// id(pin):1
// name(pin):"Udemy React Native max"
// link(pin):"https://google.com"
// rating(pin):4.2
// description(pin):"React Native with max SCE"
// duration(pin):40
// price(pin):0
// level(pin):"No Experience"
// course_type(pin):"Video Course"
const skills = [
  { id: 1, name: 'react' },
  { id: 2, name: 'rails' },
  { id: 3, name: 'etc' },
];

const CourseCard = ({ name, rating, price, course_type: courseType, duration, level, description }) => {
  return (
    <Card className="h-100">
      {/* <Card.Img src="/img/product/small/product-9.jpg" className="card-img-top sh-22" alt="card image" /> */}
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 20px 5px' }}>
        <div className="mb-3">
          <h4 className="mb-0 text-primary">{name}</h4>
          <p className="border-1 mb-0  text-muted">{description}</p>
        </div>
        <div className="mb-0 ">
          <div className="text-small text-muted">
            Tags:{' '}
            {skills.map((skill) => {
              return (
                <span className="text-primary" key={skill.id}>
                  {skill.name}{' '}
                </span>
              );
            })}
          </div>
          <div className="text-small text-muted">
            Source: <span className="text-primary">Youtube</span>
          </div>
        </div>
      </Card.Body>

      <Card.Footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="border-1 pt-3 pb-3">
        <div className="text-small">
          <CsLineIcons icon="star" size="11" /> {rating}
        </div>
        <div className="text-small">
          <CsLineIcons icon="clock" size="11" /> {duration} hr
        </div>
        <div className="text-small">
          <CsLineIcons icon="money" size="11" /> {price === 0 ? 'free' : `$ ${price}`}
        </div>
        <div className="text-small">
          <CsLineIcons icon="university" size="11" /> {level}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
