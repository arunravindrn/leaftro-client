import { CHECK_IS_AUTHENTICATED, REDIRECT_LOGIN } from './constants';


export function checkIsAuthenticated(payload) {
  return {
    type: CHECK_IS_AUTHENTICATED,
    isChecking: true,
    payload
  };
}

export function redirectLogin(payload) {
  return {
    type: REDIRECT_LOGIN,
    isAuthenticated: true,
    isChecking: false,
    payload
  };
}
