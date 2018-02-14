// mainView.js

import React from 'react';
import { connect } from 'react-redux';

// material ui
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

// children components
import SearchBar from '../components/searchBar';
import Table from '../components/table';
import MapComponent from '../components/map';

// actions
import { updateView } from '../actions/appStateActions';

/**
 * Container for two material ui tabs, one containing map
 * the other containing the list view, and the search bar
 *
 * Created by David Goldstein on 8/9/2018
 **/

class MainView extends React.Component {

  constructor(props) {
    super(props);
    // bind methods
    this._handleTabChange = this._handleTabChange.bind(this);
  }

  /**
   * handler for when the user clicks on a tab
   **/
  _handleTabChange(event, tabIndex) {
    // get name of tab clicked
    let tabSelected = this.props.appState.availableViews[tabIndex];
    // verify that it's a real view
    if (tabSelected) {
      // update view in appState
      this.props.dispatch(updateView(tabSelected));
    } else { // tab is undefined
      console.error("undefined tab selected", arguments);
    }
  }

	render() {
		return (
			<div id="main-view-controller">
        {/* Bar containing tabs */}
				<AppBar position="static" color="default">
          <Tabs
            value={this.props.appState.availableViews.indexOf(this.props.appState.view)}
            onChange={this._handleTabChange}
            indicatorColor="primary"
            textColor="primary"
          >
            {this.props.appState.availableViews.map((view, key) => 
              <Tab label={view} key={key}/>
            )}
          </Tabs>
        </AppBar>
        {/* display table on visits view */}
        {this.props.appState.view === 'visits' &&
          <Table
            visits={this.props.visits.visits}
          />
        }
        {/* display map on map view */}
        {this.props.appState.view === 'map' &&
          <MapComponent
            visits={this.props.visits.visits}
          />
        }
			</div>
		);
	}
}

// connect to store
let mapStateToProps = state => state;
export default connect(mapStateToProps)(MainView);