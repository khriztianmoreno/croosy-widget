/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import Moment from 'moment'
import get from 'lodash/get'
import { extendMoment } from 'moment-range'
import Slider from 'react-slick'

import 'moment/locale/es'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useAppState, getActivities, useAppDispatch } from '../context/context'
import Info from '../InfoEvent'
import Tab from '../tab'
import Activity from '../activity'
import ActivityLoader from '../ActivityLoader'

import ContaienrNavbar from './styles'

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
      breakpoint: 1280,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 4,
      },
    },
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

const Schedule = () => {
  const {
    application: { id: appId, startDate, endDate },
    activities,
  } = useAppState()
  const dispatch = useAppDispatch()
  const [isLoading, setLoading] = useState(true)
  const [currentTab, setCurrentTab] = useState(null)
  const [rangeDays, setRangeDays] = useState([])

  const getActivitiesByDay = async (day) => {
    try {
      getActivities(dispatch, appId, day)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const start = moment(startDate, 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss')
    const end = moment(endDate, 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss')
    const range = moment.range(start, end)

    const acc = Array.from(range.by('day'))
    // get the first day
    const firstDay = get(acc, '[0]', null)
    if (firstDay) {
      const day = firstDay.format('YYYY-MM-DD')
      getActivitiesByDay(day, appId)
    }

    setRangeDays(acc)
  }, [startDate])

  useEffect(() => {
    if (currentTab) {
      setLoading(true)
      const day = currentTab.format('YYYY-MM-DD')
      getActivitiesByDay(day, appId)
    }
  }, [currentTab])

  return (
    <>
      <Info />
      <ContaienrNavbar>
        <Slider {...settings}>
          {
            rangeDays.map((day, idx) => {
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
      </ContaienrNavbar>
      <div>
        {
          isLoading
            ? (
              <div className="col-xs-12">
                <ActivityLoader />
                <ActivityLoader />
                <ActivityLoader />
              </div>
            )
            : activities.map((act) => <Activity key={act.id} {...act} />)
        }
      </div>
    </>
  )
}

export default React.memo(Schedule)
