import React, { Component } from 'react';
import Playlist from '../components/Playlist';

import PlaylistTracksDisplay from '../components/PlaylistTracksDisplay';

class spotifyLoggedIn extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();

    this.state = {
      access_token: params.access_token,
      spotifyPlaylists: [],
      errorMessage: '',
    };
  }
  // FIXME: USE REACT URL PARAMS INSTEAD OF GETHASH
  // Grabs parameters from url and returns object with access/refresh tokens
  // TODO: npm module querystring to get params
  getHashParams() {
    const hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  //TODO: REFACTOR (PERHAPS UTILITY FUNCTION)
  getUserPlaylists = () => {
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
      .then(sessionStorage.setItem('spotifyToken', this.state.access_token))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  componentDidMount() {
    this.getUserPlaylists();
  }

  render() {
    const statePlaylists = this.state.spotifyPlaylists.items;
    if (this.state.errorMessage) {
      // FIXME: Remove this logic from render and make a function that returns based on conditional logic to clean up
      return <h3> Error: {this.state.errorMessage} </h3>;
    }
    return (
      <React.Fragment>
        <header>
          <h2>Here Are Your Spotify Playlists:</h2>
        </header>
        <PlaylistTracksDisplay>
          <Playlist playlists={statePlaylists} />
        </PlaylistTracksDisplay>
      </React.Fragment>
    );
  }
}

export default spotifyLoggedIn;
