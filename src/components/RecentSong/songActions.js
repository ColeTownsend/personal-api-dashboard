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
    return function(dispatch) {
      const url = formattedRequestUrl(latestTrackQueries);

      return fetch(url)
        .then(response => response.json())
        .then(json => dispatch({
          type: 'ADD_ALL_SONGS',
          songs: json,
        }));
    }
  },
}
