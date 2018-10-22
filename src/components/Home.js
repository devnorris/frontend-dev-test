import React, { Component } from 'react';
import styled from 'react-emotion';
import { Modal } from 'semantic-ui-react';

import PlayerForm from './PlayerForm';

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
  handleSubmit = values => {
    console.log('Values', values);
  };

  // updateInputeValue = e => {
  //   console.log(e.target);
  //   if (e.target.name === 'player1') {
  //     this.setState({ player1: e.target.value });
  //   } else if (e.target.name === 'player2') {
  //     this.setState({ player2: e.tartget.value });
  //   }
  // };
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
          <PlayerForm onSubmit={this.handleSubmit} />
        </Modal>
        <Button>Credits</Button>
        <Button>Exit</Button>
      </div>
    );
  }
}
export default Home;

//
//   <Form onSubmit={this.handleSubmit}>
//     <Form.Field>
//       <label>Player 1</label>
//       <input
//         type="text"
//         name="player1"
//         onChange={e => this.updateInputeValue(e)}
//         placeholder="Player 1 Name"
//       />
//     </Form.Field>
//     <Form.Field>
//       <label>Player 2</label>
//       <input
//         type="text"
//         name="player2"
//         onChange={e => this.updateInputeValue(e)}
//         placeholder="Player 2 Name"
//       />
//     </Form.Field>
//     <Modal.Actions>
//       <Button type="submit">Start a New Game</Button>
//     </Modal.Actions>
//   </Form>
// </Modal>
//
