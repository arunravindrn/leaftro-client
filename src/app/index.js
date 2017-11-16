import 'babel-polyfill';
import 'eventsource-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import '!!style-loader!css-loader!font-awesome/css/font-awesome.css';
import '!!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import '!!style-loader!css-loader!assets/css/stylesheets.css';

import App from 'containers/App';
import Login from 'containers/Login';
import Accounts from 'containers/Accounts';
import configureStore from './configureStore';

const initialState = {};
export const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  MOUNT_NODE
);
