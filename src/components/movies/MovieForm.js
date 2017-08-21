import React, { Component } from 'react';

export default class MovieForm extends Component {
  constructor(props) {
    super(props);

    //binds functions to this component so they will work in react.
    this.handleMovieFormSubmit = this.handleMovieFormSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      searchParams: ''
    }
  }

  //handles change event of searching for movies.
  handleSearchChange(event){
    this.setState({searchParams: event.target.value});
  }

  //handles submission of the form.
  handleMovieFormSubmit(event) {
    event.preventDefault();
    let search_term = this.state.searchParams;
    console.log(search_term);
    search_term = search_term.split(' ').join('%20');
    console.log(search_term);
    this.setState({searchParams: search_term});
    console.log(this.state.searchParams);
    this.props.handleApiFetch(this.state.searchParams, this.props.theFetch);
    this.setState({searchParams:''});
  }

  render() {
    let placeholderTag = '';
    if(this.props.theFetch === 'movie'){placeholderTag = 'Search for a Movie';}
    else if(this.props.theFetch === 'tv'){placeholderTag = 'Search for a TV Show';}
    else if(this.props.theFetch === 'person'){placeholderTag = 'Search for an Actor';}
    return(
      <div>
        <form onSubmit={this.handleMovieFormSubmit} >
          <div className="form-group">
            <label className="search-label">Search</label>
            <input className="form-control" value={this.state.searchParams} onChange={this.handleSearchChange} placeholder={placeholderTag} />
            <button className="btn btn-primary btn-search" type="submit">Search</button>
          </div>
        </form>
      </div>
    )
  }

}
