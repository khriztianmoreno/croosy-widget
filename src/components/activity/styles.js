import styled from '@emotion/styled'
import { css } from '@emotion/core'

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
    fontSize: '14px',
  },
  (props) => css`
    color: ${props.color || 'unset'};
  `,
)

// const fadeInDown = keyframes`
//   from {
//     opacity: 0;
//     transform: translate3d(0, -100%, 0);
//   }

//   to {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }
// `
// const fadeInUp = keyframes`
//   from {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }

//   to {
//     opacity: 0;
//     transform: translate3d(0, 100%, 0);
//   }
// `

export const Body = styled.div`
  /* overflow:hidden;
  transition:transform 0.3s ease-out;
  height:auto;
  transform:scaleY(1);
  transform-origin:top; */
  display: block;

  &.collapsed {
    display: none;
  }

  /* transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1); */
`

export const Description = styled.div(
  {
    overflow: 'hidden',
    padding: '0 35px 20px',
  },
  ({ theme }) => css`
    background: ${theme.colors.white};
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    overflow: hidden;
    padding: 0 35px 20px;
  `,
)
