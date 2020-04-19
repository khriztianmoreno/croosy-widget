import colors from './colors'
import fontFaces from './fonts'

const buttons = {
  primary: {
    backgroundColor: colors.primary,
    border: `2px solid ${colors.secondary}`,
    borderRadius: '8px',
    color: colors.secondary,
    fontFamily: fontFaces.nunitoSans,
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 600,
    alignItems: 'center',
    letterSpacing: 'normal',
    lineHeight: 1.2,
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.primary,
    border: `2px solid ${colors.primary}`,
    borderRadius: '8px',
    fontFamily: fontFaces.nunitoSans,
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: 'normal',
    alignItems: 'center',
    lineHeight: 1.2,
  },
  outline: {
    backgroundColor: colors.secondary,
    border: `2px solid ${colors.primary}`,
    color: colors.primary,
    fontFamily: fontFaces.nunitoSans,
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: 'normal',
    lineHeight: 1.2,
    alignItems: 'center',
  },
}

export default buttons
