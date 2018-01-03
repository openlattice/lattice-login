/*
 * @flow
 */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import LatticeAuth from 'lattice-auth';
import { normalize } from 'polished';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { injectGlobal } from 'styled-components';

import OpenLatticeLogo from './assets/images/logo.png';
import AppContainer from './containers/app/AppContainer';
import initializeReduxStore from './core/redux/ReduxStore';
import initializeRouterHistory from './core/router/RouterHistory';
import * as Routes from './core/router/Routes';

const {
  AuthRoute,
  AuthUtils
} = LatticeAuth;

/* eslint-disable */
injectGlobal`${normalize()}`;

// TODO: move styling into core/style
// TODO: define style defaults and themes
injectGlobal`
  html,
  body {
    background-color: #f9fcff;
    color: #135;
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  #app {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
/* eslint-enable */

/*
 * // !!! MUST HAPPEN FIRST !!!
 */

LatticeAuth.configure({
  auth0Lock: {
    logo: OpenLatticeLogo,
    title: 'OpenLattice'
  },
  authToken: AuthUtils.getAuthToken(),
  baseUrl: 'localhost'
});

/*
 * // !!! MUST HAPPEN FIRST !!!
 */

const routerHistory = initializeRouterHistory();
const reduxStore = initializeReduxStore(routerHistory);

ReactDOM.render(
  <Provider store={reduxStore}>
    <ConnectedRouter history={routerHistory}>
      <AuthRoute path={Routes.ROOT} component={AppContainer} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
