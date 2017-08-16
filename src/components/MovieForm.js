import React, { Component } from 'react';

export default class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.handleMovieFormSubmit = this.handleMovieFormSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      searchParams: ''
    }
  }

  //handles change event of searching for movies.
  handleSearchChange(event){
    let search_term = event.target.value;
    console.log(search_term);
    search_term = search_term.split(' ').join('%20');
    console.log(search_term);
    this.setState({searchParams: search_term});
  }

  handleMovieFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.searchParams);
    this.props.handleApiFetch(this.state.searchParams);
    this.setState({searchParams:''});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleMovieFormSubmit} >
          <label>Search</label>
          <input value={this.state.searchParams} onChange={this.handleSearchChange} placeholder="Search for Movie"/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }

}
