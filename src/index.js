import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import i18n from '../config/i18n';

import { App, GlobalStyles } from './components';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
