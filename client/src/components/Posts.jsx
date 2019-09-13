import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Posts extends Component {
  constructor(props){
    super(props)
  }

  render() {
  const { posts } = this.props
  console.log(posts)
  if (this.props.posts) {
  return (
    <div className="post-container">
        {this.props.posts.map(post => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => this.props.history.push(`/posts/${post.id}`)}
          >
            <div>
              <h1>{post.title}</h1>
              <h2>{post.ingredients}</h2>
              <h3>{post.instructions}</h3>
            </div>
          </div>
        ))} 
        <div
          className="post-card"
          onClick={() => this.props.history.push('/new/post')}>
          <img
            alt="Create a new post"
            src="https://image.flaticon.com/icons/png/512/14/14980.png"
            className="plus-sign" />
          <h3>Create a new post</h3>
        </div>
    </div>
  )}}
}

export default withRouter(Posts)