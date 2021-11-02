import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCourses = createAsyncThunk('courses/getCourses', async (dispatch, getState) => {
  console.log('yoyoyoyo');
  return axios.get('/api/v1/courses');
});
const normalizeCourses = (coursesData, filters) => {
  return coursesData.reduce((coursesAccum, job) => {
    return coursesAccum;
  }, []);
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    coursesRawData: [],
    currentCourses: [],
    jobSkills: [],
    status: null,
    jobSkillFilters: [],
  },
  reducers: {
    // This coursesSetFilter action  works but is messy, refactor sometime...
    coursesSetFilter(state, action) {
      // get current jobSkillState
      const filters = current(state.jobSkillFilters);
      const updatedFilters = filters.includes(action.payload) ? filters.filter((f) => f !== action.payload) : [...filters, action.payload];
      state.jobSkillFilters = updatedFilters;

      if (updatedFilters.length > 0) {
        state.currentCourses = current(state.allCourses).filter((job) => {
          return job.skills.map((j) => j.skillName).filter((js) => updatedFilters.includes(js)).length > 0;
        });
      } else {
        state.currentCourses = current(state.allCourses);
      }
    },
  },
  extraReducers: {
    [getCourses.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getCourses.fulfilled]: (state, action) => {
      console.log('HELLLO');
      const allCourses = normalizeCourses(action.payload.data);
      state.status = 'success';
      state.allCourses = action.payload.data;
      state.currentCourses = allCourses;
    },
    [getCourses.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { coursesSetFilter } = coursesSlice.actions;

export default coursesSlice.reducer;
