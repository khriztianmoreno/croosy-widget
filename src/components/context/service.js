const BASE = process.env.REACT_APP_API_SERVICE_URL

async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint)
    const data = await response.json()

    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return null
  }
}

export async function getApplication(dispatch, payload) {
  const { applicationId: appId, withDataDraft } = payload
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const data = await fetchData(`${BASE}/Widgets/applications/${appId}`)
    dispatch({ type: 'SET_DATA', payload: { ...data, withDataDraft } })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export async function getActivities(dispatch, payload) {
  const { appId, day, withDataDraft } = payload
  const endPoint = `${BASE}/Widgets/applications/${appId}/activities/${withDataDraft ? 'draft' : ''}?date=${day}`
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const activities = await fetchData(endPoint)
    dispatch({ type: 'SET_ACTIVITIES', payload: activities })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}
