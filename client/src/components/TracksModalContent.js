import React, { Fragment } from 'react';

const TracksModalContent = (props) => {
  const displayTracks = props.playlistTracks ?
  // eslint-disable-next-line arrow-parens
props.playlistTracks.map(song => (
  <Fragment key={song.track.id}>
    <h5 >{song.track.name}</h5> {/* track is the spotify API property */}
      </Fragment>
    ))
    : 'loading';

  return (
    <Fragment>
      <h1>Number of Songs: {props.playlistTracks.length}</h1>
      {displayTracks}
    </Fragment>
  );
};

export default TracksModalContent;
