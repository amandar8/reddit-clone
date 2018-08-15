import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      img: ''
  };
  this.onChange = this.onChange.bind(this);
}

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
    console.log('name', event.target.name);
    console.log('value', event.target.value);
    
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    alert('Your form was submitted');
   
    
  //  .post('/', {title, body, author, img})
  //   .then((result) => {

  //   });
  }
  
  render() {
    return (
      <form className="col-8 pt-3" onSubmit={(event)=>this.props.onSubmit(event, this.state)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="text" name="title" value={this.state.title} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" type="text" name="body" rows="2" value={this.state.body} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input className="form-control" type="text" name="author" value={this.state.author} 
          onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="img">Image URL</label>
          <input className="form-control" type="text" name="img"value={this.state.img} 
          onChange={this.onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
        </form>
   );
  }
}
 
export default Form;