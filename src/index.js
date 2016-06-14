/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {getAuthUser} from './actions/ajaxActions';

import configureStore from './store/configureStore';
import routes from './routes';

import '../node_modules/bootstrap/js/collapse';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';


const store = configureStore();
store.dispatch(getAuthUser()).
  then(()=>{
    render(
      <Provider store={store}>
        <Router history={browserHistory} routes={routes(store)} />
      </Provider>,
      document.getElementById("app")
    );
  });
