import React, { Component } from "react";
import Modal from "react-modal";

class Box extends Component {
  constructor() {
    super();

    this.state({
      modelIsOpen: false
    });

    this.isOpen = this.isOpen.bind(this);
    this.onAfterOpen = this.onAfterOpen.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
  }

  modalIsOpen() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    console.log(this);
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
        <button onClick={this.closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    );
  }
}

export default Box;
