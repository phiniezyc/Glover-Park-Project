import React from 'react';

import { connect } from 'react-redux';
import { fetchPlaylistTracks } from '../actions/index';

// FIXME: Make a presentational component (functional) since using redux for state management.
const SeeTracksButton = (props) => {
  const buttonDivStyle = {
    flex: '100%',
  };
  return (
    <div style={buttonDivStyle}>
      {/* // FIXME: Need to get playlist id in, now hardcoded */}
      <button onClick={() => props.fetchPlaylistTracks(props.playlistId)}>Redux Tracks</button>
      { // FIXME: REMOVE AFTER DEV
            (props.playlistTracks) ? <h2>{props.playlistTracks.length}</h2> : 'loading'
          }
    </div>
  );
};


// This function is used to convert redux global state to desired props.
function mapStateToProps(state) {
  // console.log("yo", ownProps.playlistId);
  // `state` variable contains whole redux state.
  return {
    playlistTracks: state.playlistTracks.tracks,
  };
}

// This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
  return {
    // This function will be available in component as `this.props.fetchTodos`
    fetchPlaylistTracks: (playlistId) => {
      dispatch(fetchPlaylistTracks(playlistId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeeTracksButton);
