import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPlaylistTracks } from '../actions/index';

class SeeTracksButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlaylistId: props.playlistId,
      playlistTracks: []
    };
  }

  getPlaylistTracks = () => {
    const access_token = sessionStorage.spotifyToken;
    const playlist_id = this.state.selectedPlaylistId;

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    };
    fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, options)
      .then(response => response.json())
      .then(playlistTracks =>
        this.setState({
          playlistTracks
        })
      )
      .catch(error => console.log(error.message));
  };

  // FIXME: ONLY FOR TESTING! REMOVE WHEN WORKING PROPERLY
  componentDidMount() {
    // When container was mounted, we need to start fetching todos.
    this.props.fetchPlaylistTracks();
    this.props.fetchPlaylistTracks()
  }

  render() {
    // V4 of React-Router Redirect component instead of directly interacting w/ this.props.history
    // if (this.state.playlistTracks > 0) {
    //   // FIXME: PROBABLY DELETE THIS
    //   return <Redirect to="/individualPlaylist" />;
    // }

    const buttonDivStyle = {
      flex: '100%'
    };
    return (
        <div style={buttonDivStyle}>
          <button onClick={this.getPlaylistTracks}>See Songs</button>
        </div>
    );
  }
}

// This function is used to convert redux global state to desired props.
function mapStateToProps(state) {
  // `state` variable contains whole redux state.
  return {
    // I assume, you have `todos` state variable.
    // Todos will be available in container component as `this.props.todos`
    playlistTracks: state.tracks
  };
  }

  // This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
  return {
    // This function will be available in component as `this.props.fetchTodos`
    fetchPlaylistTracks: function() {
      dispatch(fetchPlaylistTracks());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeeTracksButton);
