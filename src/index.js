import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import App from './App'

import theme from './styles/theme'
import globalStyles from './styles/global'

import './styles/sass/base.scss'

const el = document.getElementById('croosy-widget')
const applicationId = el.getAttribute('data-croosy-applicationId')

const Widget = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <App applicationId={applicationId} />
  </ThemeProvider>
)


ReactDOM.render(<Widget />, el)
