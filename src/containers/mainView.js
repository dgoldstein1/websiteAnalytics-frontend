// mainView.js

import React from 'react';
import { connect } from 'react-redux';

// material ui
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography'
import { CircularProgress } from 'material-ui/Progress';

// icons
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FormatListBulleted from 'material-ui-icons/FormatListBulleted';

// children components
import SearchBar from '../components/searchBar';
import Table from '../components/table';
import MapComponent from '../components/map';

// css
import '../css/MainView.css'

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
    this._getIconHelper = this._getIconHelper.bind(this);
    this._handleTabChange = this._handleTabChange.bind(this);
  }

  /**
   * handler for when the user clicks on a tab
   * @param {html} event.target
   * @param {int} tabIndex
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

  /**
   * helper for getting the name of an icon
   * @param {string} view
   * @return {html} icon from material ui
   **/
  _getIconHelper(tab) {
    if (tab === 'visits') return <FormatListBulleted/>
    if (tab === 'map') return <LocationOnIcon/>
    return undefined;
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
              <Tab label={view} key={key} id={view} icon={this._getIconHelper(view)}/>
            )}
          </Tabs>
        </AppBar>
        {/* display only loading icon if currently loading */ }
        {this.props.appState.loading && 
          <CircularProgress
            id={'loading-spinner'}
            color="primary"
            style={{padding : 100}}
            size={200}
            thickness={1}
          />
        }
        {/* display table on visits view */}
        {!this.props.appState.loading && this.props.appState.view === 'visits' &&
          <Typography component="div" style={{padding : 24}}>
            <Table
              visits={this.props.visits.visits}
            />
          </Typography>
        }
        {/* display map on map view */}
        {!this.props.appState.loading && this.props.appState.view === 'map' &&
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