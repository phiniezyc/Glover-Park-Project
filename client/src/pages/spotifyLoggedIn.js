import React, { Component } from 'react';
import Playlist from '../components/Playlist.js'

class spotifyLoggedIn extends Component {
  constructor() {
    super();
    const params = this.getHashParams();

    this.state = {
      access_token: params.access_token,
      spotifyPlaylists: []
    }
  }

  // Grabs parameters from url and returns object with access/refresh tokens
  getHashParams() {
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  //TODO: REFACTOR (PERHAPS UTILITY FUNCTION)
  getUserPlaylists = () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.access_token}`,
        "Content-Type": "application/json"
      },
    }
    fetch('https://api.spotify.com/v1/me/playlists',options)
    .then(response=>response.json())
    .then((spotifyPlaylists) => this.setState({
      spotifyPlaylists,
    }))
    .catch(error => console.log(error)); // FIXME: Don't want to log this to users
  }

  componentDidMount() {
    this.getUserPlaylists();
  }

  render() {
    return (
    <React.Fragment>
      <header>
        <h2>We got your spotify</h2>
        { (this.state.spotifyPlaylists.items) ? <h2>{this.state.spotifyPlaylists.items.length}</h2>
        : 0
        }
        <Playlist />

      </header>
    </React.Fragment>
    )
  }
}

export default spotifyLoggedIn;
