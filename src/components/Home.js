import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import PlayerForm from './PlayerForm';
import { setPlayers } from '../store/actions/game';

import '../App.css';

class Home extends Component {
  state = { showModal: false };
  handleSubmit = values => {
    const { setPlayers, history } = this.props;
    setPlayers(values.firstPlayer, values.secondPlayer);
    history.push('/game');
  };

  creditsPage = () => {
    this.props.history.push('/credits')
  }

  render() {
    return (
      <div>
        <div className="home-logo" />
        <div className="btn-container">
          <button className="btn" onClick={() => this.setState({ showModal: true })}>
            New Game
          </button>
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={() => this.setState({ showModal: false })}
            ariaHideApp={false}
            className="Modal"
          >
            <PlayerForm onSubmit={this.handleSubmit} />
          </ReactModal>
          <button className="btn" onClick={() => this.props.history.push('/credits')}>Credits</button>
          <button className="btn">Exit</button>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { setPlayers }
)(Home);
