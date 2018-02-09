import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

import { fetchAndStoreVisits } from './actions/visitActions';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

fetchAndStoreVisits()