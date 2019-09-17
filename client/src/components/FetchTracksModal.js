import React, { Component, Fragment } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { fetchPlaylistTracks }  from '../actions';
import TracksModalContent from './TracksModalContent';

const buttonDivStyle = {

  flex: '100%'
};
class FetchTracksModal extends Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    ReactModal.setAppElement('#root'); // Must be in lifecycle method because ReactModal package will seek to attack to an dom node before component has mounted.  Does not error app, but jest tests will fail otherwise.
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleOpenModal = () => {
    this.setState({ showModal: true });
    this.props.fetchPlaylistTracks(this.props.playlistId);
  };

  render() {
    return (
      <Fragment>
        <div style={buttonDivStyle}>
          <button onClick={this.handleOpenModal}>Preview Tracks</button>
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            portalClassName="ReactModalPortal"
          >
            <TracksModalContent playlistId={this.props.playlistId} playlistTracks={this.props.playlistTracks} />
          </ReactModal>
        </div>
      </Fragment>
    );
  }
}

// convert redux global state to desired props.
function mapStateToProps(state) {// `state` = whole redux state.
  return {
    playlistTracks: state.playlistTracks.tracks
  };
}
// provide callbacks to container component.
function mapDispatchToProps(dispatch) {
  return {
    // available in component as `this.props.fetchPlaylistTracks`
    fetchPlaylistTracks: playlistId => {
      dispatch(fetchPlaylistTracks(playlistId));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchTracksModal);
