import { createSelector } from 'reselect';


const selectLogin = state => {
  return state.get('login')
};

const makeSelectRequesting = () => createSelector(
  selectLogin,
  substate => {
    return substate.get('isRequesting')
  }
)

const makeSelectSuccess = () => createSelector(
  selectLogin,
  substate => substate.get('isSuccess')
);

makeSelectAuthenticated = () => createSelector(
  selectLogin,
  substate => substate.get('isAuthenticated')
);


export {
  selectLogin,
  makeSelectRequesting,
  makeSelectSuccess
};
