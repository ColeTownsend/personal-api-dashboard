import './RecentSong.css'
import React, { Component } from 'react'
import songActions from './songActions'
import spotify from './spotify.svg'
import 'whatwg-fetch'



const getFirstSong = (data) => {
  const title = data.recenttracks.track[0].name
  const artist = data.recenttracks.track[0].artist['#text']
  console.log(data, title, artist)
  return {
    title: title,
    artist: artist
  }
}

export default class RecentSong extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      song: null
    }
  }

  componentDidMount() {
    songActions.getRecentSongs()
    .then((data) => this.setState({song: getFirstSong(data)}))
  }

  render() {
    console.log(this.state)
    if (this.state.song != null) {
      return (
        <div className='dash-item recentSong'>
          <div>
            <h3>{this.state.song.title}</h3>
            <p>{this.state.song.artist}</p>
          </div>
          <img src={spotify} alt=""/>
        </div>
      )
    } else {
      return (
        <div className='dash-item recentSong'>
          <div>
            <h3>Loading...</h3>
            <p>The data have not arrived yet.</p>
          </div>
          <img src={spotify} alt=""/>
        </div>
      )
    }
  }
}
