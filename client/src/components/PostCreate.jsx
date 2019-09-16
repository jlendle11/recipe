import React from 'react';
import { withRouter } from 'react-router-dom';

function PostCreate(props) {
  return (
    <div className="create-form" >
      <h2>Create new recipe</h2>
      <form onSubmit={props.newPost}>

        <p>Recipe Name:</p>

        <input
          type="text"
          name="title"
          value={props.postForm.title}
          onChange={props.handleFormChange} />

        <p>Ingredients:</p>

        <input
            type="text"
            name="ingredients"
            value={props.postForm.ingredients}
            onChange={props.handleFormChange} />

        <p>Instructions:</p>

        <input
            type="text"
            name="instructions"
            value={props.postForm.instructions}
            onChange={props.handleFormChange} />

        <br />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(PostCreate);
