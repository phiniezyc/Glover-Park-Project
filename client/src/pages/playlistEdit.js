import React, { Fragment } from 'react';
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

const PlaylistEdit = (props) => {
  // FIXME: need to make parameter consistent. tracks one place, songs here, etc...
  const displayTracks = props.playlistTracks.tracks.map((song, i) => (
    <Fragment key={song.track.id}>
      <article style={articleStyle}>
        <h6 style={inlineStyle}>{i + 1}</h6>
        <h4 style={inlineStyle}>Track Name: {song.track.name}</h4>
        {/* track is the spotify API property */}
        <h6 style={inlineStyle}>{IterateTrackArtists(song)}</h6>
        <h6 style={inlineStyle}>Added: {song.added_at}</h6>
        <h6 style={inlineStyle}>Album: {song.track.album.name}</h6>
        <h6 style={inlineStyle}>Popularity: {song.track.popularity}</h6>
      </article>
    </Fragment>
  ));

  return (
    <Fragment>
      <header>
        <h2>Edit Tracks Here!</h2>
      </header>
      <article>
        <h3>{displayTracks.length}</h3>
        {displayTracks}
        {console.log('YOUR TRACKS', props.playlistTracks)}
      </article>
    </Fragment>
  );
};

const mapStateToProps = state => ({ playlistTracks: state.playlistTracks });

export default connect(mapStateToProps)(PlaylistEdit);
