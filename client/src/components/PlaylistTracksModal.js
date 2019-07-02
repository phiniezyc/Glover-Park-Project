import React, { Component, Fragment } from 'react';

import ReactModal from 'react-modal';

class PlaylistTracksModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  componentDidMount() {
     //this.handleOpenModal();
  }
  render() {
  return (
    <Fragment>
      <button onClick={this.handleOpenModal}>Trigger Modal</button>
      <ReactModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}  shouldCloseOnOverlayClick={true} >
      <div>{this.props.trackLength}</div>
      </ReactModal>


    </Fragment>
  )
  }
}

export default PlaylistTracksModal;
