// visitReducer.js

import { UPDATE_VISITS } from '../actions/visitActions';

const initialState = {
  visits : [] // current visits the user is looking at
};

const visitReducer = (state = initialState, action) => {
  switch (action.type) {
  	// update all current visits in store
    case UPDATE_VISITS:
      return Object.assign({}, state, {
        visits : action.visits
      })      
    default:
    	return state;
  }
};

export default visitReducer;