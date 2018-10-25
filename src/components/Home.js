import React, { Component } from 'react';
import ReactModal from 'react-modal';

import PlayerForm from './PlayerForm';

import exit from '../assets/logout-icon.svg';
import logo from '../assets/logo.svg';

import '../App.css';

class Home extends Component {
  state = { showModal: false };

  creditsPage = () => {
    this.props.history.push('/credits');
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => this.setState({ showModal: true })}
          >
            New Game
          </button>
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={() => this.setState({ showModal: false })}
            ariaHideApp={false}
            className="Modal"
          >
            <PlayerForm history={this.props.history} />
          </ReactModal>
          <button
            className="btn"
            onClick={() => this.props.history.push('/credits')}
          >
            Credits
          </button>
          <button
            className="btn"
            onClick={() => this.props.history.push('/seedbox')}
          >
            Exit
            <img className="exit" src={exit} alt="exit" />
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
