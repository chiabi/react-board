import React from 'react';

import { PostProvider } from '../contexts/PostContext';
import BoardViewContainer from '../containers/BoardViewContainer'

export default ({match}) => (
  <PostProvider id={match.params.postId}>
    <BoardViewContainer />
  </PostProvider>
)