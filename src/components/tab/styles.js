import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const TabButton = styled.button(
  {
    borderRadius: 0,
    display: 'inherit',
    padding: '5px 15px',
  },
  ({ theme, colors, active }) => css`
    border: 1px solid ${theme.colors.alto};
    min-width: 174px;

    ${active ? css`
      color: ${colors.activateFontColor || theme.colors.shamrock};
      background-color: ${colors.bgColor || theme.colors.midnight};
      border-color: ${colors.bgColor || theme.colors.midnight};
    ` : css`
      color: ${colors.fontColor || theme.colors.midnight};
      background-color: ${theme.colors.white};
    `}
  `,
)

export const EventDay = styled.div`
  align-items: center;
  display: flex;
`

export const Label = styled.p`
  font-size: 17px;
  font-weight: 800;
  text-transform: uppercase;
`

export const LabelDate = styled.p(
  ({ theme, active }) => css`
    color: ${active ? theme.colors.white : theme.colors.monson};
    font-size: 13px;
    text-transform: capitalize;
  `,
)

export const EventDetailNumber = styled.div`
  margin-right: 20px;
`

export const LabelNumber = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1;
  min-width: 30px;
`

export const EventDetailDate = styled.div`
  position: relative;
  text-align: left;
`
