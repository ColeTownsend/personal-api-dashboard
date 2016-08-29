import 'whatwg-fetch'

const cronofyUrl = "https://api.cronofy.com/v1/events?"

const eventQueries = (today, tomorrow) => {
  return {
    tzid: 'Etc/UTC',
    include_managed: '1',
    from: today,
    to: tomorrow
  }
}

const eventHeaders = {
  "Authorization": `Bearer ${process.env.CRONOFY_KEY}`,
}

const formattedRequestUrl = (tzid, include_managed, from, to) => {
  return `${cronofyUrl}tzid=${tzid}&include_managed=${include_managed}&from=${from}&to=${to}`
}

export default {
  getTodaysEvents(today, tomorrow) {
    console.log(eventHeaders)
    const queries = eventQueries(today, tomorrow)
    return fetch(formattedRequestUrl(queries.tzid, queries.include_managed, queries.from, queries.to), {
      method: 'get',
      mode: 'no-cors',
      headers: eventHeaders
    })
    .then((response) => response.json())
    .catch((error) => console.log(error))
  }
}
