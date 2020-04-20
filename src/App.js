import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Schedule from './components/schedule'

const getData = async (appId, setState) => {
  const BASE = process.env.REACT_APP_API_SERVICE_URL
  try {
    const response = await fetch(`${BASE}/Widgets/${appId}`)
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    setState(data)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

function App(props) {
  const [data, setData] = useState({})

  useEffect(() => {
    const { applicationId } = props
    getData(applicationId, setData)
  }, [])

  return (
    <div className="container">
      <Schedule startDate={data.startDate} endDate={data.endDate} />
    </div>
  )
}

App.propTypes = {
  applicationId: PropTypes.string.isRequired,
}

export default App
