import React from 'react'
import moment from 'moment'
import styled from '@emotion/styled'

import { useAppState } from '../context/context'

import { media } from '../../styles/utils'

const InfoContainer = styled.div`
  margin-bottom: 10px;

  ${media.md`
    p {
      display: inline;
      padding-right: 10px;
    }
  `}
`

const InfoEvent = () => {
  const {
    application: {
      name,
      startDate,
      endDate,
    },
  } = useAppState()
  const start = moment(startDate, 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss')
  const end = moment(endDate, 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss')
  const date = name
    ? `${start.format('l')} - ${end.format('l')}`
    : ''

  return (
    <InfoContainer>
      <p>{name}</p>
      <p>{date}</p>
    </InfoContainer>
  )
}

export default InfoEvent
