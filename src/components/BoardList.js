import React, { Component } from 'react';

import BoardListItem from '../components/BoardListItem';

class BoardList extends Component {
  static defaultProps = {
    posts: [] // 글 목록
  }

  render() {
    const {posts} = this.props;
    return (
      <ul className="board-list">
        {posts.map((post) => (
          <BoardListItem key={post.id} post={post}/>
        ))}
      </ul>
    );
  }
}

export default BoardList;