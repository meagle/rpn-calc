import { createStore as baseCreateStore, applyMiddleware } from 'redux';
import compose from 'ramda/src/compose';
import thunk from 'redux-thunk';
import Thunk from './typesf';

const createStore = compose(
  applyMiddleware((thunk: Thunk)),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : f => f
)(baseCreateStore);

export default createStore;
