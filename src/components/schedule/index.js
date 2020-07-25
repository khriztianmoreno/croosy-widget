/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import Moment from 'moment'
import get from 'lodash/get'
import { extendMoment } from 'moment-range'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import 'moment/locale/es'

import { useAppState, useAppDispatch } from '../context'
import { getActivities } from '../context/service'
import Info from '../InfoEvent'
import Tab from '../tab'
import Activity from '../activity'
import ActivityLoader from '../ActivityLoader'

import ContaienrNavbar from './styles'

const moment = extendMoment(Moment)
Moment.locale('es')

const Schedule = () => {
  const {
    application: {
      id: appId,
      startDate,
      endDate,
      withDataDraft,
    },
    activities,
    isLoading,
  } = useAppState()
  const dispatch = useAppDispatch()
  const [currentTab, setCurrentTab] = useState(null)
  const [rangeDays, setRangeDays] = useState([])

  const getActivitiesByDay = async (day) => {
    try {
      getActivities(dispatch, { appId, day, withDataDraft })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
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
      const day = currentTab.format('YYYY-MM-DD')
      getActivitiesByDay(day, appId)
    }
  }, [currentTab])

  return (
    <>
      <Info />
      <ContaienrNavbar>
        <ScrollMenu
          data={rangeDays.map((day, idx) => {
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
          })}
          selected={currentTab}
          alignOnResize
          alignCenter={false}
        />
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
