import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';
import MovieForm from './movies/MovieForm.js';
import MovieBox from './movies/MovieBox.js';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleMovieSelection = this.handleMovieSelection.bind(this);
    this.handleTvSelection = this.handleTvSelection.bind(this);
    this.handleActorSelection = this.handleActorSelection.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleApiFetch = this.handleApiFetch.bind(this);

    this.state = {
      movie_selected: false,
      tv_selected: false,
      actor_selected: false,
      theFetch: 'movie',
      fetch: {
        movie: 'movie',
        tv: 'tv',
        person: 'person'
      },
      searchResults: [],
      searchVal: ''
    }

  }

  handleMovieSelection(event){
      console.log(event.target.value);
      this.setState({movie_selected: true, theFetch:this.state.fetch.movie , tv_selected: false, actor_selected: false});
      if(this.state.searchVal != ''){
        console.log("state below");
        console.log(this.state);
        this.setState({searchResults: []});
        this.handleApiFetch(this.state.searchVal, 'movie');
      }
      else{
        this.setState({searchResults: []})
      }
      console.log(this.state);
  }

  handleTvSelection(event){
    console.log(event.target.value);
        this.setState({tv_selected: true, theFetch:this.state.fetch.tv , actor_selected: false, movie_selected: false});
        if(this.state.searchVal != ''){
          console.log("state below");
          console.log(this.state);
          this.setState({searchResults: []});
          this.handleApiFetch(this.state.searchVal, 'tv');
        }
        else{
          this.setState({searchResults: []})
        }
        console.log(this.state);
  }

  handleActorSelection(event){
    console.log(event.target.value);
    this.setState({actor_selected: true, theFetch:this.state.fetch.person, tv_selected: false, movie_selected: false});
    if(this.state.searchVal != ''){
      console.log("state below");
      console.log(this.state);
      this.setState({searchResults: []});
      this.handleApiFetch(this.state.searchVal, 'person');
    }
    else{
      this.setState({searchResults: []})
    }
    console.log(this.state);
  }

  handleButtonClick(event) {
      event.preventDefault();
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
        console.log("props: " + this.props.theFetch + ". Search Type: " + searchType);
          this.setState({searchResults: resp.results, searchVal: searchValue});
          console.log(this.state.searchResults);
      })
    }
  }




  render() {
    return(
      <div className="jumbotron-container">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3">NotFlix</h1>
              <hr className="my-4"/>
              <form onSubmit={this.handleButtonClick}>
                <button className="btn btn-primary btn-lg" value={this.state.movie_selected} onClick={this.handleMovieSelection}><span className="btn-text">Movies</span></button>
                <button className="btn btn-primary btn-lg" value={this.state.actor_selected} onClick={this.handleActorSelection}><span className="btn-text">Actors</span></button>
                <button className="btn btn-primary btn-lg" value={this.state.tv_selected} onClick={this.handleTvSelection}><span className="btn-text">TV</span></button>
              </form>
            </div>
          </div>
          <div>
            <MovieBox theFetch={this.state.theFetch} searchResults={this.state.searchResults} handleApiFetch={this.handleApiFetch} searchVal={this.state.searchVal}/>
          </div>
        </div>
    )
  }
}
