import React, { Component, Fragment } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { fetchPlaylistTracks } from '../actions/index';

const buttonDivStyle = {
  flex: '100%'
};

class FetchTracksModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleOpenModal = () => {
    this.setState({ showModal: true });
    this.props.fetchPlaylistTracks(this.props.playlistId)
  };

  render() {
    return (
      <Fragment>
        <div style={buttonDivStyle}>
          <button
            onClick={() =>
              this.props.fetchPlaylistTracks(this.props.playlistId)}>Redux Tracks
              </button>
        </div>

        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}>
          <div>{this.props.playlistTracks.length}</div>
        </ReactModal>
      </Fragment>
    );
  }
}

// This function is used to convert redux global state to desired props.
function mapStateToProps(state) {
  // `state` variable contains whole redux state.
  return {
    playlistTracks: state.playlistTracks.tracks
  };
}
// This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
  return {
    // This function will be available in component as `this.props.fetchPlaylistTracks`
    fetchPlaylistTracks: playlistId => {
      dispatch(fetchPlaylistTracks(playlistId));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchTracksModal);
