import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      author: '',
      img: ''
  };
}

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  onSubmit= (event) => {
    event.preventDefault();
    const {title, body, author, img} = this.state;
    alert('Your form was submitted');
    
    // postData.post('/' {title, body, author, img})
    // .then((result) => {

    // })
  }
  
  render() {
    const {title, body, author, img} = this.state;
    return (
      <form className="col-8 pt-3" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="text" name="title" value={title} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" type="text" name="body" rows="2" value={body} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input className="form-control" type="text" name="author" value={author} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="img">Image URL</label>
          <input className="form-control" type="text" name="img"value={img} 
          onChange={this.onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
        </form>
   );
  }
}
 
export default Form;