import React, { Component } from 'react';

class SeeTracks extends Component {
  constructor() {
    super();
  }

  getUserTracks = () => {
    const options = {
      method: 'GET',
      headers: {
        // FIXME: Need to get Bearer token here...perhaps as a prop? Probably a good use of redux
        Authorization: `Bearer ${this.state.access_token}`,
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

  componentDidMount() {
    //this.getUserTracks();
  }

  render() {
    const buttonDivStyle = {
      flex: '100%',

    };

    return (
      <div style={buttonDivStyle}>
      <button >See Songs</button>
      </div>
      )
  }
}

export default SeeTracks;
