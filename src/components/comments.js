import React, { Component } from 'react';

class Comments extends Component {
  constructor(props){
    super(props)
    this.state = {  }
  
  }

  render() {
    return (
      <div>
        <div className="form-group mt-3">
          <input id="comment" type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Subimit</button>
      </div>
    );
  }
  

}
 
export default Comments;