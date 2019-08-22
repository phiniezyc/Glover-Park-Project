import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

/* withRouter connects component to router/give access to history
for navigation functional component not directly rendered by router.
See more info:
https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom

https://reacttraining.com/react-router/web/api/withRouter
*/

const tableRowStyle = {
  backgroundColor: 'grey',
};


const IterateTrackArtists = (item) => {
  // named item because song is used in displayTracks render
  // must iterate through artists because in array in spotify API
  const artistsArray = item.track.artists.map(artist => artist.name);
  return artistsArray.join(', ');
};

// eslint-disable-next-line arrow-parens
const TracksModalContent = props => {
  const displayTracks = props.playlistTracks.map((song, i) => (
    <Fragment key={song.track.id}>
      <tr style={tableRowStyle}>
        <td>{i + 1}</td>
        <td>Track Name: {song.track.name}</td>
        {/* track is the spotify API property */}
        <td>{IterateTrackArtists(song)}</td>
        <td>Album: {song.track.album.name}</td>
      </tr>
    </Fragment>
  ));

  return (
    <main>
      <h1>Total Songs: {props.playlistTracks.length}</h1>
      <button onClick={() => { props.history.push(`/playlist/edit/${props.playlistId}`); }}>See Details</button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Artists</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {displayTracks}
        </tbody>
      </table>
    </main>
  );
};

export default withRouter(TracksModalContent);
