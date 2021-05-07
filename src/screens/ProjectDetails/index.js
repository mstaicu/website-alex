import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { ProjectDetails as ProjectDetails } from '../../components';

const ProjectDetailsPage = ({ match: { params }, projects }) => {
  const history = useHistory();

  /**
   * Projects haven't loaded yet
   */
  if (projects && projects.length === 0) {
    return null;
  }

  const project = projects.find(project => project.id === Number(params.id));

  /**
   * Project not found
   */
  if (projects.length > 0 && !project) {
    /**
     * TODO: Investigate why I can't return a value and navigate on the same call stack
     */
    setTimeout(() => history.push(`/project/not-found`), 0);

    return null;
  }

  const onHomeNavigation = () => history.push('/');

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
    <Page>
      <PageControls>
        <PageControl onClick={() => onNextProjectDetails(project)}>
          {'👉🏻'}
        </PageControl>
        <PageControl onClick={() => onPreviousProjectDetails(project)}>
          {'👈🏻'}
        </PageControl>
        <PageControl onClick={() => onHomeNavigation()}>{'🙈'}</PageControl>
      </PageControls>
      <PageContent>
        <ProjectDetails project={project} />
      </PageContent>
    </Page>
  );
};

const Page = styled.div`
  display: grid;

  grid-template-columns: auto;

  /**
   * On small devices, i.e. < 650px width, we stack the header constituents
   */
  grid-template-areas:
    'page-controls'
    'page-content';

  /**
   * On larger devices, i.e. > 650px with, adjacent position the page controls with the page content
   */
  @media only screen and (min-width: 650px) {
    grid-template-columns: auto 1fr;
    grid-template-areas: 'page-controls page-content';
  }
`;

const PageControls = styled.div`
  grid-area: page-controls;

  display: flex;

  flex-direction: row;
  justify-content: space-evenly;

  @media only screen and (min-width: 650px) {
    flex-direction: column;
    justify-content: start;

    margin-right: 3rem;
  }

  user-select: none;
`;

const PageContent = styled.div`
  grid-area: page-content;
`;

const PageControl = styled.button`
  margin: 1rem 0;
  border: none;

  background: none;
  color: inherit;

  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;

export default ProjectDetailsPage;
