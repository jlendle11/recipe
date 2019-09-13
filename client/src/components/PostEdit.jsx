import React from 'react';
import { withRouter } from 'react-router-dom';

function PostEdit(props) {
    console.log('Hi')
  return (
    <div>
      <h3>Edit post</h3>
      <form onSubmit={props.handleSubmit}>

        <p>Recipe title:</p>

        <input
          type="text"
          name="title"
          value={props.postForm.title}
          onChange={props.handleFormChange} />

        <p>Recipe ingredients:</p>
        <input
          type="text"
          name="ingredients"
          value={props.postForm.ingredients}
          onChange={props.handleFormChange} />

        <p>Recipe instructions:</p>
        <input
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
