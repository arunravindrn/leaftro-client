import { fromJS } from 'immutable';

import { AUTH_VALIDATE, REDIRECT_LOGIN, AUTHENTICATED } from './constants';


const initialState = fromJS({
  isAuthenticated: false,
  isChecking: false,
  userId: null,
  userData: {},
});

export default function appReducer(state = initialState, action) {
  console.log({action}, 'app')
  switch (action.type) {

    case AUTH_VALIDATE:
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
