import { CHECK_IS_AUTHENTICATED, REDIRECT_LOGIN } from './constants';


export function checkIsAuthenticated() {
  return {
    type: CHECK_IS_AUTHENTICATED
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
