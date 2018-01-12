import { parse } from 'qs';

import { compact } from 'lodash/array';
import { map } from 'lodash';

//state - state of the Router (NOT of Redux)
export default function(store, state) {
  const { location, params, routes } = state;

  //cut '?' at the begining of the string
  const query = parse(location.search.substr(1));

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  map(
    prepareDataFns,
    prepareData => prepareData(store, query, params, location)
  );
}