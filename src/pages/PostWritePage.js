import React from 'react';
import { Link } from 'react-router-dom';

import { PostListProvider } from '../contexts/PostListContext';
import PostWriteContainer from '../containers/PostWriteContainer'
import withAuth from '../hocs/withAuth';

const PostWritePage = () => (
  <PostListProvider>
    <div>
      <h1>새 글 작성</h1>
      <Link to='/post'>뒤로가기</Link>
      <PostWriteContainer />
    </div>
  </PostListProvider>
)

export default withAuth('/login')(PostWritePage);