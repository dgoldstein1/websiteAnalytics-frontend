// mapReducers.js

import { 
  UPDATE_POSITION,
  UPDATE_ZOOM
 } from '../actions/mapActions';

const initialState = {
  position : [38.87900161743164, -76.98979949951172],
  zoom : 3
};

const visitReducer = (state = initialState, action) => {
  switch (action.type) {
    // set when the app is loading
    case UPDATE_POSITION:
      return Object.assign({}, state, {
        position : action.position
      })
    // update where the user is currently looking
    case UPDATE_ZOOM:
      return Object.assign({}, state, {
        zoom : action.zoom
      })
    default:
      return state;
  }
};

export default visitReducer;