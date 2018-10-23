import * as actionTypes from '../actions/actionTypes';

const initialState = {
  credits: null
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.SHOW_CREDITS:
      return {
        ...state,
        credits: action.credits
      };
  }
};

export default reducer;
