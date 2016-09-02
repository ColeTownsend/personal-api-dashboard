import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'

import Events from './components/Events/Events'
import ExpectedRun from './components/ExpectedRun/ExpectedRun'
import RecentSong from './containers/recent-song'
import CurrentAge from './components/CurrentAge/CurrentAge'

import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="goals">
        <CurrentAge/>
        <h1>
          Today is August 18th, 2016. <br/>
          You are 23 years, X days old. <br/><br/>
          What are you trying to do today?
        </h1>
      </div>
        <div className="schedule">
          <Events />
          <ExpectedRun />
          <RecentSong />
        </div>
      </div>
    );
  }
}

class OMG extends Component {
  render() {
    return (
    <Provider store={store}>
      <App />
    </Provider>
  );
  }
}

export default OMG;
