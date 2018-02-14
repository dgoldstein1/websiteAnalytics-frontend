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
import { UPDATE_VIEW } from '../actions/appStateActions';

// mocks
import defaultState from '../../test/store/mocks/defaultState';
import MockAdapter from 'axios-mock-adapter';
import * as axios from 'axios';

// component to test
import MainView from './mainView';

configure({ adapter: new Adapter() });

describe('containers',() => {
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
          <MainView />
        </Provider>
      );
    })
    describe('rendering', () => {
      it('Main Component',() => {
        expect(wrapper.html().includes(`<div id="main-view-controller">`)).toBe(true);
      });
      it('app bar',() => {
        expect(wrapper.html().includes(`id="app-bar"`)).toBe(true);
      });
      it('visits tab',() => {
        expect(wrapper.html().includes(`id=visits`))
      })
      it('map tab',() => {
        expect(wrapper.html().includes(`id=map`))
      })
    })
    describe('logic',() => {
      describe('_handleTabChange',() => {
        it('changes view on tab change',() => {
          wrapper = shallow(<MainView store={store}/>)
          // trigger user selecting first tab
          wrapper.dive().instance()._handleTabChange(undefined, 0);
          expect(store.getActions()[0].type).toBe(UPDATE_VIEW);
        })
        it('throws error if a bad tab is selected',() => {
          wrapper = shallow(<MainView store={store}/>)

          expect(() => {
            wrapper.dive().instance()._handleTabChange(undefined, "BAD TAB");
          }).toThrowError("Could not find tab with index BAD TAB")
        });
      })
    })
  })
})