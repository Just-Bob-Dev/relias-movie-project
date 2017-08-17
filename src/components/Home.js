import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="jumbotron-container">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3">NotFlix</h1>
              <hr className="my-4"/>
              <Link className="btn btn-primary btn-lg" role="button" to="/movie_search"><span className="btn-text">Movies</span></Link>
              <Link className="btn btn-primary btn-lg" role="button" to="/actor"><span className="btn-text">Actors</span></Link>
              <Link className="btn btn-primary btn-lg" role="button" to="/Tv"><span className="btn-text">TV</span></Link>
            </div>
          </div>
        </div>
    )
  }
}
