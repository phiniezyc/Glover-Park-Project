import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class SeeTracksButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlaylistId: props.playlistId,
      playlistTracks: [],
      toIndividualPlaylistView: false,
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
        })).then(this.setState({
          toIndividualPlaylistView: true
        }))
      .catch(error => console.log(error.message));
  };

  goToIndividualPlaylistView = () => {
    this.props.history.push('/individualPlaylist');
}

  render() {
    // V4 of React-Router Redirect component instead of directly interacting w/ this.props.history
    if (this.state.toIndividualPlaylistView === true) {
       return <Redirect to='/individualPlaylist' />
    }

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