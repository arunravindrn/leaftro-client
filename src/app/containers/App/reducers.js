import { fromJS } from 'immutable';

import { CHECK_IS_AUTHENTICATED, REDIRECT_LOGIN, AUTHENTICATED } from './constants';
import { checkIsAuthenticated, redirectLogin } from './actions';


const initialState = fromJS({
  isAuthenticated: false,
  isChecking: false,
  userId: null,
  userData: {},
});

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case CHECK_IS_AUTHENTICATED:
      return state
        .set('isChecking', true)

    case REDIRECT_LOGIN:
      return state
        .set('isChecking', false)

    case AUTHENTICATED:
      return state
        .set('isAuthenticated', true)
        .set('isChecking', false)

    default:
      return state;
  }
}
