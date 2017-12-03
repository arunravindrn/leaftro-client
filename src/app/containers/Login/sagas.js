import { put, takeLatest, call } from 'redux-saga/effects';

import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE
} from './constants';
import { CHECK_IS_AUTHENTICATED } from 'containers/App/constants';
import { loginApi } from 'utils/apis';
import { authFlow } from 'containers/App/sagas';


function* loginFlow(action) {
  console.log("login init");
  try {
    const response = yield loginApi.post(action.payload)
      .then(response => {
        console.log("success", response)
        window.localStorage.setItem('id_token', response.token);
        return response;
      });

    yield put({ type: LOGIN_SUCCESS, response })

  } catch (error) {
    console.log("error", error)
    yield put({ type: LOGIN_FAILURE })
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, loginFlow),
  yield takeLatest(CHECK_IS_AUTHENTICATED, authFlow)
}
