import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const getJobs = createAsyncThunk('jobs/getJobs', async (dispatch, getState) => {
  return axios.get('/api/v1/jobs');
});
const normalizeJobs = (jobsData, filters) => {
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

const normalizeJobSkills = (jobsData) => {
  return jobsData.reduce((skillsAcum, job) => {
    const index = skillsAcum.findIndex((s) => s.id === job.skill_id);
    if (index === -1) {
      skillsAcum.push({ skill: job.skill_name, id: job.skill_id });
    }
    return skillsAcum;
  }, []);
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobsRawData: [],
    currentJobs: [],
    jobSkills: [],
    status: null,
    jobSkillFilters: [],
  },
  reducers: {
    // This jobsSetFilter action  works but is messy, refactor sometime...
    jobsSetFilter(state, action) {
      // get current jobSkillState
      const filters = current(state.jobSkillFilters);
      const updatedFilters = filters.includes(action.payload) ? filters.filter((f) => f !== action.payload) : [...filters, action.payload];
      state.jobSkillFilters = updatedFilters;

      if (updatedFilters.length > 0) {
        state.currentJobs = current(state.allJobs).filter((job) => {
          return job.skills.map((j) => j.skillName).filter((js) => updatedFilters.includes(js)).length > 0;
        });
      } else {
        state.currentJobs = current(state.allJobs);
      }
    },
  },
  extraReducers: {
    [getJobs.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getJobs.fulfilled]: (state, action) => {
      console.log('HELLLO');
      const allJobs = normalizeJobs(action.payload.data);
      state.status = 'success';
      state.allJobs = allJobs;
      state.currentJobs = allJobs;
      state.jobSkills = normalizeJobSkills(action.payload.data);
    },
    [getJobs.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { jobsSetFilter } = jobsSlice.actions;

export default jobsSlice.reducer;
