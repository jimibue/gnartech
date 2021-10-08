import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';
import CourseCard from 'components/james/CourseCard';
import CourseCard1 from 'components/james/CourseCard1';

const PathsDetail = () => {
  const title = 'Path Detail';
  const description = 'Elearning Portal Path Detail Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'paths/list', text: 'Path List' },
  ];
  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="chevron-right" /> <span>Start</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        <Col xl="4" xxl="3">
          {/* Summary Start */}
          <h2 className="small-title">Summary</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-performance.png" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/detail" className="heading stretched-link">
                    React Native
                  </NavLink>
                </div>
              </div>
              <div className="text-muted mb-4">
                Step up your dev game, expand your skills as a javascript developer and react devolper while gaining new expirence as mobile devopler by
                learning React Native.
              </div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="online-class" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Sections</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">8</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Checkpoints</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5</div>
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
                      <div className="sh-4 d-flex align-items-center text-alternate">~50 hours</div>
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
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Prereqs</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">JS, React</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="science" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Intermiedate</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Summary End */}
        </Col>
        <Col xl="8" xxl="9">
          {/* Courses Start */}
          <h2 className="small-title">Courses</h2>
          <Row className="g-3 mb-5">
            {/* <Col md="12" lg="6" xl="12" xxl="6"></Col> */}
            <Col md="12" lg="6" xl="12" xxl="6">
              <CourseCard
                title="Intro to Redux"
                link="https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867"
                description="This is a great course by Dan A. The guy who actually created this library so he is a great source, does this auto elispes..."
                votes={203}
                rating={4.7}
              />
            </Col>
            <Col md="12" lg="6" xl="12" xxl="6">
              <CourseCard title="Intro to Redux" link="https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867" />
            </Col>

            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-8.jpg" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Advanced Sandwich Making Techniques
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 22.25</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          {/* Courses End */}

          {/* Quizes Start */}
          <h2 className="small-title">Quizes</h2>
          <Row className="row-cols-1 row-cols-sm-1 row-cols-xxl-2 g-3">
            <Col>
              <CourseCard1 header="React Native" description="This could be another way to do a card that has cute little mother fuc#@#$ing icons" />
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <NavLink to="#" className="body-link stretched-link d-block mb-2 sh-3 h6 lh-1-5">
                    <Clamp tag="span" clamp="1">
                      Advanced Sandwich Making Techniques
                    </Clamp>
                  </NavLink>
                  <Clamp tag="span" className="mb-3 text-muted sh-5" clamp="2">
                    Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
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
                          <div className="sh-4 d-flex align-items-center text-alternate">20</div>
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
                          <div className="sh-4 d-flex align-items-center text-alternate">4m</div>
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
                          <div className="sh-4 d-flex align-items-center text-alternate">Novice</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <NavLink to="#" className="body-link stretched-link d-block mb-2 sh-3 h6 lh-1-5">
                    <Clamp tag="span" clamp="1">
                      Advanced Sandwich Making Techniques
                    </Clamp>
                  </NavLink>
                  <Clamp tag="span" className="mb-3 text-muted sh-5" clamp="2">
                    Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
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
                          <div className="sh-4 d-flex align-items-center text-alternate">40</div>
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
                          <div className="sh-4 d-flex align-items-center text-alternate">10m</div>
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
                          <div className="sh-4 d-flex align-items-center text-alternate">Expert</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <NavLink to="#" className="body-link stretched-link d-block mb-2 sh-3 h6 lh-1-5">
                    <Clamp tag="span" clamp="1">
                      Apple Cake Recipe for Starters
                    </Clamp>
                  </NavLink>
                  <Clamp tag="span" className="mb-3 text-muted sh-5" clamp="2">
                    Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
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
                          <div className="sh-4 d-flex align-items-center text-alternate">40</div>
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
                          <div className="sh-4 d-flex align-items-center text-alternate">10m</div>
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
                          <div className="sh-4 d-flex align-items-center text-alternate">Expert</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Quizes End */}
        </Col>
      </Row>
    </>
  );
};

export default PathsDetail;
