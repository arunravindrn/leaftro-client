import { put, takeLatest, call } from 'redux-saga/effects';

import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE
} from './constants';
import { loginApi } from 'utils/apis';


function* loginFlow(action) {
  try {
    const response = yield loginApi.post(action.payload)
      .then(response => {
        window.localStorage.setItem('id_token', response.token);
        return response;
      });

    yield put({ type: LOGIN_SUCCESS, response })

  } catch (error) {
    yield put({ type: LOGIN_FAILURE })
  }
}


export default function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, loginFlow)
}
