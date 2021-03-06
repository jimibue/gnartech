// import redux and persist plugins
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import persistStore from 'reduxjs-toolkit-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist/es/constants';

// import theme reducers
import settingsReducer from 'settings/settingsSlice';
import layoutReducer from 'layout/layoutSlice';
import langReducer from 'lang/langSlice';
import authReducer from 'auth/authSlice';

import menuReducer from 'layout/nav/main-menu/menuSlice';
import notificationReducer from 'layout/nav/notifications/notificationSlice';
import scrollspyReducer from 'components/scrollspy/scrollspySlice';

// import persist key
import { REDUX_PERSIST_KEY } from 'config.js';
import jobsReducer from 'views/pages/job-board/JobsSlice';
import coursesReducer from 'views/courses/courseSlice';

// import app reducers
import calendarReducer from 'views/community/calendar/calendarSlice';
import contactsReducer from 'views/community/contacts/contactsSlice';
import chatReducer from 'views/community/chat/chatSlice';
import mailboxReducer from 'views/community/mailbox/mailboxSlice';
import tasksReducer from 'views/community/tasks/tasksSlice';

const persistConfig = {
  key: REDUX_PERSIST_KEY,
  storage,
  whitelist: ['menu', 'settings', 'lang'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    settings: settingsReducer,
    layout: layoutReducer,
    lang: langReducer,
    auth: authReducer,
    menu: menuReducer,
    notification: notificationReducer,
    scrollspy: scrollspyReducer,
    jobs: jobsReducer,
    courses: coursesReducer,
    calendar: calendarReducer,
    contacts: contactsReducer,
    chat: chatReducer,
    mailbox: mailboxReducer,
    tasks: tasksReducer,
  })
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistedStore = persistStore(store);
export { store, persistedStore };
