import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

import { store } from './reducers/index';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
console.log(store.getState())