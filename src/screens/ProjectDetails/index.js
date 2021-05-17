import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { ProjectDetails } from '../../components';

const ProjectDetailsPage = ({ match: { params }, projects }) => {
  const history = useHistory();

  /**
   * Projects still loading
   */
  if (projects && projects.length === 0) {
    return null;
  }

  const projectIndex = projects.findIndex(
    project => project.id === Number(params.id),
  );

  if (projects.length > 0 && projectIndex < 0) {
    setTimeout(() => history.push(`/project/not-found`), 0);
    return null;
  }

  const onHomeNavigation = () => history.push('/');
  const onProjectDetails = ({ id }) => history.push(`/project/${id}`);

  const onNextProjectDetails = projectIndex =>
    onProjectDetails(projects[getNextProjectIndex(projectIndex)]);
  const onPreviousProjectDetails = projectIndex =>
    onProjectDetails(projects[getPreviousProjectIndex(projectIndex)]);

  const getNextProjectIndex = index =>
    index + 1 >= projects.length ? 0 : index + 1;
  const getPreviousProjectIndex = index =>
    index - 1 < 0 ? projects.length - 1 : index - 1;

  const {
    content: {
      project: { name: nextProjectName },
    },
  } = projects[getNextProjectIndex(projectIndex)];
  const {
    content: {
      project: { name: previousProjectName },
    },
  } = projects[getPreviousProjectIndex(projectIndex)];

  return (
    <Wrapper>
      <Left>
        <PageControl
          onClick={() => onNextProjectDetails(projectIndex)}
          data-tooltip={nextProjectName}
        >
          {'👉🏻'}
        </PageControl>
        <PageControl
          onClick={() => onPreviousProjectDetails(projectIndex)}
          data-tooltip={previousProjectName}
        >
          {'👈🏻'}
        </PageControl>
        <PageControl onClick={() => onHomeNavigation()}>{'🙈'}</PageControl>
      </Left>
      <Right>
        <ProjectDetails project={projects[projectIndex]} />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const Left = styled.div`
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

  z-index: 1;

  [data-tooltip]:before {
    content: attr(data-tooltip);

    width: auto;

    position: absolute;
    left: 56px;

    opacity: 0;
  }

  [data-tooltip]:hover:before {
    opacity: 1;
  }
`;

const Right = styled.div`
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
