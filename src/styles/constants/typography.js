import fontFaces from './fonts'

/**
 * Text Styles for Large and Extra Large
 */

/* Headlines */
const H1Large = {
  fontFamily: fontFaces.primary,
  fontSize: '7.2rem',
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: '-0.01rem',
}

const H1Small = {
  fontFamily: fontFaces.primary,
  fontSize: '3.6rem',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: '-0.01rem',
}

const H2Large = {
  fontFamily: fontFaces.primary,
  fontSize: '4.8rem',
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: 'normal',
}

const H2Small = {
  fontFamily: fontFaces.primary,
  fontSize: '2.4rem',
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: 'normal',
}

const H3Large = {
  fontFamily: fontFaces.primary,
  fontSize: '3.6rem',
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: 'normal',
}

const H3Small = {
  fontFamily: fontFaces.primary,
  fontSize: '1.8rem',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: 'normal',
}

const H4Large = {
  fontFamily: fontFaces.primary,
  fontSize: '2.4rem',
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: 'normal',
}

const H4Small = {
  fontFamily: fontFaces.primary,
  fontSize: '1.6rem',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: '-0.01rem',
}

const H5Large = {
  fontFamily: fontFaces.primary,
  fontSize: '1.8rem',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: '-0.01rem',
}

const H5Small = {
  fontFamily: fontFaces.primary,
  fontSize: '1.4rem',
  fontWeight: 800,
  lineHeight: 1.6,
  letterSpacing: '-0.01rem',
}

const H6 = {
  fontFamily: fontFaces.primary,
  fontSize: '1.6rem',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: 'normal',
}

/* Paragraph and others */
const P1 = {
  fontFamily: fontFaces.primary,
  fontSize: '1.6rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: 'normal',
}

const P2 = {
  fontFamily: fontFaces.primary,
  fontSize: '1.6rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: 'normal',
}

const L1 = {
  fontFamily: fontFaces.primary,
  fontSize: '1.2rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: 'normal',
}

const L2 = {
  fontFamily: fontFaces.primary,
  fontSize: '1.2rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: 'normal',
}

export default {
  h1: H1Small,
  h2: H2Small,
  h3: H3Small,
  h4: H4Small,
  h5: H5Small,
  h6: H6,
  p1: P1,
  p2: P2,
  l1: L1,
  l2: L2,
  // styles by viewport
  lg: {
    h1: H1Large,
    h2: H2Large,
    h3: H3Large,
    h4: H4Large,
    h5: H5Large,
  },
}
