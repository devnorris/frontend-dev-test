import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import '../App.css';

import { makeMove, getWinner } from '../store/actions/game';
import WinPopup from './WinPopup';

const O = require('../assets/o-icon.svg');
const X = require('../assets/x-icon.svg');

class Game extends Component {
  state = {
    modalOpen: false
  };
  checkWinner() {
    let winners = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6']
    ];

    for (let index = 0; index < winners.length; index++) {
      const [a, b, c] = winners[index];
      const {
        board,
        marker,
        getWinner,
        players: { player1, player2 }
      } = this.props;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log([a, b, c]);
        const winner = player1.marker === marker ? player1 : player2;
        getWinner(winner);
        this.setState({ modalOpen: true });
      }
    }
  }

  handleClick(index) {
    const { makeMove, board } = this.props;
    makeMove(index);
    this.checkWinner();
  }

  createBoard = () => {
    const { board } = this.props;
    return board.map((box, index) => (
      <div
        className="styledBox"
        key={index}
        onClick={() => this.handleClick(index)}
      >
        {box === 'X' && <img src={X} />}
        {box === 'O' && <img src={O} />}
      </div>
    ));
  };

  render() {
    const { winner } = this.props;
    return (
      <React.Fragment>
        <p>Player 1 </p>
        <p>Player 2 </p>
        <div className="container">
          <div className="board">{this.createBoard()}</div>
        </div>
        {winner ? <WinPopup winner={winner} history={this.props.history} /> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.game.players,
    board: state.game.board,
    marker: state.game.marker,
    winner: state.game.winner
  };
};

export default connect(
  mapStateToProps,
  { makeMove, getWinner }
)(Game);
