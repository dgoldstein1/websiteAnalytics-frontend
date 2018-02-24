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

class MarkerComponent extends React.Component {

  constructor(props) {
    super(props);
    // bound methods
    this._generateMarkerClick = this._generateMarkerClick.bind(this);
  }

  /**
   * generates html to be displayed when user clicks a marker
   * @return {html} for this visit
   **/
  _generateMarkerClick() {
    return (
      <div>
        <h3>
          <TimeAgo date={this.props.visit['visit_date']} live={true} />
        </h3>
        <h5>
          City : {this.props.visit['city']}, {this.props.visit['region_code']} {this.props.visit['zip_code']} {this.props.visit['country_code']}
          <br/>
          Lat, Lon : {this.props.visit['latitude']},{this.props.visit['longitude']}
          <br/>
          Ip Address : {this.props.visit['ip']}
          <br/>
          GMT : {this.props.visit['visit_date']}
        </h5>
      </div>
    ) 
  }

  render() {
    const visit = this.props.visit;
    return (
      <Circle center={[visit.latitude, visit.longitude]} color="#3f51b5" radius={2000} opacity={.001}>
        <Marker position={[visit.latitude, visit.longitude]} color={"#3f51b5"}>
          <Popup>
            {this._generateMarkerClick()}
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