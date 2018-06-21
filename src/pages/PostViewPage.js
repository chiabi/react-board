import React from 'react';

import { PostProvider } from '../contexts/PostContext';
import BoardViewContainer from '../containers/BoardViewContainer'
import withAuth from '../hocs/withAuth';

const PostViewPage = ({match}) => (
  <PostProvider id={match.params.postId}>
    <BoardViewContainer />
  </PostProvider>
)

export default withAuth('/login')(PostViewPage);