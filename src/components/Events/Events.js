import './Event.css'
import React, { Component } from 'react'
import moment from 'moment'
import eventActions from './eventActions'
import calendarIcon from './calendar.svg'


let today = moment().format('YYYY-MM-DD')
let tomorrow = moment().add('days', 1).format('YYYY-MM-DD')

const makeEventTimeLocationString = (data) => {
  const startTime = data.start.moment(data.start).format('LT')
  const location  = data.location
  return `${startTime} at ${location}`
}

const makeEventWithString = (data) => {
  const eventTitle = data.start.moment(data.start).format('LT')

  if (data.attendees.length() >= 1) {
    const withPerson = data.attendees
    return `${eventTitle} with ${withPerson}`
  }
  else {
    return eventTitle
  }
}

export default class ExpectedRun extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      allEvents: null,
      todaysEventsData: null
    }
  }

  componentDidMount() {
    eventActions.getTodaysEvents(today, tomorrow)
    .then((data) => this.setState({allEvents: data}))
  }

  render() {
    if (this.state.todaysEventsData != null) {
      const timeAt = makeEventTimeLocationString(this.state.todaysEventsData)
      const eventWith = makeEventWithString(this.state.todaysEventsData)
      return (
        <div className='dash-item'>
          <div>
            <h3>{eventWith}</h3>
            <p>{timeAt}</p>
          </div>
          <img src={calendarIcon} alt="calendar icon"/>
        </div>
      )
    } else {
      return (
        <div className='dash-item'>
          <div>
            <h3>Loading...</h3>
            <p>The data have not arrived</p>
          </div>
          <img src={calendarIcon} alt="calendar icon"/>
        </div>
      )
    }
  }
}
