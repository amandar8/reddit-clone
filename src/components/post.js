import React, { Component } from 'react';
import Img from './img';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state ={
    }
  }

  render() {
    return <div className="media bg-light mb-2 p-4">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Img imgURL={this.props.img}/>
            </div>
            <div className="col-lg-7 p-3">
            <div className="d-flex flex-row">
              <h5 className="pr-3">{this.props.title} | </h5>
              <a className="pr-1" href=""><i className="fa fa-long-arrow-up"></i></a>
              <a className="pl-1"href=""><i className="fa fa-long-arrow-down"></i></a>
            </div>
              <p>{this.props.description}</p>
              <span> 2 minutes ago |  <i className="fa fa-comment"></i>   1  <a href="/">Comments</a></span>
            </div>
            <div className="col-sm-2 p-3 text-right">
              {this.props.author}
            </div>
          </div>
  }
}

export default Post;