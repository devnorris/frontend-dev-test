import * as actionTypes from '../actions/actionTypes';

const initialState = {
  player1: null,
  player2: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYERS:
      return {
        ...state,
        player1: action.player1,
        player2: action.player2
      };
    default:
      return state;
  }
};

export default reducer;
