// import request from 'es6-request'
import 'whatwg-fetch'

const sheetsUrl = `https://sheetsu.com/apis/v1.0/${process.env.SHEETSU_ID}/search`
const formattedUrl = (key, value) => `${sheetsUrl}?${key}=${value}`

export default {
  expectedRun(encodedDay) {
    return (
      fetch(formattedUrl("Date", encodedDay))
      .then((response) => response.json())
    )
  }
}
