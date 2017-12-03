import { fromJS } from 'immutable';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';
import {
  CHECK_IS_AUTHENTICATED,
  AUTHENTICATED
} from 'containers/App/constants';


const initialState = fromJS({
  isChecking: false,
  isRequesting: false,
  isSuccess: false,
  isError: false,
  isAuthenticated: false
});

export default function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_REQUEST:
      // console.log("in reducer login request state and action", state, action)
      return state.set('isRequesting', true);

    case LOGIN_SUCCESS:
      // console.log("in reducer login success state and action", state, action)
      return state
        .set('isRequesting', false)
        .set('isSuccess', true)

    case LOGIN_FAILURE:
      return state
        .set('isRequesting', false)
        .set('isError', true)

    case CHECK_IS_AUTHENTICATED:
      return state
        .set('isChecking', true)

    case AUTHENTICATED:
      return state
        .set('isChecking', false)
        .set('isAuthenticated', true)

    default:
      return state;
  }
}
