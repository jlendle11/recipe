const baseUrl = 'http://localhost:3000'

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  }

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

const createPost = (data, user) => {
  const payload = Object.assign({}, data, {user_id: user})
  console.log(user)
  const opts = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`${baseUrl}/posts`, opts)
    .then(resp => resp.json())
}

const readAllPosts = () => {
  return fetch(`${baseUrl}/posts`)
    .then(resp => resp.json())
}

const readOnePost = (id) => {
  return fetch(`${baseUrl}/posts/${id}`)
    .then(resp => resp.json())
}

const updatePost = (id, data) => {
    const opts = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${baseUrl}/posts/${id}`, opts)
      .then(resp => resp.json())
  }

const destroyPost = (id) => {
  const opts = {
    method: 'DELETE'
  }
    return fetch(`${baseUrl}/posts/${id}`, opts)
}


export {
  createPost,
  readAllPosts,
  readOnePost,
  destroyPost,
  updatePost
}