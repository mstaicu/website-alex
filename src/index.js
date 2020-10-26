import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import i18n from '@config/i18n';

import { App, GlobalStyles } from '@src/layout';
import { ProjectsProvider } from '@src/components/ProjectsContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
