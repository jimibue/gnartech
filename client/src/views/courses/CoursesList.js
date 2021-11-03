import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from 'hooks/useWindowSize';
import { Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { getCourses } from './courseSlice';
import CourseFilterMenu from './CourseFilterMenu';
import CourseCard from './CourseCard';

const ElearningDashboard = () => {
  const title = 'Course List';
  const description = 'Elearning Portal Course List Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'courses/explore', text: 'Courses' },
  ];

  const { themeValues } = useSelector((state) => state.settings);
  const { allCourses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const lgBreakpoint = parseInt(themeValues.lg.replace('px', ''), 10);
  const { width } = useWindowSize();
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isOpenFiltersModal, setIsOpenFiltersModal] = useState(false);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    if (width) {
      if (width >= lgBreakpoint) {
        if (!isLgScreen) setIsLgScreen(true);
        if (isOpenFiltersModal) setIsOpenFiltersModal(false);
      } else if (isLgScreen) setIsLgScreen(false);
    }
    return () => {};
    // eslint-disable-next-line
  }, [width]);

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-2 mb-md-0 me-auto">
            <div className="w-auto sw-md-30">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="auto" className="d-flex d-lg-none align-items-start mb-2 mb-md-0 order-md-1">
            <Button variant="primary" className="btn-icon btn-icon-only ms-1" onClick={() => setIsOpenFiltersModal(true)}>
              <CsLineIcons icon="menu-left" />
            </Button>
          </Col>
          <Col xs="12" className="col-md d-flex align-items-start justify-content-end justify-content-lg-start">
            <div className="me-lg-auto w-100 w-md-auto search-input-container border border-separator">
              <Form.Control type="text" placeholder="Search" />
              <span className="search-magnifier-icon">
                <CsLineIcons icon="search" />
              </span>
              <span className="search-delete-icon d-none">
                <CsLineIcons icon="close" />
              </span>
            </div>
            <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1">
              <CsLineIcons icon="sort" /> <span>Sort</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-0">
        {isLgScreen && (
          <Col xs="auto" className="d-none d-lg-flex">
            <CourseFilterMenu />
          </Col>
        )}
        <Col>
          <Row className="g-3 row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-3 mb-5">
            {allCourses &&
              allCourses.map((course) => (
                <Col key={course.id}>
                  <CourseCard {...course} />
                </Col>
              ))}
          </Row>
          <Row>
            <Col xs="12" className="text-center">
              <Button variant="outline-primary" className="sw-30">
                Load More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Filters Modal Start */}
      {!isLgScreen && (
        <Modal className="modal-left" show={isOpenFiltersModal} onHide={() => setIsOpenFiltersModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CourseFilterMenu />
          </Modal.Body>
        </Modal>
      )}

      {/* Filters Modal End */}
    </>
  );
};

export default ElearningDashboard;
