import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import { gameReset } from '../store/actions/game';
const winImage = require('../assets/victory-icon.svg');

class WinPopup extends Component {
  state = { modalOpen: true };


  handleGameReset = () => {
    const { gameReset } = this.props;
    gameReset();
    this.setState({ modalOpen: false });
  }

  render() {
    const { gameReset } = this.props;
    return (
      <ReactModal
        isOpen={this.state}
        onRequestClose={() => this.setState({ modalOpen: false })}
        ariaHideApp={false}
        className="Modal"
      >
        <div className="form">
          <p className="winning-text">Victory to {this.props.winner}!</p>
          <div className="winning-image">
            <img src={winImage} />
          </div>
          <div className="btn-container">
            <button className="btn" onClick={() => this.handleGameReset()}>Restart</button>
            <button className="btn">Quit</button>
          </div>
        </div>
      </ReactModal>
    );
  }
}

const mapStatetoProps = state => {
  board: state.board;
};

export default connect(
  mapStatetoProps,
  { gameReset }
)(WinPopup);
