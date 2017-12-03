import { call, put, takeLatest } from 'redux-saga/effects';

import {
  CHECK_IS_AUTHENTICATED,
  AUTHENTICATED,
  AUTHENTICATION_FAILURE,
  REDIRECT_LOGIN
} from './constants';
import { TOKEN } from 'utils/constants';
import { validateAuthTokenApi } from 'utils/apis';


export function* authFlow(action) {

  try {

    if (!TOKEN) throw new Error('No Token');

    yield validateAuthTokenApi.post({ token: TOKEN })
      .then(response => {
        // console.log("response", response);
      })
    yield put({ type: AUTHENTICATED })
  } catch(error) {
    // console.log("error", error)
    yield put({ type: REDIRECT_LOGIN })
  }

}

export default function* authWatcher() {
  yield takeLatest(CHECK_IS_AUTHENTICATED, authFlow)
}
