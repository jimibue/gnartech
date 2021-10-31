import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Card, Badge } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import axios from 'axios';
import JobBoardCard from './JobBoardCard';
import SkillCard from './SkillCard';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);

  const normalizeJobs = (jobsData) => {
    return jobsData.reduce((jobsAccum, job) => {
      const jobIndex = jobsAccum.findIndex((j) => j.job_id === job.job_id);
      if (jobIndex !== -1) {
        jobsAccum[jobIndex].skills.push({
          skilId: job.skill_id,
          skillName: job.skill_name,
          desiredExperience: job.desired_experience,
          desiredLevel: job.desired_level,
        });
      } else {
        jobsAccum.push({
          companyAbout: job.company_about,
          companyName: job.company_name,

          job_id: job.job_id,
          jobDescription: job.job_description,
          skills: [
            {
              skilId: job.skill_id,
              skillName: job.skill_name,
              desiredExperience: job.desired_experience,
              desiredLevel: job.desired_level,
            },
          ],
        });
      }
      return jobsAccum;
    }, []);
  };
  const getData = async () => {
    console.log('getData:');
    try {
      const res = await axios.get('/api/v1/jobs');
      const normalizedJobs = normalizeJobs(res.data);
      console.log('normalizedJobs', normalizedJobs);
      setJobs(normalizedJobs);
    } catch (err) {
      console.log('err:', err);
    }
  };
  useEffect(() => {
    console.log('Home');
    getData();
    // console.log('What???:');
  }, []);

  const renderJobs = () => {
    return jobs.map((job) => {
      return <JobBoardCard {...job} key={Math.random()} />;
    });
  };
  const title = 'Jobs';
  const description = 'All the jobs';

  return (
    <>
      <HtmlHead title={title} description={description} />

      {/* Title Start */}
      <div className="page-title-container">
        <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
          <CsLineIcons icon="chevron-left" size="13" />
          <span className="align-middle text-small ms-1">Home</span>
        </NavLink>
        <h1 className="mb-0 pb-0 display-4" id="title">
          {title}
        </h1>
      </div>
      {/* Title End */}

      <h2 className="small-title">By Skill</h2>
      <Row className="g-2">
        <Col xs="6" xl="1" className="sh-20">
          <SkillCard title="React" />
        </Col>
        <Col xs="6" xl="1" className="sh-20">
          <SkillCard title="Rails" />
        </Col>
        <Col xs="6" xl="1" className="sh-20">
          <SkillCard title="Rails" />
        </Col>
        <Col xs="6" xl="1" className="sh-20">
          <SkillCard title="Rails" />
        </Col>
      </Row>

      {/* Courier Services Start */}
      <div className="mb-5">
        <h2 className="small-title">Jobs</h2>

        {renderJobs()}
      </div>

      {/* Box Sizes End */}
    </>
  );
};

export default JobBoard;
