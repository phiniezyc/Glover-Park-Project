import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { deletePlaylistTracks }  from '../actions';

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
      tracksToDeleteIDs: []
    }
  }

  spotifyDeleteReq = () => {
    this.props.deletePlaylistTracks(this.props.match.params.id,{
      tracksToDelete: [...this.state.tracksToDelete],
      tracksToDeleteIDs: [...this.state.tracksToDeleteIDs] });
  }

  passTrackIdToDelete = (track) => {
    this.setState({
      tracksToDelete: [...this.state.tracksToDelete, { uri: `spotify:track:${track}`}],
      tracksToDeleteIDs: [...this.state.tracksToDeleteIDs, track]
    })
  }

  showConfirmDeleteButton = (trackNumber) => { // TODO: modularize this to handle the other cases
    if (this.state.tracksToDelete.length >=1) {
      return <button onClick={()=>this.spotifyDeleteReq()}>Confirm Delete {trackNumber}</button>
    }
  }



  render() {

     // FIXME: need to make parameter consistent. tracks one place, songs here, etc...
  const displayTracks = [...this.props.playlistTracks.tracks].map((song, i) => (
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

    return (
      <Fragment>
        <header>
          <h2>Edit Tracks Here!</h2>
          <article>
          <h3>{displayTracks.length}</h3>
          </article>
          {this.showConfirmDeleteButton(this.state.tracksToDelete.length)}
        </header>
        <table>
          <thead>
          <tr>
            <th />
            <th />
            <th>Track Name</th>
            <th>Artists</th>
            <th>Added</th>
            <th>Album</th>
            <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
            {displayTracks}
          </tbody>
        </table>
      </Fragment>
      );
}
};

const mapStateToProps = state => ({
  playlistTracks: state.playlistTracks  // connects redux store to component

});

function mapDispatchToProps(dispatch) {
  return {
    // available in component as `this.props.deletePlaylistTracks`
    deletePlaylistTracks: (playlistsId, tracksToDelete) => {
      dispatch(deletePlaylistTracks(playlistsId, tracksToDelete));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PlaylistEdit);
