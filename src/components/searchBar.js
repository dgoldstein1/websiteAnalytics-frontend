// searchBar.js

import React from 'react';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  query : PropTypes.string.isRequired
}

export default SearchBar;