import React, { Component } from 'react';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Home from './Home';
import Game from './Game';
import Credits from './Credits';

const mapStateToProps = function(state, props) {
  return {};
};

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/game" component={Game} />
              <Route path="/credits" component={Credits} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
