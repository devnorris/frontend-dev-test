import React from 'react';
import styled from 'react-emotion';
import { Field, reduxForm } from 'redux-form';


const Button = styled('button')`
  width: 7rem;
  background: #7ed0b5;
  color: black;
  border: 1px solid currentColor;
  border-radius: 100px;
  padding: 12px 6px;
  outline: none;
  cursor: pointer;
  font-size: 1rem;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(199, 199, 199, 0.2);
  }
`;

let PlayerForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Start a New Game</label>
      <div>
        <label htmlFor="firstPlayer">Player 1 </label>
        <Field name="firstPlayer" component="input" type="text" autoFocus />
      </div>
      <div>
        <label htmlFor="secondPlayer">Player 2 </label>
        <Field name="secondPlayer" component="input" type="text" />
      </div>
      <button className="btn" type="submit">Start</button>
    </form>
  );
};

PlayerForm = reduxForm({
  form: 'player'
})(PlayerForm);

export default PlayerForm;
