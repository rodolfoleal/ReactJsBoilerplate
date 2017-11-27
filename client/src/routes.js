import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import CreateListPage from './containers/CreateListPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import ListPage from './containers/ListPage';
import Signout from './containers/auth/Signout';
import Signup from './containers/auth/Signup';
import Signin from './containers/auth/Signin';

export default (
  <Route>
    <Route path="login" component={LoginPage} />
    <Route path="/" component={App}>
      <IndexRoute component={ListPage} />
      <Route path="List/:id" component={ListPage} />
      <Route path="CreateList" component={CreateListPage} />
      <Route path="signout" component={Signout} />
      <Route path="signup" component={Signup} />
      <Route path="signin" component={Signin} />
      <Route path="table" component={TablePage} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);
