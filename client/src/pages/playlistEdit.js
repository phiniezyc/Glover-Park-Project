import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';


const tableRowStyle = {
  backgroundColor: 'grey',
};

const IterateTrackArtists = (item) => {
  // named item because song is used in displayTracks render
  // must iterate through artists because in array in API
  const artistsArray = item.track.artists.map(artist => artist.name);
  return artistsArray.join(', ');
};

class PlaylistEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracksToDelete: [],
    }
  }

  showConfirmDeleteButton = (trackNumber) => { // TODO: modularize this to handle the other cases
    if (this.state.tracksToDelete.length >=1) {
      return <button onClick={()=>this.spotifyDeleteReq()}>Confirm Delete {trackNumber}</button>
    }
  }
  spotifyDeleteReq =() => { // TODO: MAKE REDUX ACTION
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('spotifyToken')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tracks: this.state.tracksToDelete
      })
    }
    return fetch(`https://api.spotify.com/v1/playlists/${this.props.match.params.id}/tracks`, options)
      .then(response => console.log(response.json()))
      .then(this.setState({tracksToDelete: []}))
      .catch(err => console.log(err))
  }

  passTrackIdToDelete = (track) => {
    this.setState({
      tracksToDelete: [...this.state.tracksToDelete, { uri: `spotify:track:${track}`}]})
  }
/*<button onClick={() => this.passTrackIdToDelete(song.track.id)}>Delete</button>*/

  // FIXME: need to make parameter consistent. tracks one place, songs here, etc...
  displayTracks = this.props.playlistTracks.tracks.map((song, i) => (
    <Fragment key={song.track.id}>
        <tr style={tableRowStyle}>
          <td > <input type="button" value="Select"  onClick={() => this.passTrackIdToDelete(song.track.id)}/> </td>
          <td>{i+1}</td>
          <td>{song.track.name}</td>
          <td>{IterateTrackArtists(song)}</td>
          <td>{dayjs(song.added_at).format('MMM DD YYYY')}</td>
          <td>{song.track.album.name}</td>
          <td>{song.track.popularity}</td>
        </tr>
    </Fragment>
  ));

  render() {
    return (
      <Fragment>
        <header>
          <h2>Edit Tracks Here!</h2>
          <article>
          <h3>{this.displayTracks.length}</h3>
          </article>
          {this.showConfirmDeleteButton(this.state.tracksToDelete.length)}
        </header>
        <table>
          <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Name</th>
            <th>Artists</th>
            <th>Added</th>
            <th>Album</th>
            <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
            {this.displayTracks}
          </tbody>
        </table>
      </Fragment>
      );
}
};

const mapStateToProps = state => ({ playlistTracks: state.playlistTracks });

export default connect(mapStateToProps)(PlaylistEdit);
