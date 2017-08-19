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

    this.state = {
      movie_selected: true,
      tv_selected: false,
      actor_selected: false,
      theFetch: null,
      fetch: {
        movie: 'movie',
        tv: 'tv',
        person: 'person'
      }
    }

  }

  handleMovieSelection(event){
      console.log(event.target.value);
      this.setState({movie_selected: true, theFetch:this.state.fetch.movie , tv_selected: false, actor_selected: false});
      console.log(this.state);
  }

  handleTvSelection(event){
    console.log(event.target.value);
        this.setState({tv_selected: true, theFetch:this.state.fetch.tv , actor_selected: false, movie_selected: false});
        console.log(this.state);
  }

  handleActorSelection(event){
    console.log(event.target.value);
    this.setState({actor_selected: true, theFetch:this.state.fetch.person, tv_selected: false, movie_selected: false});
    console.log(this.state);
  }

  handleButtonClick(event) {
      event.preventDefault();
      console.log(this.state);
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
            <MovieBox theFetch={this.state.theFetch} />
          </div>
        </div>
    )
  }
}
