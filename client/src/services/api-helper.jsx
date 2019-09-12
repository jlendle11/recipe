const baseUrl = 'http://localhost:3000'

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/auth/login`, opts)
    .then(resp => resp.json())
}

export const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData}),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/users/`, opts)
    .then(resp => resp.json())
}

const createPost = (data) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/posts`, opts)
    .then(resp => resp.json())
}

const readAllPosts = () => {
  return fetch(`${baseUrl}/posts`)
    .then(resp => resp.json())
    .then(json => json.posts)
}

const readOnePost = (id) => {
  return fetch(`${baseUrl}/posts/${id}`)
    .then(resp => resp.json())
}


export {
  createPost,
  readAllPosts,
  readOnePost
}