// appStateReducer.js

import { UPDATE_VIEW } from '../actions/appStateActions';

const initialState = {
  view : "list" // the tab the user is currently viewing i.e. 'list' or 'home'
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