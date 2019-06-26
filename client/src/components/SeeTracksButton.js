import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPlaylistTracks } from '../actions/index';

// FIXME: Make a presentational component (functional) since using redux for state management.
class SeeTracksButton extends Component {

  render() {
    // V4 of React-Router Redirect component instead of directly interacting w/ this.props.history

    const buttonDivStyle = {
      flex: '100%'
    };
    return (
        <div style={buttonDivStyle}>
          {/* // FIXME: Need to get playlist id in, now hardcoded */}
          <button onClick={() => this.props.fetchPlaylistTracks(this.props.playlistId)}>Redux Tracks</button>
          { // FIXME: REMOVE AFTER DEV
            (this.props.playlistTracks) ? <h2>{this.props.playlistTracks.length}</h2> : "loading"
          }
        </div>
    );
  }
}

// This function is used to convert redux global state to desired props.
function mapStateToProps(state, ) {
  // console.log("yo", ownProps.playlistId);
  // `state` variable contains whole redux state.
  return {
    playlistTracks: state.playlistTracks.tracks
  };
  }

  // This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
  return {
    // This function will be available in component as `this.props.fetchTodos`
    fetchPlaylistTracks: (playlistId) => {
      dispatch(fetchPlaylistTracks(playlistId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeeTracksButton);
