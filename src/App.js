import React from 'react';

import { Router, Switch } from 'react-router-dom';

import { map } from 'lodash';

import MainLayout from 'components/layouts/MainLayout';
import routes, { RouteWithSubRoutes } from 'routes';
import history from 'helpers/history';

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