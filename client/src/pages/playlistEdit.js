import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

const articleStyle = {
  backgroundColor: 'blue',
  padding: '10px',
  marginTop: '20px',
  marginLeft: '15px',
  // width: '400px',
  // height: '400px',
  display: 'flex', // FIXME: ? changes this display
  flexDirection: 'row',
  // justifyContent: 'space-between',
  // display: 'flex', this centers content in the article
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
};

// TODO: MAKE THESE ALL A CLASS ONCE PUT IN STYLE SHEET
const inlineStyle = {
  display: 'inline',
  marginTop: '0px',
  marginLeft: '10px',
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
  spotifyDeleteReq =() => {
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
    this.setState({ tracksToDelete: [...this.state.tracksToDelete, { uri: `spotify:track:${track}`}]})
  }

  // FIXME: need to make parameter consistent. tracks one place, songs here, etc...
  displayTracks = this.props.playlistTracks.tracks.map((song, i) => (
    <Fragment key={song.track.id}>
      <article style={articleStyle}>
        <button onClick={() => this.passTrackIdToDelete(song.track.id)}>Select</button>
        <h6 style={inlineStyle}>{i+1}</h6> {/* USE '#' for track column heading https://stackoverflow.com/questions/24840074/how-to-stick-table-headerthead-on-top-while-scrolling-down-the-table-rows-with */}
        <h4 style={inlineStyle}>Track Name: {song.track.name}</h4>
        {/* track is the spotify API property */}
        <h6 style={inlineStyle}>{IterateTrackArtists(song)}</h6>
        <h6 style={inlineStyle}>Added: {song.added_at}</h6>
        <h6 style={inlineStyle}>Album: {song.track.album.name}</h6>
        <h6 style={inlineStyle}>Popularity: {song.track.popularity}</h6>
      </article>
    </Fragment>
  ));

  render() {
    return (
      <Fragment>
        <header>
          <h2>Edit Tracks Here!</h2>
          {this.showConfirmDeleteButton(this.state.tracksToDelete.length)}
        </header>
        <article>
          <h3>{this.displayTracks.length}</h3>
          {this.displayTracks}
        </article>
      </Fragment>
      );
}
};

const mapStateToProps = state => ({ playlistTracks: state.playlistTracks });

export default connect(mapStateToProps)(PlaylistEdit);