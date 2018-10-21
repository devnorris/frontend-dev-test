import React, { Component } from 'react';
import styled from 'react-emotion';

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
    board: Array(9).fill(null)
  };

  handleClick(index) {
    console.log(index);
  }

  render() {
    const Box = this.state.board.map((box, index) => (
      <StyledBox key={index} onClick={() => this.handleClick(index)}>
        {box}
      </StyledBox>
    ));
    return (
      <Container>
        <Board>{Box}</Board>
      </Container>
    );
  }
}

export default Game;
