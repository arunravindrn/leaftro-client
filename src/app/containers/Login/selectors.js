import { createSelector } from 'reselect';


const selectLogin = state => state.get('login');

const makeSelectRequesting = () => createSelector(
  selectLogin,
  substate => substate.get('isRequesting')
);

const makeSelectSuccess = () => createSelector(
  selectLogin,
  substate => substate.get('isSuccess')
);

const makeSelectIsChecking = () => createSelector(
  selectLogin,
  substate => substate.get('isChecking')
)


export {
  selectLogin,
  makeSelectRequesting,
  makeSelectSuccess,
  makeSelectIsChecking
};
