/*
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';

import LatticeAuth from 'lattice-auth';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import AppContainer from './containers/app/AppContainer';
import initializeReduxStore from './core/redux/ReduxStore';
import initializeRouterHistory from './core/router/RouterHistory';
import * as Routes from './core/router/Routes';

// injected by Webpack.DefinePlugin
declare var __AUTH0_CLIENT_ID__ :string;
declare var __AUTH0_DOMAIN__ :string;
declare var __ENV_DEV__ :boolean;

const {
  AuthRoute,
  AuthUtils
} = LatticeAuth;

const GlobalStyle = createGlobalStyle`
  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter', sans-serif;
    }
  }

  html,
  body {
    background-color: white;
    color: #3c3c40;
    font-family: 'Inter', sans-serif;
    height: 100%;
    line-height: 1.5;
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

  .auth0-lock.auth0-lock .auth0-lock-name {
    font-size: 12px;
  }
`;

/*
 * !!! MUST HAPPEN FIRST !!!
 */

LatticeAuth.configure({
  auth0ClientId: __AUTH0_CLIENT_ID__,
  auth0Domain: __AUTH0_DOMAIN__,
  authToken: AuthUtils.getAuthToken(),
  auth0Lock: {
    title: 'Please ensure third-party cookies are enabled'
  }
});

/*
 * !!! MUST HAPPEN FIRST !!!
 */

const routerHistory = initializeRouterHistory();
const reduxStore = initializeReduxStore(routerHistory);

const APP_ROOT_NODE = document.getElementById('app');
if (APP_ROOT_NODE) {
  ReactDOM.render(
    <Provider store={reduxStore}>
      <>
        <ConnectedRouter history={routerHistory}>
          <AuthRoute path={Routes.ROOT} component={AppContainer} />
        </ConnectedRouter>
        <GlobalStyle />
      </>
    </Provider>,
    APP_ROOT_NODE
  );
}
