export default function(state = [], action) {
  switch (action.type) {
  case 'ADD_ALL_SONGS':
  console.log(action.songs);
    return [
      ...state,
      ...action.songs.recenttracks.track.map(track => {
        return {
          title: track.name,
          artist: track.artist['#text'],
          album: track.album['#text'],
        }
      }),
    ]
  default:
    return state;
  }
}
