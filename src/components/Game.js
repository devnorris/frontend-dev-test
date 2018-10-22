import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import '../App.css';
import { makeMove, getWinner } from '../store/actions/game';

const Container = styled('div')`
  padding: 50px;
  text-align: center;
  align-content: center;
`;

const StyledBox = styled('div')`
  width: 150px;
  height: 150px;
  border: 5px solid #2d2a2a;
  display: inline-block;
  background-color: #525258;
`;

const Board = styled('div')`
  display: inline-flex;
  flex-wrap: wrap;
  width: 450px;
`;

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
      const board = this.props.board;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.props.getWinner(this.props.marker);
        alert('YOU WON!');
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
      <StyledBox key={index} onClick={() => this.handleClick(index)}>
        {box}
      </StyledBox>
    ));
  };

  render() {
    const { player1, player2 } = this.props;
    return (
      <React.Fragment>
        <p>Player 1 {player1}</p>
        <p>Player 2 {player2}</p>
        <Container>
          <Board>{this.createBoard()}</Board>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    player1: state.game.player1,
    player2: state.game.player2,
    board: state.game.board,
    marker: state.game.marker
  };
};

export default connect(
  mapStateToProps,
  { makeMove, getWinner }
)(Game);
