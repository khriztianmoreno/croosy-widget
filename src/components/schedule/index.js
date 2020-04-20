/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import Slider from 'react-slick'

import 'moment/locale/es'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Tab from '../tab'

const moment = extendMoment(Moment)
Moment.locale('es')

const settings = {
  dots: false,
  infinite: false,
  slidesToScroll: 2,
  slidesToShow: 6,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
}

const schedule = (props) => {
  const [currentTab, setCurrentTab] = useState(null)
  const { startDate, endDate } = props
  const start = moment(startDate, 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss')
  const end = moment(endDate, 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss')
  const range = moment.range(start, end)

  const acc = Array.from(range.by('day'))

  return (
    <>
      <Slider {...settings}>
        {
          acc.map((day, idx) => {
            const isActive = !currentTab
              ? idx === 0
              : day.isSame(currentTab, 'day')
            return (
              <Tab
                key={idx}
                date={day}
                day={idx + 1}
                isActive={isActive}
                cbClick={setCurrentTab}
              />
            )
          })
        }
      </Slider>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam ex rerum nihil,
        voluptatem illum dolores culpa aliquid saepe totam sed eligendi molestias architecto
        commodi, natus alias quaerat tempora molestiae!
      </p>
    </>
  )
}

schedule.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

schedule.defaultProps = {
  startDate: '',
  endDate: '',
}

export default schedule
