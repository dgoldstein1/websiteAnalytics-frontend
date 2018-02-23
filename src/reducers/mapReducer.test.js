// mapReducer.test.js

import mapReducer from './mapReducer';

import { 
  UPDATE_POSITION,
  UPDATE_ZOOM
 } from '../actions/mapActions';

describe('reducers',() => {
  describe('map',() => {

    const initialState = {
      position : [38.87900161743164, -76.98979949951172],
      zoom : 10
    }

    it('initializes with correct state',() => {
      expect(mapReducer(undefined, { action : undefined })).toEqual(initialState)
    })

    describe('UPDATE_POSITION',() => {
      it('updates the store with a new position',() => {
        let action = {
          type : UPDATE_POSITION,
          position : [0,0]
        }
        expect(mapReducer(undefined, action).position).toEqual([0,0])
      })
    })
    describe('UPDATE_ZOOM',() => {
      it('updates the store with a new zoom level',() => {
        let action = {
          type : UPDATE_ZOOM,
          zoom : 11
        }
        expect(mapReducer(undefined, action).zoom).toEqual(11)
      })
    })
  })
})