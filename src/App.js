// react + redux
import React, { Component } from 'react';
import { store } from './reducers/index';

// containers
import MainView from './containers/mainView';

// actions
import { fetchAndStoreVisits } from './actions/visitActions';

class App extends Component {


  /**
   * what is done on first load
   *
   * - fetches and stores visits with no filters
   **/
  componentWillMount() {
    fetchAndStoreVisits();
  }

  render() {
    return (
      <div className="App">
        <MainView store={store}/>
      </div>
    );
  }
}

export default App;
