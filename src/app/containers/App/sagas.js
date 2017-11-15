import { call, put, takeLatest } from 'redux-saga/effects';

import {
  CHECK_IS_AUTHENTICATED,
  AUTHENTICATED,
  AUTHENTICATION_FAILURE,
  REDIRECT_LOGIN
} from './constants';


function* authFlow(action) {
  yield put({ type: REDIRECT_LOGIN })
}

export default function* authWatcher() {
  yield takeLatest(CHECK_IS_AUTHENTICATED, authFlow)
}
