import { fromJS } from 'immutable';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';


const initialState = fromJS({
  isRequesting: false,
  isSuccess: false,
  isError: false
});

export default function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_REQUEST:
      console.log("in reducer login request state and action", state, action)
      return state.set('isRequesting', true);

    case LOGIN_SUCCESS:
      console.log("in reducer login success state and action", state, action)
      return state
        .set('isRequesting', false)
        .set('isSuccess', true)

    case LOGIN_FAILURE:
      return state
        .set('isRequesting', false)
        .set('isError', true)

    default:
      return state;
  }
}
