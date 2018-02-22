// map.js

import React from 'react';
import PropTypes from 'prop-types';

// leaflet
import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';

// css
import 'leaflet/dist/leaflet.css';
import '../css/MainView.css';

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

const startingPosition = [38.87900161743164, -76.98979949951172];
const startingZoom = 10;

class MapComponent extends React.Component {
  render() {
    return (
      <div>
        <h1> Showing {this.props.visits.length} visits to your website</h1>
        <div className={'map-component'} id={'map-component'}>
          <Map
            clas={'leaflet-map'}
            zoom={startingZoom}
            center={startingPosition}
            style={styles.leafletMap}
          >
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {this.props.visits.map((visit, id) => {
              return (
                <CircleMarker center={[visit.latitude, visit.longitude]} color="red">
                  <Marker position={[visit.latitude, visit.longitude]}>
                    <Popup>
                      <span>{JSON.stringify(visit, null, 2)}</span>
                    </Popup>
                  </Marker>
                </CircleMarker>
              );
            })}
          </Map>
        </div>
      </div>
    );
  }
}

MapComponent.propTypes = {
  visits: PropTypes.array.isRequired
};

export default MapComponent;
