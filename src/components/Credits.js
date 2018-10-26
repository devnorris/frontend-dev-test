import React, { Component } from 'react';
import axios from 'axios';

import logo from '../assets/logo.svg';
class Credits extends Component {
  state = {
    names: []
  };

  componentDidMount() {
    axios.get('http://api.tvmaze.com/people/1/castcredits').then(res => {
      const personsLocation = res.data.map(
        person => person._links.character.href
      );
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
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="credits">
          Credit
          <div className="credit-list">
            <ul>
              {this.state.names.map(name => (
                <p key={name}>{name}</p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;
