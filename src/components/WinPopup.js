import React, { Component } from 'react';
import styled from 'react-emotion';
import { Button, Icon, Modal } from 'semantic-ui-react';

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
    return (
      <Modal open={open} onOpen={this.open} onClose={this.close} size="small">
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" content="All Done" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default WinPopup;
