// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import type { Store } from 'redux';
import createStore from './createStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import type { State, Action } from './types';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const store: Store<State, Action> = createStore(reducer, {});

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
registerServiceWorker();
