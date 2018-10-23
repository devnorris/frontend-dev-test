import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { showCredits } from '../store/actions/credits';
class Credits extends Component {
  state = {
    names: []
  };

  componentDidMount() {
    axios.get('http://api.tvmaze.com/people/1/castcredits').then(res => {
      const personsLocation = res.data.map(person => person._links.character.href);
      const people = personsLocation.map(location =>
        axios.get(location).then(res => res.data.name)
      );
      Promise.all(people).then(names =>
        this.setState({
          names
        })
      );
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="home-logo" />
        <div className="credits">
          Credit
          <ul>
            {this.state.names.map(name => (
              <p key={name}>{name}</p>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { showCredits }
)(Credits);
