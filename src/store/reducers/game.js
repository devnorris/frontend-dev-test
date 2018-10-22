import * as actionTypes from '../actions/actionTypes';

const initialState = {
  board: Array(9).fill(null),
  marker: 'X',
  winner: null
};

const reducer = (state = initialState, action) => {
  let newBoard = state.board;

  switch (action.type) {
    case actionTypes.SET_PLAYERS:
      return {
        ...state,
        player1: action.player1,
        player2: action.player2
      };

    case actionTypes.MAKE_MOVE:
      if (state.board[action.index] === null) {
        newBoard[action.index] = state.marker;
        return {
          ...state,
          board: newBoard,
          marker: state.marker === 'X' ? 'O' : 'X'
        };
      } else {
        return {...state};
      }
      break;

    case actionTypes.GET_WINNER:
      return {
        ...state,
        winner: action.winner
      };

    default:
      return state;
  }
};

export default reducer;
