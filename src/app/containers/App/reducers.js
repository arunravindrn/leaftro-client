import { fromJS } from 'immutable';

import { CHECK_IS_AUTHENTICATED, REDIRECT_LOGIN } from './constants';
import { checkIsAuthenticated, redirectLogin } from './actions';

const initialState = fromJS({
  isAuthenticated: false,
  userId: null,
  userData: {},
});

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_IS_AUTHENTICATED:
      console.log("CHECK_IS_AUTHENTICATED", action);
      return state;

    case REDIRECT_LOGIN:
      console.log("REDIRECT_LOGIN", action);
      return state;

    default:
      return state;
  }
}
