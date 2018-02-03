// visitReducer.js

import { UPDATE_VISIBLE_VISITS } from '../actions/visitActions';

const initialState = {
	cachedVisits  : [], // all cached visits
  visibleVisits : [], // visits the user can currently see
  visibility    : undefined
};

const visitReducer = (state = initialState, action) => {
  let defaultState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
  	// update all current visits in store
    case UPDATE_VISIBLE_VISITS:
      defaultState.visibleVisits = action.visibleVisits;
      break;
    default:
    	break;
  }
  return defaultState;
};

export default visitReducer;