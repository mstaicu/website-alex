import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loader } from '../Loader';

import Home from '../../screens/Home';
// import NotFound from '../../screens/NotFound';

const ProjectDetails = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/ProjectDetails'),
);

export const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/project/not-found" component={NotFound} /> */}
        <Route exact path="/project/:id" component={ProjectDetails} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Suspense>
  </BrowserRouter>
);
