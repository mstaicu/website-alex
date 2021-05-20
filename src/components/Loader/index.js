import React from 'react';
import styled from '@emotion/styled';

export const Loader = () => <Wrapper>Loading stuff...</Wrapper>;

const Wrapper = styled('div')`
  width: 100%;
  /**
   * This calculation is needed because we cannot set a height of 100% on the #root 
   */
  height: calc(100vh - 6rem);

  display: flex;

  justify-content: center;
  align-items: center;
`;
