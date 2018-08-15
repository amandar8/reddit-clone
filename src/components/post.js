import React, { Component } from 'react';
import Img from './img';
import Comments from './comments'
import '../App.css';

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

  render() {
    return <div className="media rounded bg-light mb-2 p-4">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Img imgURL={this.props.img}/>
            </div>
            <div className="col-lg-7 p-3">
            <div className="d-flex flex-row">
              <h5 className="pr-3">{this.props.title} | </h5>
              <span className="pr-1"><i className="fa fa-arrow-up" id="arrowUp"></i></span>
              <span className="pl-1"><i className="fa fa-arrow-down" id="arrowDown"></i></span>
            </div>
              <p>{this.props.description}</p>
              <span> 2 minutes ago |  <i className="fa fa-comment" id="commentIcon" onClick={this.commentClick}></i></span>
              {this.state.commentHidden && <Comments />}
            </div>
            
            <div className="col-sm-2 p-3 text-right">
              {this.props.author}
            </div>
          </div>
  }
}

export default Post;