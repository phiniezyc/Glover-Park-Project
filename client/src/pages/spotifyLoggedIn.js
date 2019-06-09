import React, { Component } from 'react';
import Playlist from '../components/Playlist.js';

//FIXME: don't need the regex in new JS
// Assuming "?post=1234&action=edit"
// var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.has('post')); // true
// console.log(urlParams.get('action')); // "edit"
// console.log(urlParams.getAll('action')); // ["edit"]
// console.log(urlParams.toString()); // "?post=1234&action=edit"
// console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"

class spotifyLoggedIn extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();

    this.state = {
      access_token: params.access_token,
      spotifyPlaylists: []
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
      ).then(sessionStorage.setItem("spotifyToken",this.state.access_token))
      .catch(error => console.log(error.message)); // FIXME: Don't want to log this to users
  };

  componentDidMount() {
    this.getUserPlaylists();
  }

  render() {
    const statePlaylists = this.state.spotifyPlaylists.items;
    return (
      <React.Fragment>
        <header>
          <h2>Here Are Your Spotify Playlists:</h2>
        </header>

        <Playlist playlists={statePlaylists} />
      </React.Fragment>
    );
  }
}

export default spotifyLoggedIn;
