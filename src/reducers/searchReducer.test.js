// searchReducer.test.js

import searchReducer from './searchReducer';

import { UPDATE_QUERY } from '../actions/searchActions';

describe('reducers',() => {
	describe('searchReducer',() => {

		const initialState = {
			query : ""
		}

		it('initializes with correct state',() => {
			expect(searchReducer(undefined, { action : undefined })).toEqual(initialState)
		})

		describe('UPDATE_QUERY',() => {
			it('updates the store with a new query',() => {
				let action = {
					type : UPDATE_QUERY,
					query : "test query"
				}
				expect(searchReducer(undefined, action)).toEqual({ query : "test query"})
			})
		})
	})
})