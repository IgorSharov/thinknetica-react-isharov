import React from 'react';

import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { map } from 'lodash';

import MainLayout from 'components/layouts/MainLayout';
import routes, { RouteWithSubRoutes } from 'routes';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <MainLayout>
      {map(
        routes,
        (route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
    </MainLayout>
  </Router>
);

export default App;