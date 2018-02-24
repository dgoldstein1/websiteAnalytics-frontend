// marker.test.js

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
import { _generatePopup } from './marker';

const visit = defaultState.visits.visits[0];

describe('components',() => {
  describe('marker',() => {
    describe('render', () => {
      it('timeAgo',() => {
        expect(JSON.stringify(_generatePopup(visit)).includes(`"date":"2018-01-25T16:48:53.262Z","live":true,"component":"time","minPeriod":0,"maxPeriod":null}`)).toEqual(true);
      })
      it('lat lon', () => {
        expect(JSON.stringify(_generatePopup(visit)).includes(`"Lat, Lon : ",38.818599700927734,",",-77.0625`)).toEqual(true);
      })
      it('ip address',() => {
        expect(JSON.stringify(_generatePopup(visit)).includes(`"Ip Address : ","96.83.122.145"`)).toEqual(true);
      })
      it("visit date",() => {
        expect(JSON.stringify(_generatePopup(visit)).includes(`"GMT : ","2018-01-25T16:48:53.262Z"`)).toEqual(true);
      })
    })
  })
})