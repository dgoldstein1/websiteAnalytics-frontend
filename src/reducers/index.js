// index.js

import { combineReducers, createStore, applyMiddleware } from 'redux';
import visits from './visitReducer';
import logger from 'redux-logger';

const Reducer = combineReducers({
  visits
});

const store = createStore(Reducer, applyMiddleware(logger));

export { store };