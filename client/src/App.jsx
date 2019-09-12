import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router';

import decode from 'jwt-decode';

import Posts from './components/Posts'
import Post from './components/Post'
import PostCreate from './components/PostCreate'

import Login from './components/Login'
import Register from './components/Register'

import {
  createPost,
  readAllPosts,
  // updatePost,
  // destroyPost,
  loginUser,
  registerUser
} from './services/api-helper'

import './App.css';

class App extends Component {
  state = {
    posts: [{title: 'hey'}],
    postForm: {
      title: "",
      ingredients: "",
      instructions: ""
    },
    currentUser: null,
    authFormData: {
      username: "",
      email: "",
      password: ""
    }
  }

  getPosts = async () => {
    const posts = await readAllPosts()
    this.setState({
      posts
    })
  }

  newPost = async (e) => {
    e.preventDefault()
    const post = await createPost(this.state.postForm)
    this.setState(prevState => ({
      posts: [...prevState.posts, post],
      postForm: {
        title: "",
        ingredients: "",
        description: ""
      }
    }))
  }

  handleFormChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      postForm: {
        ...prevState.postForm,
        [name]: value
      }
    }))
  }

  mountEditForm = async (id) => {
    const posts = await readAllPosts()
    const post = posts.find(el => el.id === parseInt(id))
    this.setState({
      posts,
      postForm: post
    })
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = async () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  componentDidMount() {
    this.getPosts()
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1><Link to='/' onClick={() => this.setState({
            postForm: {
              title: "",
              ingredients: "",
              instructions: ""
            }
          })}>Recipe App</Link></h1>
          <div>
            {this.state.currentUser
              ?
              <>
                <p>{this.state.currentUser.username}</p>
                <button onClick={this.handleLogout}>Logout</button>
              </>
              :
              <button onClick={this.handleLoginButton}>Login / Register</button>
            }
          </div>
        </header>
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route
          exact path="/"
          render={() => (
            <Posts
              posts={this.state.posts}
              postForm={this.state.postForm}
              handleFormChange={this.handleFormChange}
              newPost={this.newPost} />
          )}
        />
        <Route
          path="/new/post"
          render={() => (
            <PostCreate
              handleFormChange={this.handleFormChange}
              postForm={this.state.postForm}
              newPost={this.newPost} />
          )} />
        <Route
          path="/posts/:id"
          render={(props) => {
            const { id } = props.match.params;
            const post = this.state.posts.find(el => el.id === parseInt(id));
            return <Post
              id={id}
              post={post}
              handleFormChange={this.handleFormChange}
              postForm={this.state.postForm}
              // deleteInstructor={this.deleteInstructor} 
            />
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);