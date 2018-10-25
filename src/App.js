import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import Home from './components/Home';
import Game from './components/Game';
import Credits from './components/Credits';

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
              <Route
                path="/seedbox"
                component={() =>
                  (window.location =
                    'https://www.seedbox.com/en/')
                }
              />
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
