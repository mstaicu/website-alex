import React from 'react';

import styled from '@emotion/styled';

import { Frame } from '../Frame';

export const ProjectCard = ({ project }) => (
  <Card>
    <Frame ratio="23:30">
      <CardContent>
        <CardContentTop>
          <ProjectCategory>{project.subCategory}</ProjectCategory>
        </CardContentTop>
        <CardContentBottom>
          <ProjectName>{project.name}</ProjectName>
          <ProjectDate>{new Date(project.date).toDateString()}</ProjectDate>
        </CardContentBottom>
      </CardContent>
    </Frame>
  </Card>
);

const Card = styled('div')`
  /**
   * this width value makes 23:30 aspect ratio cards fall on the 8px base grid
   */
  width: 153px;

  /**
   * these margins are for spacing cards horizontally and vertically
   */
  margin-right: 7px;
  margin-bottom: 1rem;
`;

const CardContent = styled('article')`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 1rem;
  border: 0.5rem solid grey;

  font-size: 2rem;

  background-color: #fff;
`;

const CardContentTop = styled('div')``;
const CardContentBottom = styled('div')``;

const ProjectCategory = styled('p')`
  margin: 0;
  overflow-wrap: break-word;
`;

const ProjectName = styled('h2')`
  margin: 0 0 1rem 0;
`;

const ProjectDate = styled('p')`
  margin: 0;
`;
