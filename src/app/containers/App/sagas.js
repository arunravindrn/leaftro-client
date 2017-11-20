import { call, put, takeLatest } from 'redux-saga/effects';

import {
  CHECK_IS_AUTHENTICATED,
  AUTHENTICATED,
  AUTHENTICATION_FAILURE,
  REDIRECT_LOGIN
} from './constants';
import { BASE_URL } from 'utils/constants';


function* authFlow(action) {
  const id_token = window.localStorage.getItem('id_token');

  if (id_token) {
    yield put({ type: AUTHENTICATED })
  }
  else {
    yield put({ type: REDIRECT_LOGIN })
  }
}

const validateAuthToken = (token) => {
  return {
    success: true
  }
}

export default function* authWatcher() {
  yield takeLatest(CHECK_IS_AUTHENTICATED, authFlow)
}
