import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {contentAPI} from '../services/RecommendationsService/RecommendationsService';

const rootReducer = combineReducers({
  [contentAPI.reducerPath]: contentAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(contentAPI.middleware),
  });
};
