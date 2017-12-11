import { put, takeLatest, call } from 'redux-saga/effects';

import { LOGIN_REQUEST, CHECK_IS_AUTHENTICATED } from './constants';
import { loginError, noChange, authenticated } from './actions';
import { loginApi, validateAuthTokenApi } from 'utils/apis';
import { TOKEN } from 'utils/constants';


function* loginFlow(action) {
  try {

    const response = yield loginApi.post(action.payload)

    window.localStorage.setItem('id_token', response.token);

    yield put(authenticated());

  } catch (error) {
    console.log({error})
    yield put(loginError())
  }
}

function* checkAuthFlow(action) {
  try {
    if (!TOKEN) throw new Error('No Token!');
    const response = validateAuthTokenApi.post({ token: TOKEN })
      .then(response => {
        if (!response.success) throw new Error('Validation failed.');
        return response;
      });

    yield put(authenticated())
  } catch(error) {
    console.log({error})
    yield put(noChange())
  }
}


export default function* loginWatcher() {
  yield takeLatest(CHECK_IS_AUTHENTICATED, checkAuthFlow),
  yield takeLatest(LOGIN_REQUEST, loginFlow)
}
