// visits.js

// app Configuration
import appConfig from "../appConfig";

// library to make calls
import * as axios from "axios";

/**
 * API logic and requests with dgoldstein1/websiteAnalytics-backend
 * created by David Goldstein on 2/8/17
 **/

/**
 * fetches visits from API. The workhorse of the app.
 * @param {json} filters (i.e. {region_code : MA})
 * @param {json} testing params (callback) used in order to avoid mocking requests
 *
 * @return {Promise} {data : response from api, success : success?, err : err from api}
 **/
export function fetchVisits(filters = {}) {
  let url = `${appConfig.visitServerEndpoint}/${_filtersToUri(filters)}`;
  console.log(url);
  return axios
    .get(url)
    .then(res => {
      return { success: true, data: res.data };
    })
    .catch(err => {
      return { success: false, err: err.response.data };
    });
}

/**
 * helper function which converts filter object into uri query string
 * Note -- only exported for testing
 *
 * @param {json} visit filters
 * @return {string} (e.g. '?region_code=MA')
 **/
export function _filtersToUri(filters = {}) {
  let params = "";

  // if empty filters with only query_type, return empty string
  let isEmpty = true;
  for (let i in filters) {
    if (filters[i] && i !== "query_type") isEmpty = false;
  }
  if (isEmpty) return params;

  // else add all params to query string
  for (let param in filters) {
    params += `&${param}=${filters[param]}`;
  }
  // if we've added things, we need to put a question mark on the beginning
  if (params.length > 0) params = "?" + params.substr(1, params.length);

  return params;
}
