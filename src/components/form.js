import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      imgURL: ''
    };
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
    // console.log('name', event.target.name);
    // console.log('value', event.target.value);
  }
    
  onSubmit(event){
    event.preventDefault();
    console.log('Event: Form Submitted.');
    let newPost = {};
    newPost.title = this.state.title;
    newPost.body = this.state.body;
    newPost.author = this.state.author;
    newPost.imgURL = this.state.imgURL;
    this.props.updatePostData(newPost);
    this.props.updatePostHidden();
    console.log("is this working??");
    
  }
  
  render() {
    return (
      <form className="col-8 pt-3" onSubmit={(event=> this.onSubmit(event))} ref='form'>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="text" name="title" value={this.state.title} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" type="text" name="body" value={this.state.body} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input className="form-control" type="text" name="author" value={this.state.author} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="imgURL">Image URL</label>
          <input className="form-control" type="text" name="imgURL"value={this.state.imgURL} 
          onChange={this.onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
        </form>
    );
  }
}
 
export default Form;