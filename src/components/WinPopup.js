import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import { newGame, gameReset } from '../store/actions/game';
const winImage = require('../assets/victory-icon.svg');

class WinPopup extends Component {
  state = { modalOpen: true };

  handleNewGame = () => {
    const { newGame } = this.props;
    newGame();
    this.setState({ modalOpen: false });
  };

  handleGameRest = () => {
    const { gameReset, history } = this.props;
    gameReset();
    history.push('/');
  };

  render() {
    return (
      <ReactModal
        isOpen={this.state.modalOpen}
        ariaHideApp={false}
        className="Modal"
      >
        <div className="form">
          <p className="winning-text">Victory to {this.props.winner}!</p>
          <div className="winning-image">
            <img src={winImage} autoFocus />
          </div>
          <div className="btn-container">
            <button className="btn" onClick={this.handleNewGame}>
              Restart
            </button>
            <button className="btn" onClick={this.handleGameRest}>
              Quit
            </button>
          </div>
        </div>
      </ReactModal>
    );
  }
}

const mapStatetoProps = state => {
  board: state.board;
};

export default connect(
  mapStatetoProps,
  { newGame, gameReset }
)(WinPopup);
