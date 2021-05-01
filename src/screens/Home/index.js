import React from 'react';

import styled from '@emotion/styled';

import { ProjectCard } from '../../components';

const Home = ({ projects, onProjectCardClick }) => (
  <Wrapper>
    {projects.map(project => (
      <Card key={project.id} onClick={() => onProjectCardClick(project)}>
        <ProjectCard project={project} />
      </Card>
    ))}
  </Wrapper>
);

const Wrapper = styled('div')`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
`;

const Card = styled('div')`
  /**
   * this width value makes 23:30 aspect ratio cards fall on the 8px base grid
   */
  width: 153px;

  /**
   * TODO: Get support for flex|grid - gap
   * Meanwhile, margins are for spacing cards horizontally and vertically
   */
  margin-right: 7px;
  margin-bottom: 1rem;
`;

export default Home;
