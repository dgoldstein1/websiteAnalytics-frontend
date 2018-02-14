// searchBar.js

// react
import React from 'react';
import PropTypes from 'prop-types';

// material ui
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

// actions
import { 
  updateQuery,
  searchOnKeyword
 } from '../actions/searchActions';

// store
import { store } from '../reducers/index';

/**
 * Displays interactive search bar for user to make requests to visits
 * based mostly off of https://www.npmjs.com/package/material-ui-search-bar
 *
 * Created by David Goldstein on 2/8/18
 **/

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    // bind internal methods
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  /**
   * updates store with new keywords from search bar
   * @param {event}
   **/
  _handleInputChange(event, testingConfig = {}) {
    if (event && event.target && event.target.value !== undefined)
      store.dispatch(updateQuery(event.target.value))
  }

	render() {
		return (
			<div id="search-bar">
				<TextField
          id={'search-bar-input'}
          type="search"
          margin="normal"
          onChange={this._handleInputChange}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter' && !this.props.disabled) {
              searchOnKeyword()
              ev.preventDefault();
            }
          }}
          placeholder="Search 'Israel', '02067', 'MN', 'Boston'"
          style={{width : 600, padding : 15}}
          disabled={this.props.disabled}
        />
        <Button
          id={'search-bar-button'}
          variant="raised"
          color="primary"
          onClick={searchOnKeyword}
          disabled={this.props.disabled}
        >
          Search
        </Button>
			</div>
		);
	}
}

SearchBar.propTypes = {
  query : PropTypes.string.isRequired,
  disabled : PropTypes.bool.isRequired
}

export default SearchBar;