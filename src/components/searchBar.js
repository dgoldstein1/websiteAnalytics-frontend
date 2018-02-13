// searchBar.js

import React from 'react';
import { connect } from 'react-redux';

/**
 * Displays interactive search bar for user to make requests to visits
 *
 * Created by David Goldstein on 2/8/18
 **/

 class SearchBar extends React.Component {

	render() {
		return (
			<div id="search-bar">
				Search Bar
			</div>
		);
	}
}

// connect to store
let mapStateToProps = state => state;
export default connect(mapStateToProps)(SearchBar);