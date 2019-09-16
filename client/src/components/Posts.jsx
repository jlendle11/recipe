import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Posts extends Component {
  // eslint-disable-next-line
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
              <h1 className="recipe-title">{post.title}</h1>
              <h2>Ingredients:</h2>
              <h3 className="ingredients">{post.ingredients}</h3>
              <h2>Instructions:</h2>
              <h4 className="instructions">{post.instructions}</h4>
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
        </div>
    </div>
  )}}
}

export default withRouter(Posts)