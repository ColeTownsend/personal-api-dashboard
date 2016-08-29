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

  setAgeState() {
    this.setState({age: getCurrentAge(myDOB)})
  }

  incrementAge() {

  }

  componentDidMount() {
    this.setAgeState()
    const decimalsPerSecond = Math.pow(10, 9) / (365 * 24 * 60 * 60)

    setInterval(() => {
      let newAge = parseInt(parseFloat( this.state.age * yearInSeconds + decimalsPerSecond * 0.07))
      this.setState({age: newAge})

    }, 100)
  }

  render() {
    return (
      <h1>{this.state.age}</h1>
    )
  }
}
