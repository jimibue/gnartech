import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import HomeCard from 'components/james/HomeCard';
import axios from 'axios';

const Home = () => {
  const getData = async () => {
    console.log('getData:');
    try {
      const v1 = await axios.get('/api/v1/jobs');
      const v2 = await axios.get('/api/v2/jobs');
      console.log('v1:', v1.data);
      console.log('v2:', v2.data);
    } catch (err) {
      console.log('err:', err);
    }
  };
  useEffect(() => {
    console.log('Home');
    getData();
    // console.log('What???:');
  }, []);

  const title = 'Home';
  const description = 'Elearning Portal Paths List Page';

  const breadcrumbs = [{ to: '', text: 'Home' }];
  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <h2 className="small-title">What would you like to do</h2>
      <Row className="g-3 row-cols-1 row-cols-lg-2 row-cols-xxl-3 mb-5">
        <Col>
          <HomeCard
            header="Job Board"
            description="Search new job posting. Get tips and tricks for these jobs. Create your own posting. "
            img="/img/illustration/icon-database.png"
            url="/job-board"
          />
        </Col>
        <Col>
          <HomeCard
            header="Paths"
            description="Learn somerthing new today, our paths will help guide you and track through verfied way"
            img="/img/illustration/icon-experiment.png"
            url="/paths"
          />
        </Col>
        <Col>
          <HomeCard
            header="Communtity Message Board"
            description="Stay connected, post tips and tricks.  Share resources and give adive, blog network etc"
            img="/img/illustration/icon-documentation.png"
          />
        </Col>
        <Col>
          <HomeCard
            header="Coaching"
            description="Up your self game. Get advice on how to gain confidence for the job search and land your first job"
            img="/img/illustration/icon-configure.png"
          />
        </Col>
        <Col>
          <HomeCard
            header="Job Prep"
            description="Get help on that next interview.  Learn how to flex those soft skills, get help on how to standout in the pact."
            img="/img/illustration/icon-launch.png"
          />
        </Col>
        <Col>
          <HomeCard
            header="Search Users"
            description="Looking for your next hire, look no further, check out progress our users have made.  Connect and network"
            img="/img/illustration/icon-accounts.png"
          />
        </Col>
      </Row>
      {/* Popular Paths End */}

      {/* Science Behind the Paths Start */}
      <h2 className="small-title">Blog</h2>
      <Row className="row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
        <Col>
          <Card>
            <NavLink to="#">
              <img src="/img/blog/blog-image-5.jpg" className="card-img-top sh-30 theme-filter" alt="card image" />
            </NavLink>
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading">
                  How the Paths are Created
                </NavLink>
              </div>
              <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                Danish wafer donut cookie caramels gummies topping.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-1.jpg" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <NavLink to="#">Olli Hawkins</NavLink>
                  <div className="text-muted text-small">Development Lead</div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <NavLink to="#">
              <img src="/img/blog/blog-image-6.jpg" className="card-img-top sh-30 theme-filter" alt="card image" />
            </NavLink>
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading">
                  Why Should You Take a Path
                </NavLink>
              </div>
              <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                Danish wafer donut cookie caramels gummies topping.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-2.jpg" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <NavLink to="#">Laurent Wilma</NavLink>
                  <div className="text-muted text-small">Community Lead</div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <NavLink to="#">
              <img src="/img/blog/blog-image-7.jpg" className="card-img-top sh-30 theme-filter" alt="card image" />
            </NavLink>
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading">
                  Benefits of Learning with a Path
                </NavLink>
              </div>
              <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                Danish wafer donut cookie caramels gummies topping.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-3.jpg" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <NavLink to="#">Ryland Darrin</NavLink>
                  <div className="text-muted text-small">Learning Expert</div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <NavLink to="#">
              <img src="/img/blog/blog-image-8.jpg" className="card-img-top sh-30 theme-filter" alt="card image" />
            </NavLink>
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading">
                  Path Courses and Quizes
                </NavLink>
              </div>
              <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                Danish wafer donut cookie caramels gummies topping.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-4.jpg" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <NavLink to="#">Eneida Farzana</NavLink>
                  <div className="text-muted text-small">Quiz Designer</div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* Science Behind the Paths End */}
    </>
  );
};

export default Home;
