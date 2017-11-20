import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, CHECK_IS_AUTHENTICATED } from './constants';


export function requestLogin(payload) {
  return {
    type: LOGIN_REQUEST,
    payload
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
}

export function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload
  };
}

export function checkIsAuthenticated(payload) {
  return {
    type: CHECK_IS_AUTHENTICATED,
    payload
  }
}
