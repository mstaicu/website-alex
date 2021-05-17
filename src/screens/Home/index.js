import React from 'react';

import styled from '@emotion/styled';

import { ProjectCard } from '../../components';

const Home = ({ projects, onProjectCardClick }) => (
  <Wrapper>
    {projects.map(project => (
      <CardWrapper
        key={project.id}
        onClick={() => onProjectCardClick(project)}
        /**
         * Following attributes turn a 'div' into an accessible element
         */
        onKeyDown={({ key }) => key === 'Enter' && onProjectCardClick(project)}
        role="button"
        ariaPressed="false"
        tabIndex="0"
      >
        <ProjectCard project={project} />
      </CardWrapper>
    ))}
  </Wrapper>
);

const Wrapper = styled('div')`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
`;

/**
 * The @ProjectCard component will take up all the width of its parent
 * this wrapper defines the dimensions of the @ProjectCard
 */
const CardWrapper = styled('div')`
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
