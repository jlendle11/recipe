import React, { Component } from 'react';
import PostEdit from './PostEdit'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

    componentDidMount() {
      this.props.mountEditForm(this.props.id);
    }

  render() {
    const { post } = this.props;
    console.log(post, "state in posts", this.state)
    if (this.props.posts) {
    return (
      <div className="post-page">
        {post === undefined ? <h2>Loading . . .</h2> : (
          <div>

            <h1>{post.title}</h1>
            <br/>
            <h2>Ingredients:</h2>
            <h3>{post.ingredients}</h3>
            <br/>
            <h2>Instructions:</h2>
            <h4>{post.instructions}</h4>

            <hr/>
            {this.state.isEdit ?
              <Route path={`/posts/:id/edit`} render={() => (
                 <PostEdit 
                   handleFormChange={this.props.handleFormChange} 
                   handleSubmit={(e) => { 
                     e.preventDefault(); 
                     this.props.editPost();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/posts/${this.props.postForm.id}`) 
                   }}
                  postForm={this.props.postForm} />
              )} />
              : 
               <> 
                 <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/posts/${post.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deletePost(post.id);
                  this.props.history.push('/')
                }}>Delete</button> 
               </>
            }
          </div>)} 
      </div>)
    }
  }
}

export default withRouter(Post);