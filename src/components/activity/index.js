import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { useAppState } from '../context/context'
import {
  Body,
  Category,
  Container,
  Description,
  Header,
  Location,
  Time,
  TimeContainer,
  Title,
} from './styles'

const Activity = (props) => {
  const [isDetailOpen, setShowDetail] = useState(false)
  const {
    application: { fontColor },
  } = useAppState()
  const {
    category,
    description,
    location,
    name,
    responsible,
    date,
  } = props
  const start = moment(date)
  return (
    <Container className="col-xs-12" onClick={() => { setShowDetail(!isDetailOpen) }}>
      <Header className="row">
        <TimeContainer className="col col-xs-12">
          <Time fontColor={fontColor}>
            {start.format('LT')}
          </Time>
        </TimeContainer>
        <div className="col-xs-12 col-md">
          <Title fontColor={fontColor}>
            {name}
          </Title>
          <div className="speaker-info">
            <Location>{location}</Location>
            <Category color={category.color}>
              {responsible}
            </Category>
          </div>
        </div>
      </Header>
      {
        description
          ? (
            <Body className={isDetailOpen ? '' : 'collapsed'}>
              <Description dangerouslySetInnerHTML={{ __html: description }} />
            </Body>
          ) : null
      }
    </Container>
  )
}

Activity.propTypes = {
  category: PropTypes.shape(),
  description: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  responsible: PropTypes.string,
}

Activity.defaultProps = {
  category: {},
  description: '',
  date: '',
  location: '',
  name: '',
  responsible: '',
}

export default Activity
