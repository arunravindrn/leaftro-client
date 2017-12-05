import { CHECK_IS_AUTHENTICATED, REDIRECT_LOGIN, AUTHENTICATED } from './constants';
import history from 'browserHistory';


export function checkIsAuthenticated() {
  console.log("check")
  return {
    type: CHECK_IS_AUTHENTICATED
  };
}

export function redirectLogin() {

  if (!(history.action === "PUSH")) history.push('/login');

  return {
    type: REDIRECT_LOGIN,
  };
}

export function authenticated() {

  history.push('/')

  return {
    type: AUTHENTICATED
  }
}
