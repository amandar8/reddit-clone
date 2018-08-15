import React, { Component } from 'react';
import './App.css';
import postData from './postData';
import Search from './components/search';
import Post from './components/post';
import Form from './components/form';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: postData,
      postHidden: true
    }
    this.updatePostHidden = this.updatePostHidden.bind(this);
    this.updatePostData = this.updatePostData.bind(this);
  }

  renderPosts () {
    return this.state.posts.map(post => <Post key={post.id} img={post.imgURL} title={post.title} author={post.author} description={post.description} />)
  }

  updatePostHidden() {
    this.setState({
      postHidden: !this.state.postHidden
    })
  }

  updatePostData(postObj){
    this.setState({
      posts: this.state.posts.concat([postObj])
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light border-bottom">
          <span className="navbar-brand ml-3 mb-0 h1">Reddit Clone</span>
        </nav>
        <div className="container-fluid">
          <div className="row pb-2 pt-4 pr-3 pl-3 d-flex justify-content-center">
            <div className="col-12">
              <Search updatePostHidden={() => this.updatePostHidden}/>
              {!this.state.postHidden && <Form updatePostData={newPost => this.updatePostData(newPost)}/>}
              {this.renderPosts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;