import React from 'react';

import styled from '@emotion/styled';

export const ProjectCard = () => (
  <CardWrapper>
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
  padding-bottom: calc(100% * 30 / 23);

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
  @media only screen and (min-width: 400px) {
    width: 177px;
    padding-bottom: calc(177px * 30 / 23);

    margin-right: 4px;
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
