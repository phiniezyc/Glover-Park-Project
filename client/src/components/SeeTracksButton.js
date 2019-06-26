import React from 'react';

import { connect } from 'react-redux';
import { fetchPlaylistTracks } from '../actions/index';

const SeeTracksButton = (props) => {
  const buttonDivStyle = {
    flex: '100%',
  };
  return (
    <div style={buttonDivStyle} >
      <button onClick={() => props.fetchPlaylistTracks(props.playlistId)}>Redux Tracks</button>
      { // FIXME: REMOVE AFTER DEV
        (props.playlistTracks) ? <h2>{props.playlistTracks.length}</h2> : 'loading'
      }
    </div>
  );
};


// This function is used to convert redux global state to desired props.
function mapStateToProps(state) { // `state` variable contains whole redux state.
  return {
    playlistTracks: state.playlistTracks.tracks,
  };
}

// This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
  return {
    // This function will be available in component as `this.props.fetchPlaylistTracks`
    fetchPlaylistTracks: (playlistId) => {
      dispatch(fetchPlaylistTracks(playlistId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeeTracksButton);
