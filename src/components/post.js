import React, { Component } from 'react';
import '../App.css';
import Img from './img';
import Comments from './comments'


class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postHidden: false
    }
    this.commentClick = this.commentClick.bind(this);
  }

  commentClick(){
    this.setState(prevState =>({
      commentHidden: !prevState.commentHidden
    }));
  }  

  listComments(comments){
    const arr = [comments];
    return(
      <ul className="first-comment pt-4">
        {
         arr.map((comment, index) =>{
          return <li key={index}>{comment}</li>
          })
        }
        </ul>
    );
  }

  render() {
    console.log(this.props.comments);
    
    return (
      <div className="media rounded bg-light mb-2 p-4">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Img imgURL={this.props.imgURL}/>
        </div>
            <div className="col-lg-7 p-3">
            <div className="d-flex flex-row">
              <h5 className="pr-3">{this.props.title} | </h5>
              <span className="pr-1"><i className="fa fa-arrow-up" id="arrowUp"></i></span>
              <span className="pl-1"><i className="fa fa-arrow-down" id="arrowDown"></i></span>
            </div>
              <p>{this.props.body}</p>
              <span> 2 minutes ago |  <i className="fa fa-comment" id="commentIcon" onClick={this.commentClick}></i></span>
              {this.listComments(this.props.comments)}
              {this.state.commentHidden && <Comments comments={this.props.comments}/>}
            </div>
      
            <div className="col-sm-2 p-3 text-right">
              {this.props.author}
            </div>
          </div>
    );
  }
}

export default Post;