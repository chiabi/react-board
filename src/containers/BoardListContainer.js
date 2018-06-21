import React, { Component } from 'react';

import { PostListConsumer } from '../contexts/PostListContext';
import BoardList from '../components/BoardList';

class BoardListContainer extends Component {
  render() {
    return (
      <PostListConsumer>
        {({posts}) => (
          <BoardList posts={posts}/>
        )}
      </PostListConsumer>
    );
  }
}

export default BoardListContainer;