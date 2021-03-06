import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPlayers } from '../store/actions/game';

class PlayerForm extends Component {
  state = {
    player1: null,
    player2: null
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
              value={this.state.player1}
              onChange={this.handleInputChange}
              type="text"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="secondPlayer">Player 2 </label>
            <input
              name="secondPlayer"
              value={this.state.player2}
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

export default connect(
  null,
  { setPlayers }
)(PlayerForm);
