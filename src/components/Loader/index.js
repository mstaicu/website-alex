import React from 'react';
import styled from '@emotion/styled';

export const Loader = () => <Wrapper>Loading stuff...</Wrapper>;

const Wrapper = styled('div')`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;
`;
