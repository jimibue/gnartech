import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { jobsSetFilter } from './JobsSlice';

export default function JobBoardSearch({ jobSkills }) {
  const dispatch = useDispatch();
  const { jobSkillFilters } = useSelector((state) => state.jobs);
  const getVariant = (skill) => {
    return jobSkillFilters.includes(skill) ? 'primary' : 'outline-primary';
  };

  return (
    <div>
      <ButtonGroup>
        {jobSkills.map((js) => (
          <Button onClick={() => dispatch(jobsSetFilter(js.skill))} key={`js-${js.id}`} variant={getVariant(js.skill)} style={{ marginRight: '10px' }}>
            {js.skill}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
