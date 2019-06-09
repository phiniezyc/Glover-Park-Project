import React, { Component } from 'react';

class SeeTracksButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlaylistId: props.playlistId
    }
  }

  getUserTracks = (props) => {
    const access_token = sessionStorage.spotifyToken;
    // FIXME: Calls too soon, prop is not in before call (I think) ?
    const playlist_id = props.playlistId;

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    };

    fetch('https://api.spotify.com/v1/playlists/{playlist_id}/tracks', options)
      .then(response => response.json())
      .then(spotifyPlaylists =>
        this.setState({
          spotifyPlaylists
        })
      )
      .catch(error => console.log(error.message)); // FIXME: Don't want to log this to users
  };

  render() {
    const buttonDivStyle = {
      flex: '100%',
    };

    return (
      <div style={buttonDivStyle}>
      <button onClick={this.getUserTracks}>See Songs</button>
      </div>
      )
  }
}

export default SeeTracksButton;
