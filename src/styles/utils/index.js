import get from 'lodash/get'

import typography from '../constants/typography'

export { default as media } from './media'
export { space, getLayoutSpace, getLayoutStyle } from './layout'

/**
 * Generate the css from the typography given.
 * @param {string} key path rto the typography eg. h1, lg.h1
 * @returns {string} .
 */
export const typographyStyle = (key) => {
  const item = get(typography, key, null)

  if (!item) {
    return ''
  }

  return `
    font-family: ${item.fontFamily};
    font-size: ${item.fontSize};
    font-weight: ${item.fontWeight};
    line-height: ${item.lineHeight};
    letter-spacing: ${item.letterSpacing};
  `
}
