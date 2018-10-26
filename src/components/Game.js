import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeMove, getWinner, catsGame } from '../store/actions/game';
import WinPopup from './WinPopup';
import O from '../assets/o-icon.svg';
import X from '../assets/x-icon.svg';
import logo from '../assets/logo.svg';

import '../App.css';
class Game extends Component {

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
        catsGame,
        players: { player1, player2 }
      } = this.props;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        const winner = player1.marker === marker ? player1 : player2;
        setTimeout(() => {
          getWinner(winner);
        }, 700);
      } else if (!board.includes(null)) {
        setTimeout(() => {
          catsGame()
        }, 700);
      }
    }
  }

  handleClick(index) {
    const { makeMove } = this.props;
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
        {box === 'X' && <img src={X} alt="X-marker" />}
        {box === 'O' && <img src={O} alt="O-marker" />}
      </div>
    ));
  };

  render() {
    const {
      winner,
      draw,
      players: { player1, player2 }
    } = this.props;
    return (
      <React.Fragment>
        <div className="header">
          <div className="image">
            <img src={logo} alt="logo" width="50%" />
          </div>
          <div className="players">
            <p>Player 1 {player1.name}</p>
            <p>Player 2 {player2.name}</p>
          </div>
        </div>
        <div className="container">
          <div className="board">{this.createBoard()}</div>
        </div>
        {winner || draw ? (
          <WinPopup
            winner={winner}
            draw={draw}
            history={this.props.history}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.game.players,
    board: state.game.board,
    marker: state.game.marker,
    winner: state.game.winner,
    draw: state.game.draw
  };
};

export default connect(
  mapStateToProps,
  { makeMove, getWinner, catsGame }
)(Game);
