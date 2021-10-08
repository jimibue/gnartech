import { DEFAULT_PATHS } from 'config.js';
import { lazy } from 'react';

import Home from 'views/Home';
import VerticalPage from 'views/Vertical';
import ProfileStandard from 'views/pages/profile/ProfileStandard';
import ProfileSettings from 'views/pages/profile/ProfileSettings';
import InstructorDetail from 'views/instructors/InstructorDetail';
import PathsList from 'views/paths/PathsList';
import PathsDetail from 'views/paths/PathsDetail';
// import JobBoard from 'views/pages/job-board/JobBoard';

// const courses = {
//   explore: lazy(() => import('views/courses/CoursesExplore')),
//   list: lazy(() => import('views/courses/CoursesList')),
//   detail: lazy(() => import('views/courses/CoursesDetail')),
// };

const jobBoard = lazy(() => import('views/pages/job-board/JobBoard'));

const pages = {
  profile: {
    index: lazy(() => import('views/pages/profile/Profile')),
    standard: ProfileStandard, // lazy(() => import(views/pages/profile/ProfileStandard')),
    settings: ProfileSettings, // lazy(() => import(views/pages/profile/ProfileSettings')),
  },
};
// const paths = {
//   list: lazy(() => import('views/paths/PathsList')),
//   detail: lazy(() => import('views/paths/PathsDetail')),
// };
const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: `${appRoot}/horizontal`,
      component: Home,
      // label: 'menu.horizontal',
      label: 'menu.home',
      icon: 'home',
    },
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/horizontal`,
    },
    {
      path: `${appRoot}/paths`,
      component: PathsList,
      label: 'menu.paths',
      icon: 'road',
      exact: true,
    },
    {
      path: `${appRoot}/paths/:id`,
      component: PathsDetail,
      exact: true,
    },
    // {
    //   path: `${appRoot}/paths`,
    //   label: 'menu.paths',
    //   icon: 'destination',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/paths/list`,
    //   subs: [
    //     { path: '/list', label: 'menu.list', component: paths.list },
    //     { path: '/detail', label: 'menu.detail', component: paths.detail },
    //   ],
    // },
    // {
    //   path: `${appRoot}/courses`,
    //   label: 'menu.courses',
    //   icon: 'online-class',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/courses/explore`,
    //   subs: [
    //     { path: '/explore', label: 'menu.explore', component: courses.explore },
    //     { path: '/list', label: 'menu.list', component: courses.list },
    //     { path: '/detail', label: 'menu.detail', component: courses.detail },
    //   ],
    // },
    {
      path: '/profile',
      label: 'menu.profile',
      component: pages.profile.index,
      subs: [
        { path: '/standard', label: 'menu.standard', component: pages.profile.standard },
        { path: '/settings', label: 'menu.settings', component: pages.profile.settings },
      ],
    },
    {
      path: `${appRoot}/instuctor`,
      component: InstructorDetail,
      label: 'Instructor',
      icon: 'grid-2',
    },

    {
      path: `${appRoot}/vertical`,
      label: 'menu.vertical',
      icon: 'grid-3',
      component: VerticalPage,
    },
    {
      path: `${appRoot}/job-board`,
      component: jobBoard,
      label: 'menu.job-board',
      icon: 'shipping',
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
