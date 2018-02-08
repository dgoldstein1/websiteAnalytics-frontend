// visitReducer.js

import { UPDATE_VISITS } from '../actions/visitActions';

const initialState = {
  visits : [] // current visits the user is looking at
};

const visitReducer = (state = initialState, action) => {
  let defaultState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
  	// update all current visits in store
    case UPDATE_VISITS:
      defaultState.visits = action.visits;
      break;
    default:
    	break;
  }
  return defaultState;
};

export default visitReducer;