import React from 'react';

import styled from '@emotion/styled';

import { ProjectDetails as ProjectDetails } from '../../components';

const ProjectDetailsPage = ({
  project,
  onNextProjectDetails,
  onPreviousProjectDetails,
}) =>
  project ? (
    <Page>
      <PageControls>
        <PageControl onClick={() => onNextProjectDetails(project)}>
          {'👉🏻'}
        </PageControl>
        <PageControl onClick={() => onPreviousProjectDetails(project)}>
          {'👈🏻'}
        </PageControl>
        <PageControl>{'🙈'}</PageControl>
      </PageControls>
      <ProjectDetails project={project} />
    </Page>
  ) : null;

const Page = styled.div`
  display: flex;
`;

const PageControls = styled.div`
  display: flex;

  flex-direction: column;

  margin-right: 3rem;

  user-select: none;
`;

const PageControl = styled.p`
  font-size: 2rem;

  margin: 1rem 0;

  :hover {
    cursor: pointer;
  }
`;

export default ProjectDetailsPage;
