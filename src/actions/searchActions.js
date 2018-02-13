// searchActions.js

/**
 * actions for updating search query and filters
 * created by David Goldstein on 2/8/2018
 **/

// updates which view the app is in
export const UPDATE_QUERY = 'UPDATE_QUERY';
export function updateQuery(query) {
  return {
    type: UPDATE_QUERY,
    query : query
  };
}
