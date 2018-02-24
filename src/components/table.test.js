//table.test.js

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
import { UPDATE_VIEW } from '../actions/appStateActions';

// mocks
import defaultState from '../../test/store/mocks/defaultState';
import MockAdapter from 'axios-mock-adapter';
import * as axios from 'axios';

// component to test
import Table from './table';
import { columns } from './table';

configure({ adapter: new Adapter() });

describe('components',() => {
  describe('table',() => {

    // configure mock store
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let wrapper;
    let store;

    beforeEach(() => {
      store = mockStore(defaultState);
      wrapper = mount(
        <Table visits={defaultState.visits}/>
      )
    })
    describe('render', () => {
      it('column headers',() => {
        columns.forEach(c => {
          expect(wrapper.html().includes(c.display)).toBe(true);
        })
      })
      it('table rows',() => {
        defaultState.visits.visits.forEach(v => {
          columns.forEach(c => {
            expect(wrapper.html().includes(v[c.key])).toBe(true);
          })
        })
      })
    })
  })
})