import React, { Fragment, Component } from 'react';

import { connect } from 'react-redux';


class PlaylistEdit extends Component {

  render() {
    return (
      <Fragment>
        <header>
          <h2>Edit Tracks Here!</h2>
          {console.log('YOUR TRACKS', this.props.playlistTracks)}
        </header>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ playlistTracks: state.playlistTracks });


export default connect(mapStateToProps)(PlaylistEdit);
