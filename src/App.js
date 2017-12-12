import React from 'react';

import { Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { map } from 'lodash';

import MainLayout from 'components/layouts/MainLayout';
import routes, { RouteWithSubRoutes } from 'routes';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <MainLayout>
      <Switch>
        {map(
          routes,
          (route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
      </Switch>
    </MainLayout>
  </Router>
);

export default App;