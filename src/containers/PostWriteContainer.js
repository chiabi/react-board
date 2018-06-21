import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { PostConsumer } from '../contexts/PostContext'
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
        <PostConsumer>
          {() => (
            <PostForm/>
          )}
        </PostConsumer>
      );
    }
  }
}

export default PostWriteFormContainer;