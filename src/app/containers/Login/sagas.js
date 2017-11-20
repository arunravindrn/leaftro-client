import { put, takeLatest, call } from 'redux-saga/effects';

import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE
} from './constants';
import { loginApi } from './apis';


function* loginFlow(action) {
  console.log("login init");
  try {
    const response = yield call(loginApi, action.payload)
    console.log("success", response)
    window.localStorage.setItem('id_token', response.token);
    yield put({ type: LOGIN_SUCCESS, response })
  } catch (error) {
    console.log("error", error)
    yield put({ type: LOGIN_FAILURE })
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, loginFlow)
}
