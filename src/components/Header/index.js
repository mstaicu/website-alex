import React from 'react';

import styled from '@emotion/styled';

import { HeaderPlaceholder } from '../HeaderPlaceholder';
import { HeaderSocialIcons } from '../HeaderSocialIcons';
import { HeaderNav } from '../HeaderNav';

export const Header = () => (
  <Wrapper>
    <Left>
      <HeaderPlaceholder />
    </Left>
    <Center>
      <HeaderNav />
    </Center>
    <Right>
      <HeaderSocialIcons />
    </Right>
  </Wrapper>
);

const Wrapper = styled('div')`
  display: grid;

  grid-template-rows: auto;

  /**
   * Full width for header constituents on mobile devices, i.e. < 650px width
   */
  grid-template-columns: auto;

  /**
   * On small devices, i.e. < 650px width, we stack the header constituents
   */
  grid-template-areas:
    'header-left'
    'header-center'
    'header-right';

  margin-bottom: calc(2rem + 1px);

  /**
   * Principles:
   * 
   * 1. Design mobile first (media queries contain styles for larger screens)
   * 2. Do not worry too much on specific breakpoint values as they are less relevant 
   *    compared to the design of the page
   */
  @media only screen and (min-width: 650px) {
    /**
     * Header constituent width
     * 
     * 15% -> header-left
     * 65% -> header-center
     * 20% -> header-right
     */
    grid-template-columns: 15% 65% 20%;

    /**
     * On larger devices, i.e. > 650px with, adjacent position the header constituents
     */
    grid-template-areas: 'header-left header-center header-right';
  }
`;

const Left = styled('div')`
  grid-area: header-left;

  /**
   * On small devices, i.e. < 650px width, center the grey placeholder
   */
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;

  @media only screen and (min-width: 650px) {
    /**
     * On larger devices, i.e. > 650px with, adjacent position the grey placeholder
     */
    display: block;

    margin-bottom: 0;
  }

  height: 100%;
`;

const Center = styled('div')`
  grid-area: header-center;

  height: 100%;
`;

const Right = styled('div')`
  grid-area: header-right;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  font-size: 2rem;
`;
