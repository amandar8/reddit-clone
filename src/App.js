import React, { Component } from 'react';
import './App.css';
import postsData from './postData';
import Search from './components/search';
import Post from './components/post';


class App extends Component {

  renderPosts () {
    return postsData.map(post => <Post key={post.id} img={post.imgURL} title={post.title} author={post.author} description={post.description} />)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light border-bottom">
          <span className="navbar-brand mb-0 h1">Reddit Clone</span>
        </nav>
        <div className="container-fluid">
          <div className="row pb-2 pt-4 pr-3 pl-3 d-flex justify-content-center">
            <div className="col-12">
              <Search />
              {this.renderPosts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;