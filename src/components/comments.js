import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
     comments: this.props.comments
   };
  //  this.onChange = this.onChange.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    let newComment = [event.target.querySelector('input').value];
    // console.log(this.state.comments);
    this.setState= ({
      comments: this.state.comments.concat(newComment)
    });    
  } 

  render() {
    return (
      <form className="commentform" onSubmit={(event=> this.onSubmit(event))}>
        <div className="form-row align-items-center pt-3">
          <div className="col-6">
            <input className="form-control" type="text" id="comment" name="comments" />
          </div>
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

 export default Comments;

