import React from 'react';
import FetchTracksModal from './FetchTracksModal';


const Playlists = (props) => {
  // FIXME: Need to remove this styling.  Only for quick dev;
  const playlistDiv = {
    color: 'blue',
    minHeight: 300,
    width: '33%',
    display: 'flex',
    flex: 1,
    border: '2px solid green',
    margin: 10,
    textAlign: 'center',
  };

  const imgStyle = {
    width: 200,
    height: 200,
  };
  const playlists = props.playlists
    ? props.playlists.map(playlist => (
      <article key={playlist.id} style={playlistDiv}>
        <h4>Playlist: </h4>
        {playlist.name}
        <h4>Owner:</h4>
        {playlist.owner.display_name}
        <br />
        {playlist.images[0].url === undefined || null ? 'no image' : <img style={imgStyle} src={playlist.images[0].url} alt="PlayList Cover" /> }
        <FetchTracksModal playlistId={playlist.id} />
      </article>
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
