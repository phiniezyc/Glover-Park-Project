import React, { Component } from 'react';
class spotifyLoggedIn extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    console.log(params);
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
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
