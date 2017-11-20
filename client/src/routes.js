import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import Signout from './containers/auth/Signout';
import Signup from './containers/auth/Signup';

export default (
  <Route>
    <Route path="login" component={LoginPage} />
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="form" component={FormPage} />
      <Route path="table" component={TablePage} />
      <Route path="signout" component={Signout} />
      <Route path="signup" component={Signup} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);