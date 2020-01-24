import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
  	,
  document.getElementById('root')
);

