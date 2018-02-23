// index.js

// redux utils
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// reducers in this directory
import appState from'./appStateReducer';
import search from './searchReducer';
import visits from './visitReducer';
import map from './mapReducer';

const Reducer = combineReducers({
	appState,
  map,
	search,
  visits
});

const store = createStore(Reducer, applyMiddleware(logger));

export { store };