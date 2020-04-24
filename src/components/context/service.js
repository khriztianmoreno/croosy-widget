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

async function applicationData(appId) {
  try {
    const data = await fetchData(`${BASE}/Widgets/applications/${appId}`)

    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return null
  }
}

async function activitiesData(appId, day) {
  try {
    const data = await fetchData(`${BASE}/Widgets/applications/${appId}/activities/?date=${day}`)

    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return null
  }
}

const services = {
  applicationData,
  activitiesData,
}

export default services
