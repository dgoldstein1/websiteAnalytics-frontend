// appStateReducer.test.js

import appStateReducer from './appStateReducer';

import { UPDATE_VIEW } from '../actions/appStateActions';

describe('reducers',() => {
	describe('appStateReducer',() => {

		const initialState = {
			view : "list"
		}

		it('initializes with correct state',() => {
			expect(appStateReducer(undefined, { action : undefined })).toEqual(initialState)
		})

		describe('UPDATE_VIEW',() => {
			it('updates the store with a new view',() => {
				let action = {
					type : UPDATE_VIEW,
					view : "map"
				}
				expect(appStateReducer(undefined, action)).toEqual({ view : "map"})
			})
		})
	})
})