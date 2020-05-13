import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

import { media } from '../../styles/utils'

export const Container = styled.div(
  (props) => css`
    background: ${props.theme.colors.white};
    border-radius: 8px;
    border: none;
    box-shadow: 0px 5px 15px 0px rgba(173, 171, 171, 0.4);
    cursor: pointer;
    margin-bottom: 1.5rem;
  `,
)

export const Header = styled.div(
  ({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 0;
    border: none;
    display: flex;
    padding: 20px 35px;
  `,
)

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Time = styled.h4(
  ({ theme, fontColor }) => css`
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: ${fontColor || theme.colors.midnight};
    line-height: 1.3;
  `,
)

export const Title = styled.h5(
  ({ theme, fontColor }) => css`
    color: ${fontColor || theme.colors.midnight};
    font-size:  22px;
    line-height: 1.3;

    ${media.md`
      line-height: 1.6;
    `}
  `,
)

export const Location = styled.p(
  (props) => css`
    color: ${props.theme.colors.monson};
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
  `,
)

export const Category = styled.p(
  {
    alignItems: 'center',
    display: 'flex',
    fontSize: '14px',
  },
  (props) => css`
    color: ${props.color || 'unset'};
  `,
)

export const CategoryImage = styled.img`
  margin-right: 10px;
  width: 20px;
`

const fadeInDown = keyframes`
  0% {
    height: 0;
  }

  25% {
    height: 25%;
  }

  50% {
    height: 50%;
  }

  75% {
    height: 75%;
  }

  100% {
    height: 100%;
  }
`

export const Body = styled.div``

export const Description = styled.div(
  {
    fontSize: '16px',
    height: 0,
    overflow: 'hidden',
    padding: 0,
  },
  ({ theme, isDetailOpen }) => css`
    background: ${theme.colors.white};
    font-family: 'Poppins', sans-serif;

    ${isDetailOpen ? css`
      padding-left: 35px;
      padding-right: 35px;
      padding-bottom: 20px;
      animation: ${fadeInDown} 1s ease infinite;
      transition: padding-bottom 0.5s ease-out;
    ` : ''}
  `,
)

export const ContentLink = styled.div(
  {
    fontSize: '16px',
    height: 0,
    overflow: 'hidden',
    padding: 0,
  },
  ({ theme, isDetailOpen }) => css`
    background: ${theme.colors.white};
    font-family: 'Poppins', sans-serif;

    ${isDetailOpen ? css`
      padding-left: 35px;
      padding-right: 35px;
      padding-bottom: 20px;
      animation: ${fadeInDown} 1s ease infinite;
      transition: padding-bottom 0.5s ease-out;
    ` : ''}
  `,
)
