/**
 * calc the spacing based on a base layout
 * @param {number} quantity .
 * @returns {string} .
 */
export const space = (quantity) => ({ theme }) => `${(theme.space / 10) * quantity}rem`

/**
 * Get spacing for given layout
 * @param {string} type .
 * @param {string} variant Media query.
 * @returns {string} .
 */
export const getLayoutSpace = (type, variant = 'sm') => ({ theme }) => {
  const { layout } = theme
  const layoutType = layout[type]
  const size = layoutType[variant] || layoutType

  return {
    top: space(size.top)({ theme }),
    right: space(size.right)({ theme }),
    bottom: space(size.bottom)({ theme }),
    left: space(size.left)({ theme }),
  }
}

/**
 * Return a string with the values of the layout
 * @param {string} key .
 * @param {string} variant Media query.
 * @returns {string} .
 */
export const getLayoutStyle = (key, variant = 'sm') => ({ theme }) => {
  const {
    top, right, bottom, left,
  } = getLayoutSpace(key, variant)({ theme })

  return `${top} ${right} ${bottom} ${left}`
}
