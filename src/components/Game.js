import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';

const Logo = styled('div')`
  background: url('../assets/logo.png);
  height: 50vh;
  background-size: cover;
  background-position: top;
  position: relative;
`;

const Container = styled('div')`
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
  state = {
    board: Array(9).fill(null),
    player: 'X',
    winner: null
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

      if (
        this.state.board[a] &&
        this.state.board[a] === this.state.board[b] &&
        this.state.board[a] === this.state.board[c]
      ) {
        alert('YOU WON!');
        this.setState({ winner: this.state.player });
      }
    }
  }

  handleClick(index) {
    let newBoard = this.state.board;
    if (this.state.board[index] === null && !this.state.winner) {
      newBoard[index] = this.state.player;
      this.setState({
        board: newBoard,
        player: this.state.player === 'X' ? 'O' : 'X'
      });
      this.checkWinner();
    }
  }

  render() {
    const Box = this.state.board.map((box, index) => (
      <StyledBox key={index} onClick={() => this.handleClick(index)}>
        {box}
      </StyledBox>
    ));
    return (
      <React.Fragment>
        <Logo>
          <Container>
            <Board>{Box}</Board>
          </Container>
        </Logo>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    player1: state.players.firstPlayer,
    player2: state.players.secondPlayer
  };
};

export default connect(mapStateToProps)(Game);
