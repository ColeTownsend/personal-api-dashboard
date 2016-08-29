import 'whatwg-fetch'
import queryString from 'query-string'

const songsUrl = "http://ws.audioscrobbler.com/2.0/?"
const latestTrackQueries = {
  "method": "user.getrecenttracks",
  "user": "coletownsend",
  "api_key": process.env.SPOTIFY_KEY,
  "format": "json"
}

const stringifyUrl = (queryObject) => queryString.stringify(queryObject)
const formattedRequestUrl = (queryObject) => {
  return `${songsUrl}${stringifyUrl(queryObject)}`
}

export default {
  getRecentSongs() {
    return fetch(formattedRequestUrl(latestTrackQueries))
    .then((response) => response.json())
  }
}
