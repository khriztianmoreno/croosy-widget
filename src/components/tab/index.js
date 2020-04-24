import React from 'react'
import PropTypes from 'prop-types'

import { useAppState } from '../context/context'
import {
  TabButton,
  EventDay,
  EventDetailNumber,
  EventDetailDate,
  LabelDate,
  Label,
  LabelNumber,
} from './styles'

const Tab = (props) => {
  const {
    application: {
      alternateBackgroundColor,
      fontColor,
      alternateFontColor,
      secondaryFontColor,
    },
  } = useAppState()
  const {
    day,
    date,
    isActive,
    cbClick,
  } = props
  const eventDate = `${date.format('dddd')} ${date.format('DD')}`

  return (
    <TabButton
      role="tab"
      active={isActive}
      onClick={() => cbClick(date)}
      colors={{
        bgColor: alternateBackgroundColor,
        fontColor,
        activateFontColor: secondaryFontColor,
        alternateFontColor,
      }}
    >
      <EventDay>
        <EventDetailNumber>
          <LabelNumber>{day}</LabelNumber>
        </EventDetailNumber>
        <EventDetailDate>
          <Label>Día</Label>
          <LabelDate active={isActive}>
            {eventDate}
          </LabelDate>
        </EventDetailDate>
      </EventDay>
    </TabButton>
  )
}

Tab.propTypes = {
  cbClick: PropTypes.func.isRequired,
  date: PropTypes.shape(),
  day: PropTypes.number,
  isActive: PropTypes.bool,
}

Tab.defaultProps = {
  day: null,
  date: {},
  isActive: false,
}

export default Tab
