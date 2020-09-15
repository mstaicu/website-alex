import React from 'react';

import styled from '@emotion/styled';

export const ProjectCard = () => (
  <Exterior>
    <Interior>
      <Top>
        <ProjectCategory>Graphic Design</ProjectCategory>
      </Top>

      <Bottom>
        <ProjectName>Nume Proiect</ProjectName>
        <ProjectDate>Data: Iulie 2020</ProjectDate>
      </Bottom>
    </Interior>
  </Exterior>
);

const Exterior = styled('div')`
  flex-basis: 100%;

  padding: 8px;
  border: 8px solid white;

  margin-bottom: 8px;

  background-color: grey;

  /**
   * Principles:
   * 
   * 1. Design mobile first (media queries contain styles for larger screens)
   * 2. Do not worry too much on specific breakpoint values as they are less relevant 
   *    compared to the design of the page
   */
  @media only screen and (min-width: 321px) {
    flex-basis: 50%;
  }

  @media only screen and (min-width: 667px) {
    flex-basis: 25%;
  }

  @media only screen and (min-width: 769px) {
    flex-basis: 20%;
  }

  @media only screen and (min-width: 1200) {
    flex-basis: 180px;
  }
`;

const Interior = styled('article')`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  min-height: 200px;

  padding: 8px;

  background-color: #fff;
`;

const Top = styled('div')``;
const Bottom = styled('div')``;

const ProjectCategory = styled('p')`
  margin: 0;
`;

const ProjectName = styled('h1')`
  margin: 0 0 8px 0;

  font-size: 16px;
`;

const ProjectDate = styled('p')`
  margin: 0;
`;
