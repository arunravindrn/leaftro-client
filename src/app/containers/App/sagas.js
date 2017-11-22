import { call, put, takeLatest } from 'redux-saga/effects';

import {
  CHECK_IS_AUTHENTICATED,
  AUTHENTICATED,
  AUTHENTICATION_FAILURE,
  REDIRECT_LOGIN
} from './constants';
import { TOKEN } from 'utils/constants';
import { validateAuthTokenApi } from 'utils/apis';


function* authFlow(action) {

  try {
    console.log("try clause");
    yield validateAuthTokenApi.post({ token: TOKEN })
      .then(response => {
      console.log("responsibles", response)
      return response
    })
      .then(res => {
        console.log("new response", res);
      })
    yield put({ type: AUTHENTICATED })
  } catch(error) {
    console.log("error", error)
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
