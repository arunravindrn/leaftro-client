import { CHECK_IS_AUTHENTICATED, REDIRECT_LOGIN } from './constants';
import history from 'browserHistory';


export function checkIsAuthenticated() {
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
