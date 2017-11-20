import { fromJS } from 'immutable';

import { CHECK_IS_AUTHENTICATED, REDIRECT_LOGIN, AUTHENTICATED } from './constants';
import { checkIsAuthenticated, redirectLogin } from './actions';

const initialState = fromJS({
  isAuthenticated: false,
  isChecking: false,
  redirect: false,
  userId: null,
  userData: {},
});

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_IS_AUTHENTICATED:
      console.log("CHECK_IS_AUTHENTICATED", action)
      return state
        .set('isChecking', true)

    case REDIRECT_LOGIN:
      console.log("REDIRECT_LOGIN", action);
      return state
        .set('isChecking', false)
        .set('redirect', true)

    case AUTHENTICATED:
      return state
        .set('isAuthenticated', true)
        .set('isChecking', false)

    default:
      return state;
  }
}
