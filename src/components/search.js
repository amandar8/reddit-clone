import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-8 d-flex align-items-end">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" name="filter" placeholder="Filter" />
        </form>
          <div className="dropdown show">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort By Title</a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Votes</a>
              <a className="dropdown-item" href="#">Date</a>
              <a className="dropdown-item" href="#">Title</a>
            </div>
          </div>
        </div>
          <div className="col-4 d-flex justify-content-end align-items-end">
            <button type="button" className="btn btn-primary">Post</button>
          </div> 
      </div>  
   
    );
  }
}
 
export default Search;