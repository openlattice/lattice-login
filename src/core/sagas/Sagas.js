/*
 * @flow
 */

import { AuthSagas } from 'lattice-auth';
import { all, fork } from 'redux-saga/effects';

export default function* sagas() :Generator<*, *, *> {

  yield all([
    // AuthSagas
    fork(AuthSagas.watchAuthAttempt),
    fork(AuthSagas.watchAuthSuccess),
    fork(AuthSagas.watchAuthFailure),
    fork(AuthSagas.watchAuthExpired),
    fork(AuthSagas.watchLogin),
    fork(AuthSagas.watchLogout)
  ]);
}
