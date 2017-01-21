import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app'
import Contacts from './components/contacts'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Contacts} />
    </Route>
  </Router>
);
