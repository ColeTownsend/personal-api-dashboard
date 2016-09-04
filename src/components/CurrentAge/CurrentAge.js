import React, { Component } from 'react'
import moment from 'moment'

const myDOB = '1993-06-11'
const yearInSeconds = 31536000

const getCurrentAge = (inputDOB) => {
  return (moment().diff(inputDOB, 'seconds') / yearInSeconds).toPrecision(12)
}

export default class CurrentAge extends Component {
  constructor() {
    super()
    this.state = {
      age: getCurrentAge(myDOB)
    }
  }

  componentWillUnmount() {
  }

  setAgeState(date) {
    this.setState({age: getCurrentAge(date)})
  }

  componentDidMount() {
    this.setAgeState(myDOB)
    setInterval(() => {
      this.setAgeState(myDOB)
    }, 300)
  }

  render() {
    return (
      <h1>You are <span className="age">{this.state.age}</span> years old.</h1>
    )
  }
}
