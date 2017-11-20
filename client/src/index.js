/* eslint-disable import/default */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reduxThunk from 'redux-thunk';
require('./favicon.ico');
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage('token');
//If have a token considerer user to be signed
if (token) {
    //we need to update application state
    store.dispatch({ type: AUTH_USER });
}

injectTapEventPlugin();

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>
    , document.getElementById('app')
);

