import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const CourseFilterMenu = () => {
  return (
    <div className="nav flex-column sw-30 pe-7">
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">CATEGORY</p>
        <Form.Check type="checkbox" label="Rails" id="categoryCheckbox1" />
        <Form.Check type="checkbox" label="React" id="categoryCheckbox2" />
        <Form.Check type="checkbox" label="Ruby" id="categoryCheckbox3" />
        <Form.Check type="checkbox" label="Redux" id="categoryCheckbox4" />
        <Form.Check type="checkbox" label="SQL" id="categoryCheckbox5" />
      </Form>
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">Type</p>
        <Form.Check type="checkbox" label="Single Article" id="categoryCheckbox1" />
        <Form.Check type="checkbox" label="Article Series" id="categoryCheckbox1" />
        <Form.Check type="checkbox" label="Video Series" id="categoryCheckbox2" />
        <Form.Check type="checkbox" label="Single Video" id="categoryCheckbox3" />
        <Form.Check type="checkbox" label="Mix" id="categoryCheckbox4" />
      </Form>
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">DURATION</p>
        <Form.Check type="checkbox" label="> 1 Hour" id="durationCheckbox1" />
        <Form.Check type="checkbox" label="1-5 Hours" id="durationCheckbox2" />
        <Form.Check type="checkbox" label="5-10 Hours" id="durationCheckbox2" />
        <Form.Check type="checkbox" label="10-20 Hours" id="durationCheckbox3" />
        <Form.Check type="checkbox" label="20+ Hours" id="durationCheckbox4" />
      </Form>

      <Form className="mb-5">
        <p className="text-small text-muted mb-3">Level</p>
        <Form.Check type="checkbox" label="No Expiernce" id="durationCheckbox1" />
        <Form.Check type="checkbox" label="BC student (1+ month)" id="durationCheckbox2" />
        <Form.Check type="checkbox" label="BC grad (3+ months)" id="durationCheckbox2" />
        <Form.Check type="checkbox" label="Advance" id="durationCheckbox2" />
      </Form>

      <Form className="mb-5">
        <p className="text-small text-muted mb-3">Price</p>
        <Form.Check type="checkbox" label="Free" id="priceCheckbox1" />
        <Form.Check type="checkbox" label="> $15" id="priceCheckbox2" />
        <Form.Check type="checkbox" label="$15-$50" id="priceCheckbox3" />
        <Form.Check type="checkbox" label="$50+" id="priceCheckbox4" />
      </Form>

      <Form className="mb-5">
        <p className="text-small text-muted mb-3">SEARCH</p>
        <Row className="g-1">
          <Col>
            <Form.Control type="text" placeholder="Keyword" />
          </Col>
          <Col xs="auto">
            <Button variant="outline-primary" className="btn-icon btn-icon-only">
              <CsLineIcons icon="chevron-right" />
            </Button>
          </Col>
        </Row>
      </Form>
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">RATING</p>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating1" />
          <label className="form-check-label" htmlFor="rating1">
            <Rating initialRating={5} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating2" />
          <label className="form-check-label" htmlFor="rating2">
            <Rating initialRating={4} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating3" />
          <label className="form-check-label" htmlFor="rating3">
            <Rating initialRating={3} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating4" />
          <label className="form-check-label" htmlFor="rating4">
            <Rating initialRating={2} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating5" />
          <label className="form-check-label" htmlFor="rating5">
            <Rating initialRating={1} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
      </Form>
      <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
        <Button variant="outline-primary" className="w-100 me-2">
          Clear
        </Button>
        <Button variant="primary" className="w-100 me-2">
          Filter
        </Button>
      </div>
    </div>
  );
};

export default CourseFilterMenu;
