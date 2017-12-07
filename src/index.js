import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './App';

import '../semantic/dist/semantic.min.css';

const render = (app) => ReactDOM.render(
  React.createElement(AppContainer, {}, React.createElement(app)),
  document.getElementById('root')
);

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}