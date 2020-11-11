import React from 'react';

import styled from '@emotion/styled';

import { useFilterDataContext } from '../../context';

import { ProjectCard } from './ProjectCard';

export const ProjectCards = () => {
  const { projects } = useFilterDataContext();

  return (
    <Wrapper>
      {projects.map(({ id, project }) => (
        <ProjectCard key={id} project={project} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
`;
