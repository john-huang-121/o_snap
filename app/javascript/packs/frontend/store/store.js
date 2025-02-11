import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const createStoreWithPreloadedState = (preloadedState = {}) => 
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
    preloadedState,  // pass in preloaded state if provided
  });

export default createStoreWithPreloadedState;