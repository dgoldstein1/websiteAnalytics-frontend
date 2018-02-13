// map.js

import React from 'react';
import { connect } from 'react-redux';

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

// connect to store
let mapStateToProps = state => state;
export default connect(mapStateToProps)(MapComponent);