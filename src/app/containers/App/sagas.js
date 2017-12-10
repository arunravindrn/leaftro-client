import { call, put, takeLatest } from 'redux-saga/effects';

import {
  CHECK_IS_AUTHENTICATED,
  AUTHENTICATED,
  AUTHENTICATION_FAILURE,
  REDIRECT_LOGIN
} from './constants';
import { TOKEN } from 'utils/constants';
import { redirectLogin, authenticated } from './actions';


export function* authFlow(action) {

  try {
    if (!TOKEN) throw new Error('No Token');
    yield put(authenticated());
  }
  catch(error) {
    yield put(redirectLogin());
  }

}

export default function* authWatcher() {
  yield takeLatest(CHECK_IS_AUTHENTICATED, authFlow)
}
