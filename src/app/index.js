import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '!!style-loader!css-loader!font-awesome/css/font-awesome.css';
import '!!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import '!!style-loader!css-loader!assets/css/stylesheets.css';

import App from 'containers/App';
import Login from 'containers/Login';
import Accounts from 'containers/Accounts';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <App/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
