// visits.js

import appConfig from '../appConfig';

/**
 * API logic and requests with dgoldstein1/websiteAnalytics-backend
 * created by David Goldstein on 2/8/17
 **/


/**
 * fetches visits from API. The workhorse of the app.
 * @param {json} filters (i.e. )
 **/
export function fetchVisits(filters = {}, testingParams) {
	let url = `${appConfig.visitServerEndpoint}/visits${_filtersToUri(filters)}`
}

/**
 * helper function which converts filter object into uri query string
 * Note -- only exported for testing
 * 
 * @param {json} visit filters
 * @return {string} (e.g. '?region_code=MA')
 **/
export function _filtersToUri(filters = {}) {
	let params = '';
	for (let param in filters) {
		params += `&${param}=${filters[param]}`
	}
	// if we've added things, we need to put a question mark on the beginning
	if (params.length > 0)
		params = '?' + params.substr(1, params.length);
	return params;
}