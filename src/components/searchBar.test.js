// mainView.test.js

// react
import { Provider } from 'react-redux';
import React from 'react';

// testing utilities
import raf from '../../test/configuration/tempPollyfill.js'
import { configure, mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';

// actions
import { UPDATE_QUERY } from '../actions/appStateActions';

// mocks
import defaultState from '../../test/store/mocks/defaultState';
import MockAdapter from 'axios-mock-adapter';
import * as axios from 'axios';

// component to test
import SearchBar from './searchBar';

configure({ adapter: new Adapter() });

describe('components',() => {
  describe('mainView',() => {

    // configure mock store
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let wrapper;
    let store;

    beforeEach(() => {
      store = mockStore(defaultState);
      wrapper = mount(
        <Provider store={store}>
          <SearchBar query={''}/>
        </Provider>
      );
    })
    describe('rendering', () => {
      it('Main Component',() => {
        expect(wrapper.html().includes('search-bar-input')).toBe(true);
      });
      it('app bar',() => {
        expect(wrapper.html().includes('search-bar-button')).toBe(true);
      });
    })
  })
})