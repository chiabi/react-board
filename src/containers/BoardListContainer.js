import React, { Component } from 'react';

import { PostConsumer } from '../contexts/PostContext';
import BoardList from '../components/BoardList';

class BoardListContainer extends Component {
  render() {
    return (
      <PostConsumer>
        {({posts}) => (
          <BoardList posts={posts}/>
        )}
      </PostConsumer>
    );
  }
}

export default BoardListContainer;