import React from 'react'
import ReactDOM from 'react-dom'

import Widget from './App'

const el = document.getElementById('croosy-widget')
const applicationId = el.getAttribute('data-croosy-applicationId')
ReactDOM.render(<Widget applicationId={applicationId} />, el)
