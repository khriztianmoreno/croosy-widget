import React from 'react'

const AppStateContext = React.createContext()
const AppDispatchContext = React.createContext()

const initialState = {
  application: {},
  activities: [],
  isLoading: true,
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
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
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

export {
  AppProvider,
  useAppState,
  useAppDispatch,
}
