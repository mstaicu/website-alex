import React from 'react';

import styled from '@emotion/styled';

import { Nav } from '../Nav';

export const Header = () => (
  <Wrapper>
    <Left></Left>
    <Center>
      <Nav />
    </Center>
    <Right></Right>
  </Wrapper>
);

const Wrapper = styled('div')`
  display: grid;

  grid-template-rows: auto;
  grid-template-columns: 20% 60% 20%;

  grid-template-areas: 'header-left header-center header-right';
`;

const Left = styled('div')`
  grid-area: header-left;
`;

const Center = styled('div')`
  grid-area: header-center;
`;

const Right = styled('div')`
  grid-area: header-right;
`;
