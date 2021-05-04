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

  const onProjectDetails = ({ id }) => history.push(`/project/${id}`);
  const onNextProjectDetails = ({ id }) => {
    let currentIndex = projects.findIndex(project => project.id === id);

    currentIndex = currentIndex + 1;

    if (currentIndex >= projects.length) {
      currentIndex = 0;
    }

    onProjectDetails(projects[currentIndex]);
  };
  const onPreviousProjectDetails = ({ id }) => {
    let currentIndex = projects.findIndex(project => project.id === id);

    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
      currentIndex = projects.length - 1;
    }

    onProjectDetails(projects[currentIndex]);
  };

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
        {/* <Route exact path="/project/not-found" component={NotFound} /> */}
        <Route
          exact
          path="/project/:id"
          render={({ match: { params } }) => {
            const project = projects.find(
              project => project.id === Number(params.id),
            );

            return (
              <ProjectDetails
                project={project}
                onNextProjectDetails={onNextProjectDetails}
                onPreviousProjectDetails={onPreviousProjectDetails}
              />
            );
          }}
        />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Suspense>
  );
};
