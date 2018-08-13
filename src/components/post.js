import React, { Component } from 'react';
import Img from './img';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state ={
    }
  }

  render() {
    console.log(this.props);
    
    return <div className="media bg-light mb-2 p-5">
          <div className="d-flex">
            <Img imgURL={this.props.img}/>
            <div>
              <div>{this.props.title}</div>
              {this.props.description}
            </div>
            <div className="mr-3">
              {this.props.author}
            </div>
          </div>
        </div>
  }
}

export default Post;