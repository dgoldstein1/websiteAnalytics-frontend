// react + redux
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './reducers/index';
import { Router, Route } from 'react-router';

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
      <Router>
        <Route path="/*">
        <div className="App">
          <Provider store={store}>
            <MainView/>
          </Provider>
        </div>
       </Route>
      </Router>
    );
  }
}

export default App;
