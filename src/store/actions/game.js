import * as actionTypes from './actionTypes';

export const setPlayers = (player1, player2) => {
  return {
    type: actionTypes.SET_PLAYERS,
    player1,
    player2
  };
};

export const makeMove = index => {
  return {
    type: actionTypes.MAKE_MOVE,
    index
  };
};

export const getWinner = winner => {
  return {
    type: actionTypes.GET_WINNER,
    winner
  };
};

export const catsGame = () => {
  return {
    type: actionTypes.CATS_GAME
  };
};

export const newGame = () => {
  return {
    type: actionTypes.NEW_GAME
  };
};

export const gameReset = () => {
  return {
    type: actionTypes.GAME_RESET
  };
};
