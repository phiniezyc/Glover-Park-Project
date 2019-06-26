import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';

import * as serviceWorker from './serviceWorker';
import App from './App';
import rootReducer from './reducers/index';

import './index.css';

const middleware = [thunk];

if (process.env.ENVIRONMENT !== 'production') {
  middleware.push(logger); // logger should always go last
}

// wraps middleware because reduxDevtools only allows 2 arguments
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
