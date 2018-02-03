// visitActions.js

export const UPDATE_VISITS = 'UPDATE_VISITS';
export function updateVisits(visits) {
  return {
    type: UPDATE_VISITS,
    visits : visits
  };
}