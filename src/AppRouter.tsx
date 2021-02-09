import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Users from './pages/UsersPage/UsersPage';
import Details from './pages/DetailsPage/DetailsPage';

const AppRouter = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/" component={Users} exact={true} />
        <Route path="/users" component={Users} exact={true} />
        <Route path="/details/:username" component={Details} />
      </Switch>
    </App>
  </Router>
);

export default AppRouter;
