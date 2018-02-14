// appStateReducer.js

import { UPDATE_VIEW } from '../actions/appStateActions';

const initialState = {
  view : "visits", // the current view
  availableViews : ["visits", "map"] // list of views available 
};

const visitReducer = (state = initialState, action) => {
  switch (action.type) {
  	// update where the user is currently looking
    case UPDATE_VIEW:
      return Object.assign({}, state, {
        view : action.view
      })      
    default:
    	return state;
  }
};

export default visitReducer;