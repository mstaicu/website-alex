import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import useFetch from 'fetch-suspense';

import styled from '@emotion/styled';

import { Header, Footer } from '../';

import Home from '../../screens/Home';

/**
 * Prefetch these components when the browser is in idle mode
 */
const ProjectDetails = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/ProjectDetails'),
);

const NotFound = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/NotFound'),
);

const DigitalFootprint = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/DigitalFootprint'),
);

const Profile = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../../screens/Profile'),
);

export const App = () => {
  const history = useHistory();

  const projects = useFetch('/data/projects.json');

  const [selectedCategory, setSelectedCategory] = useState();

  const onProjectDetails = ({ id }) => history.push(`/project/${id}`);
  const onDigitalFootprintClick = () => history.push('/digital-footprint');
  const onProfileClick = () => history.push('/profile');

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <Layout>
      <Top>
        <Header
          onCategoryClick={setSelectedCategory}
          onDigitalFootprintClick={onDigitalFootprintClick}
          onProfileClick={onProfileClick}
        />
        <Main>
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
              render={props => (
                <ProjectDetails {...props} projects={projects} />
              )}
            />
            <Route
              exact
              path="/digital-footprint"
              component={DigitalFootprint}
            />
            <Route exact path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Main>
      </Top>
      <Bottom>
        <Footer />
      </Bottom>
    </Layout>
  );
};

/**
 * 6rem because 3rem from the padding top and 3rem from padding bottom
 * Check the #root selector for the source of the padding
 */
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: auto;
  min-height: calc(100vh - 6rem);
`;

const Top = styled.div``;
const Bottom = styled.div``;

const Main = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
