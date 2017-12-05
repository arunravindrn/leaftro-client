import { createSelector } from 'reselect';


const selectHome = state => state.get('app');

const makeSelectUser = () => createSelector(
  selectHome,
  substate => substate.get('userData')
);

const makeSelectIsAuthenticated = () => createSelector(
  selectHome,
  substate => {
    // console.log("substate", substate.get('isAuthenticated'));
    return substate.get('isAuthenticated')
  }
);

const makeSelectIsChecking = () => createSelector(
  selectHome,
  substate => {
    // console.log("substate.get('redirect')", substate.get('redirect'))
    return substate.get('isChecking');
  }
);

export {
  selectHome,
  makeSelectUser,
  makeSelectIsAuthenticated,
  makeSelectIsChecking
};

