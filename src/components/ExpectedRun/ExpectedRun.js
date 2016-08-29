import './ExpectedRun.css'
import React, { Component } from 'react'
import moment from 'moment'
import 'whatwg-fetch'
import strava from './strava.png'
import runActions from './runActions'

let currentDay = moment().format('MMMM DD, YYYY')

const titleCase = (str) => {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

const makeExpectedRunPhrase = (dayLogData) => {
  const goalMiles = dayLogData['Goal']
  return `Expected to run ${goalMiles} miles`
}

const makeExpectedRunAssignment = (dayLogData) => {
  return titleCase(dayLogData['ASSIGNED'])
}

export default class ExpectedRun extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      run: undefined
    }
  }

  componentDidMount() {
    runActions.expectedRun(currentDay)
    .then((data) => this.setState({run: data[0]}))
  }

  render() {
    if (this.state.run != null) {
      const expectedRunPhrase = makeExpectedRunPhrase(this.state.run)
      const expectedRunAssignment = makeExpectedRunAssignment(this.state.run)

      return (
        <div className='dash-item expectedRunItem'>
          <div>
            <h3>{expectedRunPhrase}</h3>
            <p>{expectedRunAssignment}</p>
          </div>
          <div>
            <img src={strava} alt="Strava icon"/>
          </div>
        </div>
      )
    } else {
      return (
        <div className='dash-item expectedRunItem'>
          <div>
            <h3>Loading...</h3>
            <p>The data have not arrived</p>
          </div>
          <div>
            <img src={strava} alt="Strava icon"/>
          </div>

        </div>
      )
    }
  }
}
