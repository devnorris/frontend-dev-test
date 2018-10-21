import React, { Component } from 'react';
import styled from 'react-emotion';
import { Modal, Form } from 'semantic-ui-react';

import '../App.css';

const Button = styled('button')`
  width: 7rem;
  background: #7ed0b5;
  color: black;
  border: 1px solid currentColor;
  border-radius: 100px;
  padding: 12px 6px;
  outline: none;
  cursor: pointer;
  font-size: 1rem;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(199, 199, 199, 0.2);
  }
`;

class Home extends Component {
  state = {
    showModal: false
  };

  handleSubmit = () => {
    console.log(this.state.player1)
  }

  updateInputeValue = evt => {
    this.setState({ player1: evt.target.value })
  }
  render() {
    return (
      <div>
        <div className="home-logo" />
        <Modal
          trigger={
            <Button onClick={() => this.setState({ showModal: true })}>
              New Game
            </Button>
          }
        >
          <Form>
            <Form.Field>
              <label>Player 1</label>
              <input type="text" onChange={evt => this.updateInputeValue(evt)} placeholder="Players Name" />
            </Form.Field>
            <Form.Field>
              <label>Player 2</label>
              <input placeholder="Players Name" />
            </Form.Field>
            <Modal.Actions>
              <Button type="submit">Start a New Game</Button>
            </Modal.Actions>
          </Form>
        </Modal>
        <Button>Credits</Button>
        <Button>Exit</Button>
      </div>
    );
  }
}
export default Home;
