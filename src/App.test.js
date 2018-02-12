// App.test.js

// appConfig
import appConfig from './appConfig';

// react
import { Provider } from 'react-redux';
import React from 'react';

// testing utilities
import raf from '../test/configuration/tempPollyfill.js'
import { configure, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
	
// mocks
import defaultState from '../test/store/mocks/defaultState';
import MockAdapter from 'axios-mock-adapter';
import * as axios from 'axios';
import mockApiResponse from '../test/apiResponses/noFilterVisits';

// component to test
import App from './App';

// configure adapted
configure({ adapter: new Adapter() });

describe('Misc',() => {
	describe.only('App',() => {

		// configure mock store
		const middlewares = [thunk];
		const mockStore = configureStore(middlewares);
		let wrapper;
		let store;

		// setup mock responses
		let apiMock = new MockAdapter(axios);
		apiMock.onGet(appConfig.visitServerEndpoint+"visits").reply(200, mockApiResponse);

		beforeEach(() => {
			store = mockStore(defaultState);
			wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
		})

		it('renders Main Component',() => {
			expect(wrapper.html().includes(`<div id="MainViewContainer">`)).toBe(true);
		})
	})
})