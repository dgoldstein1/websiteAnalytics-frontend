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

// mocks
import defaultState from '../../test/store/mocks/defaultState';
import MockAdapter from 'axios-mock-adapter';
import * as axios from 'axios';

// utils
import _ from 'lodash';

// component to test
import MapComponent from './map';

configure({ adapter: new Adapter() });

describe('components',() => {
  describe('map',() => {

    // configure mock store
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let wrapper;
    let store;

    beforeEach(() => {
      store = mockStore(defaultState);
      wrapper = shallow(
        <MapComponent
          visits={defaultState.visits.visits}
          map={defaultState.map}
          testingMode={true}
        />
      )
    })
    describe('render', () => {
      it('leaflet map',() => {
        expect(wrapper.html().includes(`<div class="map-component" id="map-component">`)).toEqual(true);
      })
      it('displays number of visits',() => {
        let numberOfVisits = defaultState.visits.visits.length;
        expect(wrapper.html().includes(`Showing ${numberOfVisits} visits to your website`)).toEqual(true);
      })
      it('displays number of unique IPs',() => {
        let uniqueIps = _.uniqBy(defaultState.visits.visits, 'ip').length
        console.log(wrapper.html())
        expect(wrapper.html().includes(`from ${uniqueIps} distinct IP Addresses`)).toEqual(true)
      })
    })
  })
})