import React, { Component } from 'react';
import MovieCard from './movie-card.js';
import MovieForm from './movie-form.js';

export default class MovieBox extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    }
  }

  render() {
    return(
      <div className="movieBox container">
        
      </div>
    )
  }

}
