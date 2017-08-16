import React, { Component } from 'react';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageBaseUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
    }
}

  render() {
    let results = this.props.results;
    let movie_card = results.map((movie) => {
      let movie_image = movie.poster_path;
      if(movie_image === null){
        movie_image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHESdAiqqNrPZZBWKJzGeE90y3DNK4BP5s44-w5mDQs3kK-wR';
      }
      else{
        movie_image = this.state.imageBaseUrl + movie_image;
      }
      return (
        <div key={movie.id}>
          <img src={movie_image} alt={"Poster of " + movie.title} />
          <h1>{movie.title}</h1>
          <h4>Popularity: {movie.popularity}</h4>
          <p>Overview: {movie.overview}</p>
        </div>
      )
    })
    return(
      <div>
        {movie_card}
      </div>
    )
  }
}
