import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import i18n from '@config/i18n';

import { App, GlobalStyles } from './layout';
import { DataProvider, FilterDataProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <DataProvider>
      <FilterDataProvider>
        <App />
      </FilterDataProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
