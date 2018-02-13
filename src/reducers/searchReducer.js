// searchReducer.js

import { UPDATE_QUERY } from '../actions/searchActions';

const initialState = {
  query : "" // current visits the user is looking at
};

const visitReducer = (state = initialState, action) => {
  switch (action.type) {
  	// update the current search keyword in store
    case UPDATE_QUERY:
      return Object.assign({}, state, {
        query : action.query
      })      
    default:
    	return state;
  }
};

export default visitReducer;