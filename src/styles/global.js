import { css } from '@emotion/core'

import { typographyStyle, media } from './utils'

export default (theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;600;700;800&display=swap');

  a,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *,
  a:visited,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  *,
  *:focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    -webkit-print-color-adjust: exact;
    font-family: ${theme.fontFaces.primary};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${theme.colors.black};
    padding: 0;
    margin: 0;
  }

  ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((k) => `${k}, .${k}, .${k}-sm {${typographyStyle(k)}}`)}

  ${media.md`
    ${['h1', 'h2', 'h3', 'h4', 'h5'].map((k) => `${k}, .${k} { ${typographyStyle(`lg.${k}`)} }`)}
  `}

  ${['h1', 'h2', 'h3', 'h4', 'h5'].map((k) => `.${k}-lg { ${typographyStyle(`lg.${k}`)} }`)}

  ${['p1', 'p2', 'l1', 'l2'].map((k) => `.${k} {${typographyStyle(k)}}`)}

  em, b, strong {
    font-weight: 700;
  }

  /* .slick-list {
    .slick-track {
      .slick-slide {
        width: 144px !important;
      }
    }
  } */

`
