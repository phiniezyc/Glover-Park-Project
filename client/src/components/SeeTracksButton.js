import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import PlaylistTracksDisplay from './PlaylistTracksDisplay';

class SeeTracksButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlaylistId: props.playlistId,
      playlistTracks: []
    };
  }

  getPlaylistTracks = props => {
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
      <React.Fragment>
        <PlaylistTracksDisplay />

        <div style={buttonDivStyle}>
          <button onClick={this.getPlaylistTracks}>See Songs</button>
        </div>
      </React.Fragment>
    );
  }
}

export default SeeTracksButton;
