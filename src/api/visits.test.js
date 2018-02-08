
import * as visitsFunctions from './visits';

describe('api',() => {
	describe('visits',() => {
		describe('_filtersToUri',() => {
			it('returns an empty string if no filters are passed',() => {
				expect(visitsFunctions._filtersToUri()).toBe('');
			});
			it('returns query string parameters when json is passed',() => {
				expect(visitsFunctions._filtersToUri({country_code : 'US', latitude : 35, query_type : 'nor'})).toBe('?country_code=US&latitude=35&query_type=nor');
			})
		})
	})
})
