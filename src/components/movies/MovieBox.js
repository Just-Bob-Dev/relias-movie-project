import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import MovieForm from './MovieForm.js';
import PersonCard from './personCards.js';

//https://api.themoviedb.org/3/movie/550?api_key=a6d6e1a1d196277d3a36371310c4ff91
//apiKey: "a6d6e1a1d196277d3a36371310c4ff91"
export default class MovieBox extends Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   this.handleApiFetch(this.state.searchVal);
  // }


  render() {
    return(
      <div className="movieBox container">
        <MovieForm handleApiFetch={this.props.handleApiFetch} theFetch={this.props.theFetch}/>
        <div>
          {this.props.theFetch != "person" ? (
            <div>
              <MovieCard results={this.props.searchResults} searchVal={this.props.searchVal} theFetch={this.props.theFetch}/>
            </div>
          ) : (
            <div>
              <PersonCard results={this.props.searchResults} searchVal={this.props.searchVal} theFetch={this.props.theFetch}/>
            </div>
          )}
        </div>
      </div>
    )
  }

}
