import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import MovieForm from './MovieForm.js';
import PersonCard from './personCards.js';

//https://api.themoviedb.org/3/movie/550?api_key=a6d6e1a1d196277d3a36371310c4ff91
//apiKey: "a6d6e1a1d196277d3a36371310c4ff91"
export default class MovieBox extends Component {
  constructor(props) {
    super(props);

    this.handleApiFetch = this.handleApiFetch.bind(this);

    this.state = {
      searchResults: [],
      searchVal: null
    }
  }

  handleApiFetch(searchValue, searchType) {
    console.log(searchValue);
    if(searchValue === null){
        this.setState({searchResults: null});
        console.log(this.state.searchResults);
    }
    else
    {
      fetch('https://api.themoviedb.org/3/search/'+ searchType +'?api_key=a6d6e1a1d196277d3a36371310c4ff91&language=en-US&query=' + searchValue + '&page=1&include_adult=false')
      .then(resp => resp.json())
      .then(resp => {
        this.setState({searchResults: resp.results});
        console.log(this.state.searchResults)
      })
    }
  }

  componentDidMount() {
    this.handleApiFetch(this.state.searchVal);
  }


  render() {
    return(
      <div className="movieBox container">
        <MovieForm handleApiFetch={this.handleApiFetch} theFetch={this.props.theFetch}/>
        <div>
          {this.props.theFetch != "person" ? (
            <div>
              <MovieCard results={this.state.searchResults} />
            </div>
          ) : (
            <div>
              <PersonCard results={this.state.searchResults}/>
            </div>
          )}
        </div>
      </div>
    )
  }

}
