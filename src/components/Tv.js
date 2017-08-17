import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import tvBox from './tv/tvBox.js';

class Tv extends Component {
  render() {
    return (
      <div className="App">
        <tvBox />
      </div>
    );
  }
}

export default Tv;
