import React from 'react';
import styled from '@emotion/styled';

// window.location.href

export const Footer = () => (
  <Wrapper>
    <Left>{new Date().getFullYear()} Dromp</Left>
    <Right>Share</Right>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div``;
const Right = styled.div``;
