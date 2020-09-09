import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import styled from '@emotion/styled';

import { Routes } from '../Routes';

import { Header, Loader } from '@src/components/ui';

export const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Suspense fallback={<Loader />}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Suspense>

      <Main>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </Main>

      <Footer>
        <h2>WAAT</h2>
      </Footer>
    </Wrapper>
  </BrowserRouter>
);

const Wrapper = styled('div')`
  display: grid;

  grid-template-rows: auto;
  grid-template-columns: auto;

  grid-template-areas:
    'header'
    'main'
    'footer';
`;

const HeaderWrapper = styled('header')`
  grid-area: header;
`;

const Main = styled('main')`
  grid-area: main;
`;

const Footer = styled('footer')`
  grid-area: footer;
`;
