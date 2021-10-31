import React from 'react';
import { Row, Col, Button, Card, Badge } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
// company_about: null
// company_name: "MX"
// desired_experience: 6
// desired_level: 2
// id: null
// job_description: "Front end job at MX"
// job_id: 1
// skill_id: 1
// skill_name: "React"

const JobBoardCard = ({ companyName, jobDescription, skills }) => {
  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <Row className="g-0">
            <Col xs="auto">{/* <img src="/img/brand/dhl.jpg" className="card-img rounded-md h-100 sh-6 sw-9" alt="thumb" /> */}</Col>
            <Col className="ps-4">
              <Row className="mb-1">
                <Col>
                  <div className="heading text-primary mb-1">{companyName}</div>
                  <div className="mb-3">{jobDescription}</div>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="gear" />
                  </Button>
                </Col>
              </Row>
              <div className="mb-3">
                <div className="text-small text-muted">Skills: {skills.length}</div>
                <div className="text-alternate">Standard Shipping</div>
                <div className="text-alternate">Priority Shipping</div>
              </div>
              <div className="mb-3">
                <div className="text-small text-muted">LOCATION</div>
                <div className="text-alternate">Domestic</div>
              </div>
              <div>
                <div className="text-small text-muted">Skills: {skills.length}</div>
                {skills.map((skill) => {
                  return (
                    <Badge key={skill.job_id} bg="outline-primary">
                      {skill.skillName} dl: {skill.desiredLevel} de: {skill.desiredExperience}
                    </Badge>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default JobBoardCard;
