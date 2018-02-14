// table.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * displays material UI table of data in store.visits
 * 
 * Created by David Goldstein on 2/9/18
 **/

class Table extends React.Component {

	render() {
		return (
			<div id="main-view-controller">
				Table
			</div>
		);
	}
}

Table.propTypes = {
  visits : PropTypes.array.isRequired
}

export default Table;