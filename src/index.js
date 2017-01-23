import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import Contacts from './components/contacts'
import store from './store'
import './style.less'

ReactDOM.render(
  <Provider store={store}><Contacts /></Provider>,
  document.getElementById('app')
);
