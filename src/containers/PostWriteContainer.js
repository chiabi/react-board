import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { PostListConsumer } from '../contexts/PostListContext'
import PostForm from '../components/PostForm'

class PostWriteFormContainer extends Component {
  state = {
    success: false
  }
  render() {
    if (this.state.success) {
      return (
        <Redirect to='/post'/>
      )
    } else {
      return (
        <PostListConsumer>
          {({addNewPost}) => (
            <PostForm onSubmitPost={async (title, body) => {
              await addNewPost(title, body);
              this.setState({success: true})
            }}/>
          )}
        </PostListConsumer>
      );
    }
  }
}

export default PostWriteFormContainer;