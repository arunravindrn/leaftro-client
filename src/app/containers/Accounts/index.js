import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import AccountsList from './AccountsList';


const Accounts = () => {
  return (
    <Switch>
      <Route path="/accounts" component={AccountsList} />
    </Switch>
  );
}

export default Accounts;
