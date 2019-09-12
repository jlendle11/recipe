import React from 'react';
import { withRouter } from 'react-router';

function Posts(props) {
  console.log(props.posts)
  return (
    <div className="post-container">
     
        {props.posts.map(post => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => props.history.push(`/posts/${post.id}`)}>
            <h3>
              <p>{post.title}</p>
            </h3>
          </div>
        ))} 
        <div
          className="post-card"
          onClick={() => props.history.push('/new/post')}>
          <img
            alt="Create a new post"
            src="https://image.flaticon.com/icons/png/512/14/14980.png"
            className="plus-sign" />
          <h3>Create a new post</h3>
        </div>
    </div>
  )
}

export default withRouter(Posts)