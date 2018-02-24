// map.js

import React from 'react';
import PropTypes from 'prop-types';

// leaflet
import { Map, TileLayer } from 'react-leaflet';
import Marker from './marker'

// css
import 'leaflet/dist/leaflet.css';
import '../css/MainView.css';

// actions
import { setPosition, setZoom } from '../actions/mapActions';

// store
import { store } from '../reducers/index';

// utils
import _ from 'lodash';

/**
 * displays leaflet map of data in store.visits
 * can't use 'map' because that is tied to nativeCode
 *
 * Created by David Goldstein on 2/9/18
 **/

const styles = {
  leafletMap: {
    height: 400,
    width: 1000,
    padding: '100px'
  }
};

class MapComponent extends React.Component {

  componentDidMount() {
    // testing does not like rendering leaflet
    if (this.props.testingMode === true) return;
    // initialize leaflet handlers -> reduce
    const leafletMap = this.leafletMap.leafletElement;
    // on move
    // leafletMap.on('move',() => {
    //   store.dispatch(setPosition(leafletMap.getCenter()));
    // })
    // on zoom
    // leafletMap.on('zoomend', () => {
    //     store.dispatch(setZoom(leafletMap.getZoom()));
    // });
  }

  render() {
    return (
      <div>
        <h1> Showing {this.props.visits.length} visits to your website from {_.uniqBy(this.props.visits, 'ip').length} distinct IP Addresses</h1>
        <div className={'map-component'} id={'map-component'}>
          <Map
            ref={m => { this.leafletMap = m; }}
            clas={'leaflet-map'}
            zoom={this.props.map.zoom}
            center={this.props.map.position}
            style={styles.leafletMap}
          >
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {this.props.visits.map((visit, key) => {
              return (
                <Marker visit={visit} key={key}/>  
              );
            })}
          </Map>
        </div>
      </div>
    );
  }
}

MapComponent.propTypes = {
  visits: PropTypes.array.isRequired,
  map : PropTypes.object.isRequired,
};

export default MapComponent;
