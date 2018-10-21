import * as actionTypes from './actionTypes';

export const setPlayers = (player1, player2) => {
  return {
    type: actionTypes.SET_PLAYERS;
    player1,
    player2
  }
}

