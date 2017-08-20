import React, { Component } from 'react';
import '../../styles/App.css';

export default class PersonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //base url for displaying images. Fetch only return path after this.
      imageBaseUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2",
    }
}

  render() {
    let results = this.props.results;
    //checks if fetch was null.
    console.log("results: " + results);
    if(results === null || results === undefined || results[0].known_for === null || results[0].known_for === undefined){
      return(
        <div>
          <h1>We apologize, there seems to be no content this search.</h1>
        </div>
      )
    }
    let person_card = results.map((person) => {
        //error handling for movies searched without an image.
        let person_image = person.profile_path;
        if(person_image === null){
          person_image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHESdAiqqNrPZZBWKJzGeE90y3DNK4BP5s44-w5mDQs3kK-wR';
        }
        else{
          person_image = this.state.imageBaseUrl + person_image;
        }
        let knownFor_list = person.known_for.map((known) => {
          let knownForName = '';
          if(known.media_type === 'tv'){knownForName = known.name}
          else if(known.media_type === 'movie'){knownForName = known.title}
          return(
            <li className="list-group-item" key={known.id}>{knownForName}</li>
          )
        })
        return (
          <div key={person.id} className="card col-lg-4">
            <img className="card-img-top" src={person_image} alt={"Poster of " + person.name} style={{height: 450 +"px", width: 300 + "px"}} />
            <div className="card-block">
              <h1 className="card-title">Name: {person.name}</h1>
              <p className="car-text">Know For:</p>
              <ul className="list-group list-group-flush">
                {knownFor_list}
              </ul>
            </div>
          </div>
        )
      }
    )

    return(
      <div>
          <div className="card-deck">
            {person_card}
          </div>
      </div>
    )
  }
}
