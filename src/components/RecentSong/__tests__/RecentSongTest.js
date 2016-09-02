import React from 'react'
import ReactDOM from 'react-dom'
import RecentSong from '../RecentSong'
import TestUtils from 'react-addons-test-utils'

it('calls getRecentSongs on mount', () => {
  const getRecentSongs = jest.fn();
  TestUtils.renderIntoDocument(
    <RecentSong getRecentSongs={getRecentSongs}/>
  )

  expect(getRecentSongs.mock.calls.length).toBe(1)
})

it('displays the first recent song provided', () => {
  const fakeSong = { title: 'Vogue', artist: 'KMFDM', album: 'Money' }
  const getRecentSongs = jest.fn();
  const RecentSongComponent = TestUtils.renderIntoDocument(
    <RecentSong getRecentSongs={getRecentSongs} song={fakeSong}/>
  )

  const recentSongNode = ReactDOM.findDOMNode(RecentSongComponent)
  const title = recentSongNode.querySelector('.song-title').textContent
  const artist = recentSongNode.querySelector('.song-artist').textContent

  expect(artist).toBe(`${fakeSong.artist} – ${fakeSong.album}`)
  expect(title).toBe(fakeSong.title)
})
