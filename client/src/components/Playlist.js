import React from 'react';

import SeeTracksButton from './SeeTracksButton';

const Playlists = (props) => {
  // FIXME: Need to remove this styling.  Only for quick dev;
  const playlistDiv = {
    color: 'blue',
    minHeight: 300,
    width: '33%',
    display: 'flex',
    border: '2px solid green',
    margin: 10,
    flex: 1,
    textAlign: 'center',
  };

  const imgStyle = {
    width: 200,
    height: 200,
    // display: 'block'
  };
  const playlists = props.playlists
    ? props.playlists.map(playlist => (
      <div style={playlistDiv}>
        <h4 key={playlist.id}>Playlist: </h4>
        {playlist.name}
        <h4>Owner:</h4>
        {playlist.owner.display_name}
        <br />
        <img style={imgStyle} src={playlist.images[0].url} alt="PlayList Cover" />
        <SeeTracksButton playlistId={playlist.id} />
      </div>
    ))
    : 'Loading...';

  const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    // FIXME: CHANGE TO SEMANTIC HTML 5
    <div style={divStyle}>{playlists}</div>
  );
};

export default Playlists;
