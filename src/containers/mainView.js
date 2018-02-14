// mainView.js

import React from 'react';
import { connect } from 'react-redux';

// material ui
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography'

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
      throw("Could not find tab with index " + tabIndex)
    }
  }

	render() {
		return (
			<div id="main-view-controller">
        <SearchBar
          query={this.props.search.query}
        />
        {/* Bar containing tabs */}
				<AppBar position="static" color="default" id="app-bar">
          <Tabs
            value={this.props.appState.availableViews.indexOf(this.props.appState.view)}
            onChange={this._handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {this.props.appState.availableViews.map((view, key) => 
              <Tab label={view} key={key} id={view}/>
            )}
          </Tabs>
        </AppBar>
        {/* display table on visits view */}
        {this.props.appState.view === 'visits' &&
          <Typography component="div" style={{padding : 24}}>
            <Table
              visits={this.props.visits.visits}
            />
          </Typography>
        }
        {/* display map on map view */}
        {this.props.appState.view === 'map' &&
          <Typography component="div" style={{padding : 24}}>
            <MapComponent
              visits={this.props.visits.visits}
            />
          </Typography>
        }
			</div>
		);
	}
}

// connect to store
let mapStateToProps = state => state;
export default connect(mapStateToProps)(MainView);