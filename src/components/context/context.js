import React from 'react'

import service from './service'

const AppStateContext = React.createContext()
const AppDispatchContext = React.createContext()

const initialState = {
  application: {},
  activities: [],
}

function AppReducer(state, action) {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        application: action.payload,
      }
    }
    case 'SET_ACTIVITIES': {
      return {
        ...state,
        activities: action.payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

/* eslint-disable */
function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(AppReducer, initialState)
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

function useAppState() {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider')
  }
  return context
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider')
  }
  return context
}

async function getApplication(dispatch, appId) {
  try {
    const data = await service.applicationData(appId)
    dispatch({ type: 'SET_DATA', payload: data })
  } catch (error) {
    console.error(error)
  }
}

async function getActivities(dispatch, appId, day) {
  try {
    const activities = await service.activitiesData(appId, day)
    dispatch({ type: 'SET_ACTIVITIES', payload: activities })
  } catch (error) {
    console.error(error)
  }
}

export {
  AppProvider,
  useAppState,
  useAppDispatch,
  getApplication,
  getActivities,
}
