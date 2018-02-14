// map.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * displays leaflet map of data in store.visits
 * can't use 'map' because that is tied to nativeCode
 * 
 * Created by David Goldstein on 2/9/18
 **/

class MapComponent extends React.Component {

	render() {
		return (
			<div id="main-view-controller">
				Map
			</div>
		);
	}
}

MapComponent.propTypes = {
  visits : PropTypes.array.isRequired
}

export default MapComponent;