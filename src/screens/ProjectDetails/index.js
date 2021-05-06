import React from 'react';

import styled from '@emotion/styled';

import { ProjectDetails as ProjectDetails } from '../../components';

const ProjectDetailsPage = ({
  project,
  //
  onHomeNavigation,
  onNextProjectDetails,
  onPreviousProjectDetails,
}) => (
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
