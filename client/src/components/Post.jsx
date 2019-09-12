import React, { Component } from 'react';
// import InstructorEdit from './InstructorEdit'
// import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class Post extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isEdit: false
    // }
  }

  // componentDidMount() {
  //   this.props.mountEditForm(this.props.id);
  // }

  render() {
    const { posts } = this.props;
    console.log(posts[0])
    if (this.props.posts) {
    return (
      <div className="post-page">
        {/* {post === undefined ? <h2>Loading . . .</h2> : ( */}
          {/* <div> */}
            {/* <img alt={user.name} src={user.photo}/> */}

            <h1>{posts[0].title}</h1>

            {/* <p>{user.description}</p>
            <a href={user.link}>Connect</a> */}
            {/* <hr/> */}
            {/* {this.state.isEdit ? */}
              {/* <Route path={'/users/:id/edit'} render={() => ( */}
                {/* <InstructorEdit */}
                  {/* handleFormChange={this.props.handleFormChange} */}
                  {/* handleSubmit={(e) => { */}
                    {/* e.preventDefault(); */}
                    {/* this.props.editInstructor();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/instructors/${this.props.instructorForm.id}`) */}
                  {/* }}
                  instructorForm={this.props.instructorForm} />
              )} />
              : */}
              {/* <> */}
                {/* <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/instructors/${instructor.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteInstructor(instructor.id);
                  this.props.history.push('/')
                }}>Delete</button> */}
              {/* </>
            }
          </div>)} */}
      </div>
    )}
  }
}

export default withRouter(Post);