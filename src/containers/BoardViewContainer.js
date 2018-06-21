import React, { Component } from 'react';

import { PostConsumer } from '../contexts/PostContext';
import BoardView from '../components/BoardView';

class BoardViewContainer extends Component {
  render() {
    return (
      <PostConsumer>
        {({post}) => (
          <BoardView post={post}/>
        )}
      </PostConsumer>
    );
  }
}

export default BoardViewContainer;