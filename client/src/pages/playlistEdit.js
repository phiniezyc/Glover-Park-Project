import React, { Fragment } from 'react';
import { connect } from 'react-redux';


const PlaylistEdit = props => (
  <Fragment>
    <header>
      <h2>Edit Tracks Here!</h2>
    </header>
    <article>
      {console.log('YOUR TRACKS', props.playlistTracks)}
    </article>
  </Fragment>
);

const mapStateToProps = state => ({ playlistTracks: state.playlistTracks });


export default connect(mapStateToProps)(PlaylistEdit);
