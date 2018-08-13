import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="title_input">Title</label>
          <input className="form-control" type="text" name="title_input" />
        </div>
        <div class="form-group">
          <label for="body_input">Body</label>
          <input className="form-control" type="text" name="body_input" />
        </div>
        <div class="form-group">
          <label for="author_input">Author</label>
          <input className="form-control" type="text" name="author_input" />
        </div>
        <div class="form-group">
          <label for="url_input">Image URL</label>
          <input className="form-control" type="text" name="url_input" />
        </div>
        <button type="submit" class="btn btn-primary">Create Post</button>
      </form>
   ); 
   
  }
}
 
export default Form;