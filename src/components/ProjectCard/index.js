import React from 'react';

import styled from '@emotion/styled';

import { Frame } from '../Frame';

export const ProjectCard = ({
  project: {
    category,
    date,
    content: {
      project: { name },
    },
    media: {
      url: { card },
    },
  },
}) => (
  <Frame ratio="23:30">
    <FrameContent>
      <ProjectCover src={card} />
      <ProjectDetails>
        <ProjectDetailsTop>
          <ProjectCategory>{category}</ProjectCategory>
        </ProjectDetailsTop>
        <ProjectDetailsBottom>
          <ProjectName>{name}</ProjectName>
          <ProjectDate>
            {new Date(date).toLocaleDateString(navigator.language)}
          </ProjectDate>
        </ProjectDetailsBottom>
      </ProjectDetails>
    </FrameContent>
  </Frame>
);

const FrameContent = styled('article')`
  width: 100%;
  height: 100%;

  position: relative;

  border: 0.5rem solid grey;

  font-size: 2rem;

  background-color: #fff;

  :hover {
    cursor: pointer;
  }
`;

const ProjectCover = styled('img')`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;

  z-index: 0;
`;

const ProjectDetails = styled('div')`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 1rem;

  position: absolute;
  top: 0;
  left: 0;

  background-color: #fff;

  opacity: 0;
  transition: opacity 500ms ease;

  :hover {
    opacity: 1;
  }

  z-index: 10;
`;

const ProjectDetailsTop = styled('div')``;
const ProjectDetailsBottom = styled('div')``;

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
