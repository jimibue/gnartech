import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Card, Badge, ButtonGroup } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import JobBoardCard from './JobBoardCard';
import JobBoardSearch from './JobBoardSearch';
import { getJobs, jobsSetFilter } from './JobsSlice';

const JobBoard = () => {
  const { currentJobs, status, jobSkills } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
    // dispatch(jobsSetFilter(['React', 'Rails']));
  }, []);

  const renderJobs = () => {
    return currentJobs.map((job) => {
      return <JobBoardCard {...job} key={Math.random()} />;
    });
  };
  const title = 'Jobs';
  const description = 'All the jobs';

  if (status === 'loading') return <p>loading</p>;

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

      {/* tool for finding job */}
      <JobBoardSearch jobSkills={jobSkills} />

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
