import React from 'react';
import { Router, matchPath, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { map } from 'lodash';

import MainLayout from 'components/layouts/MainLayout';
import routes, { RouteWithSubRoutes } from 'routes';
import history from 'helpers/history';
import store from 'store';

function historyCallback (location) {
  routes.some(route => {
    const match = matchPath(location.pathname, route);
    if (match)
    {
      route.prepareData(store, match.params);
    }
    return match;
  });
}

historyCallback(window.location);
history.listen(historyCallback);

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;