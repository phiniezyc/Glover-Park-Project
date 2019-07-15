import React, { Fragment } from 'react';

const articleStyle = {
  backgroundColor: 'blue',
  padding: '10px',
  marginTop: '20px',
  marginLeft: '15px',
  width: '400px',
  height: '400px',
  display: 'inline-flex',
  flexDirection: 'column',
  // justifyContent: 'space-between',
};

const IterateTrackArtists = (item) => {
  // named item because song is used in displayTracks render
  // must iterate through artists because in array in API
  const artistsArray = item.track.artists.map(artist => artist.name);
  return artistsArray.join(', ');
};

// eslint-disable-next-line arrow-parens
const TracksModalContent = props => {
  const displayTracks = props.playlistTracks.map((song, i) => (
    <Fragment key={song.track.id}>
      <article style={articleStyle}>
        <h2>Song: {i + 1}</h2>
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
