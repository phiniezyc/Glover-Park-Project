import React, { Component } from 'react';

class SeeTracksButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlaylistId: props.playlistId,
      playlistTracks: [],
    }
  }

  getPlaylistTracks = (props) => {
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
        }))
      .catch(error => console.log(error.message)); 
  };

  render() {
    const buttonDivStyle = {
      flex: '100%',
    };

    return (
      <div style={buttonDivStyle}>
      <button onClick={this.getPlaylistTracks}>See Songs</button>
      </div>
      )
  }
}

export default SeeTracksButton;
