// marker.js

// React
import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';

// leaflet
import { Marker, Popup, Circle } from 'react-leaflet';

/**
 * The leaflet marker on the map which displays where a visit is
 * Created by David Goldstein on 2.24.18
 **/

/**
 * generates html to be displayed when user clicks a marker
 * @return {html} for this visit
 **/
export const _generatePopup = function(visit) {
  return (
    <div>
      <h3>
        <TimeAgo date={visit['visit_date']} live={true} />
      </h3>
      <h5>
        City : {visit['city']}, {visit['region_code']} {visit['zip_code']} {visit['country_code']}
        <br/>
        Lat, Lon : {visit['latitude']},{visit['longitude']}
        <br/>
        Ip Address : {visit['ip']}
        <br/>
        GMT : {visit['visit_date']}
        <br/>
        Ref : {visit['href']}
      </h5>
    </div>
  ) 
}

class MarkerComponent extends React.Component {

  render() {
    const visit = this.props.visit;
    return (
      <Circle center={[visit.latitude, visit.longitude]} color="#3f51b5" radius={2000} opacity={.001}>
        <Marker position={[visit.latitude, visit.longitude]} color={"#3f51b5"}>
          <Popup>
            {_generatePopup(visit)}
          </Popup>
        </Marker>
      </Circle>
    );
  }

}

MarkerComponent.propTypes = {
  // the visit to render
  visit : PropTypes.object.isRequired
};

export default MarkerComponent;