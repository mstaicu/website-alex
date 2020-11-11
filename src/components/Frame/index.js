import React from 'react';

import styled from '@emotion/styled';

export const Frame = ({ children, ratio = '1:1' }) => {
  if (React.Children.count(children) !== 1) {
    throw new Error('Frame components should have just one child element');
  }

  const [width, height] = ratio.split(':');

  return (
    <InternalFrame>
      <InternalFrameContent n={height} d={width}>
        {children}
      </InternalFrameContent>
    </InternalFrame>
  );
};

const InternalFrame = styled.div`
  /**
   * intrinsic ratio technique
   * 
   * padding, even in the vertical dimension, is relative to the element’s width. 
   * That is, padding-bottom: 56.25% will make an empty element (with no set height) 
   * two thirds as high as it is wide — an aspect ratio of 16:9. 
   * 
   * You find 56.25% by dividing 9 (representing the height) by 16 (representing the width) — 
   * the opposite way around to finding the aspect ratio itself
   * 
   * for our case, we want a 23:30 ratio, so we divide 30 by 23 and multiply by 100%
   * in order to achieve a percentage value with the decimal point moved two places to the right
   * 
   * 'n' is for numerator
   * 'd' is for denominator
   */

  padding-bottom: calc(
    (
        ${({ children }) => children.props.n} /
          ${({ children }) => children.props.d}
      ) * 100%
  );

  /**
   * the relative position establishes the parent to which all non-statically positioned elements
   * (for example position: absolute; elements) are positioned and offset from via top, left CSS properties
   */
  position: relative;
`;

const InternalFrameContent = styled.div`
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;
