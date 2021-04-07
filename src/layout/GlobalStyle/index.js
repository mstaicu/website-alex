import React from 'react';
import { Global, css } from '@emotion/core';

// TODO: Review this, what weight does it add to the bundle?
import emotionNormalize from 'emotion-normalize';

/**
 * These 3 fonts account for 188 KiB of the payload
 */
import OpenSansRegularWoff from '../../assets/fonts/open-sans-v17-latin-regular.woff';
import OpenSansRegularWoffTwo from '../../assets/fonts/open-sans-v17-latin-regular.woff2';

import OpenSansBoldWoff from '../../assets/fonts/open-sans-v17-latin-700.woff';
import OpenSansBoldWoffTwo from '../../assets/fonts/open-sans-v17-latin-700.woff2';

import OpenSansItalicWoff from '../../assets/fonts/open-sans-v17-latin-700.woff';
import OpenSansItalicWoffTwo from '../../assets/fonts/open-sans-v17-latin-700.woff2';

export const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}

      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        src: url(${OpenSansRegularWoff}) format('woff'),
          url(${OpenSansRegularWoffTwo}) format('woff2');
      }
      @font-face {
        font-family: 'Open Sans';
        font-style: bold;
        font-weight: 700;
        src: url(${OpenSansBoldWoff}) format('woff'),
          url(${OpenSansBoldWoffTwo}) format('woff2');
      }
      @font-face {
        font-family: 'Open Sans';
        font-style: italic;
        font-weight: normal;
        src: url(${OpenSansItalicWoff}) format('woff'),
          url(${OpenSansItalicWoffTwo}) format('woff2');
      }
      html,
      body {
        font-family: 'Open Sans', sans-serif;
      }
      html {
        box-sizing: border-box;
        font-size: 8px;

        width: 100%;
        height: 100%;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      body {
        width: 100%;
        height: 100%;
      }
      #root {
        width: 100%;
        height: 100%;

        padding: 24px;
      }
    `}
  />
);
