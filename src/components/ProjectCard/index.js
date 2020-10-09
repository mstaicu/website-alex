import React from 'react';

import styled from '@emotion/styled';

const cardAspectRatio = 30 / 23;

export const ProjectCard = () => (
  <CardWrapper aspectRatio={cardAspectRatio}>
    <Card>
      <CardBorder>
        <CardContent>
          <CardContentTop>
            <ProjectCategory>Graphic Design</ProjectCategory>
          </CardContentTop>
          <CardContentBottom>
            <ProjectName>Nume Proiect</ProjectName>
            <ProjectDate>Nume Proiect</ProjectDate>
          </CardContentBottom>
        </CardContent>
      </CardBorder>
    </Card>
  </CardWrapper>
);

const CardWrapper = styled('div')`
  width: 100%;

  /**
   * In order to define an element that maintains an aspect ratio across viewports
   * we set its height to 0 as the height will be calculated by using bottom padding
   */
  height: 0;

  /**
   * By using a percentage value with the padding property, we get the parent's percentage
   * and multiply it by the height ratio and then divide it by the width ratio
   * in order to obtain an element that has an aspect ratio of 23:30
   */
  padding-bottom: calc(100% * ${props => props.aspectRatio});

  margin-bottom: 4px;

  /**
   * This establishes a parent-child relationship with any absolutely positioned descendants
   */
  position: relative;

  /**
   * Principles:
   * 
   * 1. Design mobile first (media queries contain styles for larger screens)
   * 2. Do not worry too much on specific breakpoint values as they are less relevant 
   *    compared to the design of the page
   */
  @media (min-width: 320px) {
    width: calc((100% / 2) - 4px);
    padding-bottom: calc(
      calc((100% / 2) - 4px) * ${props => props.aspectRatio}
    );

    margin-right: 4px;
  }

  @media (min-width: 640px) {
    width: calc((100% / 4) - 4px);
    padding-bottom: calc(
      calc((100% / 4) - 4px) * ${props => props.aspectRatio}
    );
  }

  @media (min-width: 768px) {
    width: calc((100% / 5) - 4px);
    padding-bottom: calc(
      calc((100% / 5) - 4px) * ${props => props.aspectRatio}
    );
  }

  @media (min-width: 1024px) {
    width: calc((100% / 7) - 4px);
    padding-bottom: calc(
      calc((100% / 7) - 4px) * ${props => props.aspectRatio}
    );
  }

  @media (min-width: 1280px) {
    width: calc((100% / 9) - 4px);
    padding-bottom: calc(
      calc((100% / 9) - 4px) * ${props => props.aspectRatio}
    );
  }
`;

/**
 * This is the element that will hold our content
 * This element is needed because the parent element has no height,
 * but the bottom padding determines the height of the element,
 * thus we need an element positioned inside the parent that will hold the content
 */
const Card = styled('div')`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

const CardBorder = styled('div')`
  width: 100%;
  height: 100%;

  padding: 8px;

  background-color: grey;
`;

const CardContent = styled('article')`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 8px;

  background-color: #fff;
`;

const CardContentTop = styled('div')``;
const CardContentBottom = styled('div')``;

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
