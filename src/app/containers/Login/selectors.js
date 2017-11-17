import { createSelector } from 'reselect';


const selectLogin = state => {
  console.log("state login", state);
  return state.get('login')
};

const makeSelectRequesting = () => createSelector(
  selectLogin,
  substate => substate.get('isRequesting')
)


export {
  selectLogin,
  makeSelectRequesting
};
