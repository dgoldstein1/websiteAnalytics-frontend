// visitActions.js

// redux store
import { store } from '../reducers/index';

// api
import { fetchVisits } from '../api/visits';

// actions
import { setLoading } from './appStateActions'

/**
 * the actions for fetching, updating, and storing visits 
 * created by David Goldstein on 2/8/2018
 **/

export const UPDATE_VISITS = 'UPDATE_VISITS';
export function updateVisits(visits) {
  return {
    type: UPDATE_VISITS,
    visits : visits
  };
}

/**
 * fetches and stores visits to store.visits.visits
 * @param {json} filters (uses store.search.filters) by default
 * @param {function} callback on success / error
 **/
export function fetchAndStoreVisits(filters, callback = () => {}) {
  store.dispatch(setLoading(true))
	fetchVisits(filters).then(res => {
    if (res.success && res.data !== undefined) {
      store.dispatch(updateVisits(res.data))
    }
    store.dispatch(setLoading(false))
	})
}