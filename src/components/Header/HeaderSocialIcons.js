import React from 'react';

/**
 * More documentation at https://github.com/meko-deng/react-animated-social-icons#readme
 */
import { AnimatedSocialIcon } from 'react-animated-social-icons';

export const HeaderSocialIcons = () => (
  <>
    <AnimatedSocialIcon
      brandName="instagram"
      style={{ padding: 0 }}
      /**
       * Following attributes turn a 'div' into an accessible element
       */
      onKeyDown={({ key }) => key === 'Enter' && console.log('')}
      role="button"
      tabIndex="0"
    />
    <AnimatedSocialIcon
      brandName="dribbble"
      style={{ padding: 0 }}
      /**
       * Following attributes turn a 'div' into an accessible element
       */
      onKeyDown={({ key }) => key === 'Enter' && console.log('')}
      role="button"
      tabIndex="0"
    />
    <AnimatedSocialIcon
      brandName="youtube"
      style={{ padding: 0 }}
      /**
       * Following attributes turn a 'div' into an accessible element
       */
      onKeyDown={({ key }) => key === 'Enter' && console.log('')}
      role="button"
      tabIndex="0"
    />
    <AnimatedSocialIcon
      brandName="vimeo"
      style={{ padding: 0 }}
      /**
       * Following attributes turn a 'div' into an accessible element
       */
      onKeyDown={({ key }) => key === 'Enter' && console.log('')}
      role="button"
      tabIndex="0"
    />
  </>
);
