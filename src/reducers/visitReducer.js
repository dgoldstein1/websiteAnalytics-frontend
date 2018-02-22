// visitReducer.js

import { UPDATE_VISITS, SET_SELECTED_VISIT } from '../actions/visitActions';

const initialState = {
  visits : [], // current visits the user is looking at
  selectedVisit : {} // the visit currently selected
};

const visitReducer = (state = initialState, action) => {
  switch (action.type) {
  	// update all current visits in store
    case UPDATE_VISITS:
      return Object.assign({}, state, {
        visits : action.visits
      })
    case SET_SELECTED_VISIT:
      return Object.assign({}, state, {
        selectedVisit : action.visit
      })   
    default:
    	return state;
  }
};

export default visitReducer;