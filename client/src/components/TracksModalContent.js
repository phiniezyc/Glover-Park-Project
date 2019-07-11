import React, { Fragment } from 'react';

const articleStyle = {
  backgroundColor: 'blue',
  padding: '10px',
  margin: '20px',
  maxWidth: '400px',
  minWidth: '200px',
  minHeight: '200px',
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const IterateTrackArtists = (item) => { // named item because song is used in displayTracks render
  // must iterate through artists because in array in API
  const artistsArray = item.track.artists.map(artist => artist.name);
  return artistsArray.join(', ');
};

// eslint-disable-next-line arrow-parens
const TracksModalContent = props => {
  const displayTracks = props.playlistTracks.map(song => (
    <Fragment key={song.track.id}>
      <article style={articleStyle}>
        <h5>Track Name: {song.track.name}</h5> {/* track is the spotify API property */}
        {IterateTrackArtists(song)}
        <h6>Added: {song.added_at}</h6>
        <h6>Album: {song.track.album.name}</h6>
        <h6>Popularity: {song.track.popularity}</h6>
      </article>
    </Fragment>
  ));

  return (
    <Fragment>
      <h1>Number of Songs: {props.playlistTracks.length}</h1>
      {displayTracks}
    </Fragment>
  );
};

export default TracksModalContent;
