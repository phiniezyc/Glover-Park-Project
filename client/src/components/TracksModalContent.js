import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

/* withRouter connects component to router/give access to history
for navigation functional component not directly rendered by router.
See more info:
https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom

https://reacttraining.com/react-router/web/api/withRouter
*/

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
  // must iterate through artists because in array in spotify API
  const artistsArray = item.track.artists.map(artist => artist.name);
  return artistsArray.join(', ');
};
// eslint-disable-next-line arrow-parens
const TracksModalContent = props => {
  const displayTracks = props.playlistTracks.map((song, i) => (
    <Fragment key={song.track.id}>
      <article style={articleStyle}>
        <h6 style={inlineStyle}>{i + 1}</h6>
        <h4 style={inlineStyle}>Track Name: {song.track.name}</h4> {/* track is the spotify API property */}
        <h6 style={inlineStyle}>{IterateTrackArtists(song)}</h6>
        <h6 style={inlineStyle}>Added: {song.added_at}</h6>
        <h6 style={inlineStyle}>Album: {song.track.album.name}</h6>
        <h6 style={inlineStyle}>Popularity: {song.track.popularity}</h6>
      </article>
    </Fragment>
  ));


  return (
    <main>
      <h1 style={inlineStyle}>Total Songs: {props.playlistTracks.length}</h1>
      <button style={inlineStyle} onClick={() => { props.history.push(`/playlist/edit/${props.playlistId}`); }}>Edit Playlist</button>
      {displayTracks}
    </main>
  );
};

export default withRouter(TracksModalContent);
