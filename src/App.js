/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  useAppDispatch,
  getApplication,
} from './components/context/context'
import Schedule from './components/schedule'

function App({ applicationId }) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApplication(dispatch, applicationId)
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Schedule />
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  applicationId: PropTypes.string.isRequired,
}

export default App
