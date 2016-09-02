import recentSongs from './recent-songs';

export default function(state = {}, action) {
  return {
    recentSongs: recentSongs(state.recentSongs, action),
  };
}
