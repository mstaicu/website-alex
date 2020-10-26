import React from 'react';

import styled from '@emotion/styled';

export const ProjectCard = ({ name, subCategory }) => (
  <Card>
    <Frame>
      <FrameContent>
        <CardContent>
          <CardContentTop>
            <ProjectCategory>{subCategory}</ProjectCategory>
          </CardContentTop>
          <CardContentBottom>
            <ProjectName>{name}</ProjectName>
            {/* <ProjectDate>{date.toString()}</ProjectDate> */}
          </CardContentBottom>
        </CardContent>
      </FrameContent>
    </Frame>
  </Card>
);

const Card = styled('div')`
  // this random value makes 23/30 aspect ratio cards fall on the 8px base grid
  width: 153px;

  margin-right: 7px;
  margin-bottom: 1rem;
`;

const Frame = styled('div')`
  padding-bottom: calc(30 / 23 * 100%);
  position: relative;
`;

const FrameContent = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
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
`;

const ProjectName = styled('h2')`
  margin: 0 0 1rem 0;
`;

// const ProjectDate = styled('p')`
//   margin: 0;
// `;
