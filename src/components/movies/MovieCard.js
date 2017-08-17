import React, { Component } from 'react';
import '../../styles/App.css';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //base url for displaying images. Fetch only return path after this.
      imageBaseUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
    }
}

  render() {
    let results = this.props.results;
    //checks if fetch was null.
    console.log("results: " + results);
    if(results === null || results === undefined ){
      return(
        <div>
          <h1>Im Sorry there is no content</h1>
        </div>
      )
    }
    let movie_card = results.map((movie) => {
        //error handling for movies searched without an image.
        let movie_image = movie.poster_path;
        let movie_rating = movie.vote_average;
        if(movie_rating === null){movie_rating = "NA";}
        else{movie_rating = movie_rating * 10.00;}
        if(movie_image === null){
          movie_image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHESdAiqqNrPZZBWKJzGeE90y3DNK4BP5s44-w5mDQs3kK-wR';
        }
        else{
          movie_image = this.state.imageBaseUrl + movie_image;
        }
        return (
          <div key={movie.id} className="card col-lg-4">
            <img className="card-img-top" src={movie_image} alt={"Poster of " + movie.title} />
            <div className="card-block">
              <h1 className="card-title">Title: {movie.title}</h1>
              <p className="card-text">Popularity: {movie_rating}</p>
              <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" style={{width: movie_rating +"%", height: 20 +"px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{movie_rating}%</div>
              </div>
              <p className="car-text">Overview: {movie.overview}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Release Date: {movie.release_date}</small>
            </div>
          </div>
        )
      })
    return(
      <div>
        {results.length < 0 ? (
          <div>
            <h1>Im sorry we seem to be missing that title</h1>
          </div>
        ) : (

          <div className="card-deck">
            {movie_card}
          </div>

      )}
      </div>
    )
  }
}
