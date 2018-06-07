import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

require('./stylesheets/base.scss');
require('./stylesheets/home.scss');
require('./stylesheets/discover.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
