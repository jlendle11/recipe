import React from 'react';
import { withRouter } from 'react-router-dom';

function PostCreate(props) {
  return (
    <div className="create-form" >
      <h2>Create a new post</h2>
      <form onSubmit={props.newPost}>

        <p>Post's name:</p>

        <input
          type="text"
          name="name"
          value={props.postForm.name}
          onChange={props.handleFormChange} />

        <br />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(PostCreate);
