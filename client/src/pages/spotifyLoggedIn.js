import React, { Component } from 'react';

// FIXME: probably best to not use this library doesn't seem to be updated!

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();
class spotifyLoggedIn extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    console.log(params);
  }

//TODO: refactor & add this to utility library function on client
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

  //TODO: Add code for getUserPlaylists()...
  getUserPlaylists() {
    // Perform Get requests https://api.spotify.com/v1/me/playlists
    //fetch()
    // headers: {
    //   Authorization: `Bearer ${access_token}`,
    // },
  }

  render() {
    return (
    <React.Fragment>
      <header>
        <h2>We got your spotify</h2>
      </header>
    </React.Fragment>
    )
  }
}

export default spotifyLoggedIn;
