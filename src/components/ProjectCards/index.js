import React from 'react';

import styled from '@emotion/styled';

import { ProjectCard } from '../ProjectCard';

export const ProjectCards = () => (
  <Wrapper>
    {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(ProjectCard)}
  </Wrapper>
);

const Wrapper = styled('div')`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
`;
