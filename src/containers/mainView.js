// mainView.js

import React from 'react';
import { connect } from 'react-redux';

/**
 * Container for two material ui tabs, one containing map
 * the other containing the list view, and the search bar
 *
 * Created by David Goldstein on 8/9/2018
 **/


class MainView extends React.Component {

	render() {
		return (
			<div id="MainViewContainer">
				MAIN VIEW
			</div>
		);
	}
}

// connect to store
let mapStateToProps = state => state;
export default connect(mapStateToProps)(MainView);