# Recipe App

## Link to App  - [Site]("http://jlrecipe-app.surge.sh/")

## Description
- A simple full CRUD website that allows users to create a profile/login/logout. If logged in, users can post recipes and view recipes posted by other users.

## Screenshot  
![homepage](https://github.com/jlendle11/recipe/blob/master/client/src/Images/Homepage.png)

## Launch Instructions
- Open app in preferred editor
- ```cd``` into ```Client``` directory.
- Run ```npm start``` to launch React-app

## Code Snippet of creating/posting new recipe to API database

```
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
```

