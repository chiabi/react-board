import React from 'react';
import { Link } from 'react-router-dom';

import { PostListProvider } from '../contexts/PostListContext';
import BoardListContainer from '../containers/BoardListContainer'

export default () => (
  <PostListProvider>
    <div>
      <h1>게시글 목록</h1>
      <BoardListContainer />
      <Link to='/new'>새 글 작성</Link>
    </div>
  </PostListProvider>
)