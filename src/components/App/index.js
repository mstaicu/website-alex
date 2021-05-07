import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Loader } from '../Loader';
import { Header } from '../Header';

import Home from '../../screens/Home';

const ProjectDetails = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/ProjectDetails'),
);

const NotFound = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/NotFound'),
);

export const App = () => {
  const history = useHistory();

  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(setProjects);
  }, []);

  const onProjectDetails = ({ id }) => history.push(`/project/${id}`);

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <Suspense fallback={<Loader />}>
      <Header onCategoryClick={setSelectedCategory} />

      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              projects={filteredProjects}
              onProjectCardClick={onProjectDetails}
            />
          )}
        />
        <Route exact path="/project/not-found" component={NotFound} />
        <Route
          exact
          path="/project/:id"
          render={props => <ProjectDetails {...props} projects={projects} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};
