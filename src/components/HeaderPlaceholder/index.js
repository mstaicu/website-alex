import React from 'react';

import styled from '@emotion/styled';

export const HeaderPlaceholder = () => (
  <div>
    <Placeholder />
  </div>
);

const Placeholder = styled('div')`
  width: 50px;
  height: 50px;

  background-color: grey;
`;
