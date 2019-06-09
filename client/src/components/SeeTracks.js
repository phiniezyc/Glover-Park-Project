import React, { Component } from 'react';

class SeeTracks extends Component {
  constructor() {
    super();
  }

  getUserTracks = () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.access_token}`,
        'Content-Type': 'application/json'
      }
    };
    fetch('https://api.spotify.com/v1/me/playlists', options)
      .then(response => response.json())
      .then(spotifyPlaylists =>
        this.setState({
          spotifyPlaylists
        })
      )
      .catch(error => console.log(error.message)); // FIXME: Don't want to log this to users
  };

  componentDidMount() {
    this.getUserTracks();
  }

  render() {
    return (
      <button>See Songs</button>
      )
  }
}

export default SeeTracks;
