import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Modal } from 'semantic-ui-react';

import PlayerForm from './PlayerForm';
import { setPlayers } from '../store/actions/setPlayers';

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
    this.props.setPlayers(values.firstPlayer, values.secondPlayer);
    this.props.history.push('/game');
  };

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
export default connect(
  null,
  { setPlayers }
)(Home);
