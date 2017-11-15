import { createSelector } from 'reselect';


const selectHome = state => state.get('app');

const makeSelectUser = () => createSelector(
  selectHome,
  substate => substate.get('userData')
);

const makeSelectAuthenticated = () => createSelector(
  selectHome,
  substate => substate.get('isAuthenticated')
);

export {
  selectHome,
  makeSelectUser,
  makeSelectAuthenticated,
};
