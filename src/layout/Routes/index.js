import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../screens/Home';
import NotFound from '../../screens/NotFound';

const ProjectDetails = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/ProjectDetails'),
);

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/project/not-found" component={NotFound} />
    <Route exact path="/project/:id" component={ProjectDetails} />
    <Route path="*" component={NotFound} />
  </Switch>
);
