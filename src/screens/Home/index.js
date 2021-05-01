import React from 'react';

import styled from '@emotion/styled';

import { ProjectCard } from '../../components';

const Home = ({ projects, onProjectCardClick }) => (
  <Wrapper>
    {projects.map(project => (
      <ProjectCard
        key={project.id}
        project={project}
        onClick={() => onProjectCardClick(project)}
      />
    ))}
  </Wrapper>
);

const Wrapper = styled('div')`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
`;

export default Home;
