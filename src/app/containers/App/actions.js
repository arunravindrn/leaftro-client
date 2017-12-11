import { AUTH_VALIDATE, REDIRECT_LOGIN, AUTHENTICATED } from './constants';
import browserHistory from 'browserHistory';


export function authValidate() {
  return {
    type: AUTH_VALIDATE
  };
}

export function redirectLogin() {

  browserHistory.push('/login')

  return {
    type: REDIRECT_LOGIN,
  };
}

export function authenticated(payload) {

  return {
    type: AUTHENTICATED,
    payload
  }
}
