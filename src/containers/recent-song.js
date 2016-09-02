import { connect } from 'react-redux'
import RecentSong from '../components/RecentSong/RecentSong'
import actions from '../components/RecentSong/songActions'

const select = function(state) {
  return {
    song: state.recentSongs[0],
  }
}

export default connect(select, actions)(RecentSong);
