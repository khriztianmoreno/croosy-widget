import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { useAppState } from '../context'
import {
  Body,
  Category,
  CategoryImage,
  Container,
  ContentLink,
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
    url,
    responsible,
    date,
  } = props
  const start = moment(date)
  return (
    <Container onClick={() => { setShowDetail(!isDetailOpen) }}>
      <Header>
        <TimeContainer>
          <Time fontColor={fontColor}>
            {start.format('LT')}
          </Time>
        </TimeContainer>
        <div>
          <Title fontColor={fontColor}>
            {name}
          </Title>
          <div className="speaker-info">
            <Location>{location}</Location>
            <Category color={category.color}>
              <CategoryImage src={category.imageUrl} alt="category logo" />
              {responsible}
            </Category>
          </div>
        </div>
      </Header>
      <Body className={isDetailOpen ? '' : 'collapsed'}>
        {
          description
            ? (
              <>
                <Description
                  isDetailOpen={isDetailOpen}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <ContentLink isDetailOpen={isDetailOpen}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Acceso a la actividad
                  </a>
                </ContentLink>
              </>
            )
            : <Description isDetailOpen={isDetailOpen}>Sin descripción</Description>
        }
      </Body>
    </Container>
  )
}

Activity.propTypes = {
  category: PropTypes.shape(),
  date: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  responsible: PropTypes.string,
  url: PropTypes.string,
}

Activity.defaultProps = {
  category: {},
  description: '',
  date: '',
  location: '',
  name: '',
  responsible: '',
  url: '',
}

export default Activity
