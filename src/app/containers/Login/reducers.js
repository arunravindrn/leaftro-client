import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';


const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_REQUEST:
      return state.set('isRequesting', true);

    case LOGIN_SUCCESS:
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
