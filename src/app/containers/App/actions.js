import { CHECK_IS_AUTHENTICATED, REDIRECT_LOGIN } from './actions';


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
    isAuthenticated: false,
    isChecking: false,
    payload
  };
}
