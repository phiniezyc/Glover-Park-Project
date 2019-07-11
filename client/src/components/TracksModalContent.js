import React, { Fragment } from 'react';

const articleStyle = {
  backgroundColor: 'blue',
  padding: '10px',
  margin: '20px',
};

const IterateTrackArtists = (item) => { // named item because song is used in displayTracks render
  const artistsArray = item.track.artists;
  return artistsArray.map(artist => <h6>{artist.name}</h6>);
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
