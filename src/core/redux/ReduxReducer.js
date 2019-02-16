/*
 * @flow
 */

import { connectRouter } from 'connected-react-router/immutable';
import { AuthReducer } from 'lattice-auth';
import { combineReducers } from 'redux-immutable';

export default function reduxReducer(routerHistory :any) {

  return combineReducers({
    auth: AuthReducer,
    router: connectRouter(routerHistory),
  });
}
