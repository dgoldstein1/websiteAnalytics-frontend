// table.js

import React from 'react';
import { connect } from 'react-redux';

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

// connect to store
let mapStateToProps = state => state;
export default connect(mapStateToProps)(Table);