// mapActions.js

/**
 * actions updating the state of the map
 * created by David Goldstein on 2/8/2018
 **/

// updates which view the app is in
export const UPDATE_POSITION = 'UPDATE_POSITION';
export function updatePosition(position) {
  return {
    type: UPDATE_POSITION,
    view : position
  };
}

export const UPDATE_ZOOM = 'UPDATE_ZOOM';
export function setzoom(zoom) {
  return {
    type: UPDATE_ZOOM,
    zoom : zoom
  };
}