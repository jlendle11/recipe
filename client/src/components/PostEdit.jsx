import React from 'react';
import { withRouter } from 'react-router-dom';

function PostEdit(props) {

  return (
    <div>
      <h3 className="post-page-instruct">Edit post</h3>
      <form onSubmit={props.handleSubmit}>

        <p className="post-page-instruct">Recipe title:</p>

        <input 
          className="post-page-instruct"
          type="text"
          name="title"
          value={props.postForm.title}
          onChange={props.handleFormChange} />

        <p className="post-page-instruct">Recipe ingredients:</p>
        <input
          className="post-page-instruct"
          type="text"
          name="ingredients"
          value={props.postForm.ingredients}
          onChange={props.handleFormChange} />
 
        <p className="post-page-instruct">Recipe instructions:</p>
        <input 
          className="post-page-instruct"
          type="text"
          name="instructions"
          value={props.postForm.instructions}
          onChange={props.handleFormChange} />

        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(PostEdit);
