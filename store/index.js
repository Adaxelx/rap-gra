import { createStore, compose } from 'redux';
import rootReducer from 'reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());
/* eslint-enable */

export default store;
