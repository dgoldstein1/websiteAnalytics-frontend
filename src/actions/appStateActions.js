// appStateActions.js

/**
 * actions updating the curren app's state
 * created by David Goldstein on 2/8/2018
 **/

// updates which view the app is in
export const UPDATE_VIEW = 'UPDATE_VIEW';
export function updateView(view) {
  return {
    type: UPDATE_VIEW,
    view : view
  };
}