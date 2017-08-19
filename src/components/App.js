import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import MovieBox from './movies/MovieBox.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieBox />
      </div>
    );
  }
}

export default App;
