import './RecentSong.css'
import React, { Component } from 'react'
import spotify from './spotify.svg'
import 'whatwg-fetch'

export default class RecentSong extends Component {
  componentDidMount() {
    this.props.getRecentSongs();
  }

  render() {
    if (this.props.song != null) {
      return (
        <div className='dash-item recent-song'>
          <div className='song-data'>
            <h3 className='song-title'>{this.props.song.title}</h3>
            <p className='song-artist'>{this.props.song.artist} – {this.props.song.album}</p>
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
