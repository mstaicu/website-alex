import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Loader } from '../Loader';
import { Header } from '../Header';

import Home from '../../screens/Home';
// import NotFound from '../../screens/NotFound';

const ProjectDetails = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/ProjectDetails'),
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

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  const onProjectCardClick = ({ id }) => history.push(`/project/${id}`);

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
              onProjectCardClick={onProjectCardClick}
            />
          )}
        />
        {/* <Route exact path="/project/not-found" component={NotFound} /> */}
        <Route
          exact
          path="/project/:id"
          render={props => <ProjectDetails {...props} projects={projects} />}
        />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Suspense>
  );
};
