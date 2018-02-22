// visitReducer.test.js

import visitReducer from './visitReducer';

import { UPDATE_VISITS, SET_SELECTED_VISIT } from '../actions/visitActions';

describe('reducers',() => {
	describe('visitReducer',() => {

		const initialState = {
			visits : [],
			selectedVisit : {}
		}

		it('initializes with correct state',() => {
			expect(visitReducer(undefined, { action : undefined })).toEqual(initialState)
		})
		describe('UPDATE_VISITS',() => {
			it('updates the store with new visits',() => {
				let newVisits = [{"ip":"100.15.234.229","city":"Washington","country_code":"US","country_name":"United States","latitude":38.87900161743164,"longitude":-76.98979949951172,"metro_code":511,"region_code":"DC","time_zone":"America/New_York","zip_code":"20003","visit_date":"2018-01-25T16:48:50.238Z"}];
				let action = {
					type : UPDATE_VISITS,
					visits : newVisits
				}
				expect(visitReducer(undefined, action).visits).toEqual(newVisits)
			})
		})
		describe('SET_SELECTED_VISIT',() => {
			it('updates when a new visit is passed',() => {
				let action = {
					type : SET_SELECTED_VISIT,
					visit : {"ip":"100.15.234.229","city":"Washington","country_code":"US","country_name":"United States","latitude":38.87900161743164,"longitude":-76.98979949951172,"metro_code":511,"region_code":"DC","time_zone":"America/New_York","zip_code":"20003","visit_date":"2018-01-25T16:48:50.238Z"}
				}
				expect(visitReducer(undefined, action).selectedVisit).toEqual(action.visit)
			})
		})
	})
})