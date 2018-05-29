import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actionCreators from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Your message : {this.props.msg}
        </p>
      </div>
    );
  }

  componentDidMount () {
    this.props.fetchMsg();
  }
}

export default connect(
  state => ({ msg: state.messages.message }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App);
