import React, { Fragment } from 'react';

// eslint-disable-next-line arrow-parens
const TracksModalContent = props => {
  const displayTracks = props.playlistTracks.map((song, i) => (
    <Fragment key={song.track.id}>
      <h5>{song.track.name}</h5> {/* track is the spotify API property */}
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
