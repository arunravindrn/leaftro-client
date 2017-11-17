import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';

import createReducer from './reducers';


const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSaga = {};


  if (module.hot) {
    console.log("store.injectedReducers", store.injectedReducers)
    module.hot.accept('./reducers', () => {
      debugger;
      console.log("hot", store.injectedReducers)
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
