import * as actionTypes from './actionTypes';
import axios from 'axios';

export const showCredits = credits => {
  return {
    type: actionTypes.SHOW_CREDITS,
    credits
  }
}

export const getCredits = () => {
  return dispatch => {
    axios
      .get('http://api.tvmaze.com/people/1/castcredits')
      .then(response => {
        console.log(response.data);
        dispatch(showCredits(response.data))
      })
      .catch(error => {});
  };
};
