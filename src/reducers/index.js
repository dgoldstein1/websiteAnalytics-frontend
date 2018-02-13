// index.js

// redux utils
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// reducers in this directory
import appState from'./appStateReducer';
import search from './searchReducer';
import visit from './visitReducer';

const Reducer = combineReducers({
	appState,
	search,
  visit
});

const store = createStore(Reducer, applyMiddleware(logger));

export { store };