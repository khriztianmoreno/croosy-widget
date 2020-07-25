import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useAppDispatch } from './components/context'
import { getApplication } from './components/context/service'
import Schedule from './components/schedule'

function App({ applicationId, withDataDraft }) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApplication(dispatch, { applicationId, withDataDraft })
  }, [])

  return <Schedule />
}

App.propTypes = {
  applicationId: PropTypes.string.isRequired,
  withDataDraft: PropTypes.bool,
}

App.defaultProps = {
  withDataDraft: false,
}

export default App
