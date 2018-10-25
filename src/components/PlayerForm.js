import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';

import { setPlayers } from '../store/actions/game';

class playerForm extends Component {
  state = {
    player1: '',
    player2: ''
  };

  handleInputChange = event => {
    event.target.name === 'firstPlayer'
      ? this.setState({ player1: event.target.value })
      : this.setState({ player2: event.target.value });
  };

  handleSubmit = () => {
    const { setPlayers, history } = this.props;
    setPlayers(this.state.player1, this.state.player2);
    history.push('/game');
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="winning-text">Start a New Game</label>
        <div className="players">
          <div>
            <label htmlFor="firstPlayer">Player 1 </label>
            <input
              name="firstPlayer"
              onChange={this.handleInputChange}
              type="text"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="secondPlayer">Player 2 </label>
            <input
              name="secondPlayer"
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
        </div>
        <button
          className="btn"
          type="submit"
          disabled={!this.state.player1 || !this.state.player2}
        >
          Start
        </button>
      </form>
    );
  }
}

// PlayerForm = reduxForm({
//   form: 'player'
// })(PlayerForm);

export default connect(
  null,
  { setPlayers }
)(playerForm);
