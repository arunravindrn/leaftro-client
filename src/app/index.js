import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '!!style-loader!css-loader!font-awesome/css/font-awesome.css';
import '!!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';

import App from 'containers/App';
import Accounts from 'containers/Accounts';

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);
