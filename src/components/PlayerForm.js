import React from 'react';
import { Field, reduxForm } from 'redux-form';

let PlayerForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="winning-text">Start a New Game</label>
      <div className="players">
        <div>
          <label htmlFor="firstPlayer">Player 1 </label>
          <Field name="firstPlayer" component="input" type="text" autoFocus />
        </div>
        <div>
          <label htmlFor="secondPlayer">Player 2 </label>
          <Field name="secondPlayer" component="input" type="text" />
        </div>
      </div>
      <button className="btn" type="submit">
        Start
      </button>
    </form>
  );
};

PlayerForm = reduxForm({
  form: 'player'
})(PlayerForm);

export default PlayerForm;
