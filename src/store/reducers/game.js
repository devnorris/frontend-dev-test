import * as actionTypes from '../actions/actionTypes';

const initialState = {
  board: Array(9).fill(null),
  marker: 'X',
  winner: null,
  draw: false
};

const reducer = (state = initialState, action) => {
  // FIXME: mutating state at board, need to figure out how to map through and create new array
  let newBoard = state.board;

  switch (action.type) {
    case actionTypes.SET_PLAYERS:
      return {
        ...state,
        players: {
          player1: { name: action.player1, marker: 'X' },
          player2: { name: action.player2, marker: 'O' }
        }
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
        return { ...state };
      }

    case actionTypes.GET_WINNER:
      return {
        ...state,
        winner: action.winner.name
      };

    case actionTypes.CATS_GAME:
      return {
        ...state,
        board: Array(9).fill(null),
        marker: 'X',
        draw: true
      };

    case actionTypes.NEW_GAME:
      return {
        ...state,
        board: Array(9).fill(null),
        marker: 'X',
        winner: null,
        draw: false
      };

    case actionTypes.GAME_RESET:
      return {
        ...state,
        board: Array(9).fill(null),
        marker: 'X',
        winner: null,
        draw: false
      };

    default:
      return state;
  }
};

export default reducer;
