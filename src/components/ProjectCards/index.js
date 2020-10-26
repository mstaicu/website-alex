import React from 'react';

import styled from '@emotion/styled';

import { ProjectCard } from '../ProjectCard';
import { useProjects } from '../ProjectsContext';

export const ProjectCards = () => {
  const [projects] = useProjects();

  return (
    <Wrapper>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
`;
