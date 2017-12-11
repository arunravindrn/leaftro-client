import { call, put, takeLatest } from 'redux-saga/effects';

import {
  AUTH_VALIDATE,
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
    console.log({error})
    yield put(redirectLogin());
  }

}

export default function* authWatcher() {
  yield takeLatest(AUTH_VALIDATE, authFlow)
}
