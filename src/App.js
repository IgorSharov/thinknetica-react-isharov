import React from 'react';
import { Router, matchPath, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { map, assign } from 'lodash';

import MainLayout from 'components/layouts/MainLayout';
import routes, { RouteWithSubRoutes } from 'routes';
import history from 'helpers/history';
import store from 'store';
import prepareData from 'helpers/prepareData';


function historyCallback (location) {  
  const routerState = { params: {}, routes: [], location: {} };

  routes.some(route => {
    const match = matchPath(location.pathname, route);
    if (match)
    {
      routerState.routes.push(route);
      assign(routerState, { params: match.params, location });
      prepareData(store, routerState);
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