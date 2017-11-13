import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from './constants';


export function requestLogin(payload) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    payload
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: payload.token,
    payload
  };
}

export function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    payload
  };
}
