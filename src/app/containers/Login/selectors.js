import { createSelector } from 'reselect';


const selectLogin = state => {
  // console.log("state login", state);
  return state.get('login')
};

const makeSelectRequesting = () => createSelector(
  selectLogin,
  substate => {
    // console.log("substate", substate)
    return substate.get('isRequesting')
  }
)

const makeSelectSuccess = () => createSelector(
  selectLogin,
  substate => substate.get('isSuccess')
);


export {
  selectLogin,
  makeSelectRequesting,
  makeSelectSuccess
};
