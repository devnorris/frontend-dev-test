import React, { Component } from 'react';
import styled from 'react-emotion';
import ReactModal from 'react-modal';

// const Container = styled('div')`

// `

class WinPopup extends Component {
  state = { open: false };

  open = () => {
    const { winner } = this.props;
    winner !== null ? this.setState({ open: true }) : null;
  };
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    console.log(this.props);
    return <ReactModal isOpen={this.state.open}></ReactModal>;
  }
}

export default WinPopup;
