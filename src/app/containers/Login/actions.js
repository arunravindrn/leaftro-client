import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from './constants';


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
