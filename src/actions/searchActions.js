// searchActions.js

// store
import { store } from '../reducers/index';

// actions
import { fetchAndStoreVisits } from './visitActions';

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

// fetches OR query using keyword in search
export function searchOnKeyword() {
  let keyword = store.getState().search.query;
  // all string filters (i.e. excluding metro_code, lat + lon)
  let filters = {
    "ip" : keyword,
    "city" : keyword,
    "country_code" : keyword,
    "country_name" : keyword,
    "region_code" : keyword,
    "time_zone" : keyword,
    "zip_code" : keyword,
    "visit_date" : keyword,
    "query_type" : "or"
  };
  return fetchAndStoreVisits(filters);
}