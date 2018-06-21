import React, { Component } from 'react';

class BoardList extends Component {
  static defaultProps = {
    posts: [], // 글 목록
    onGoToBoardView: () => {}, // 글 보기 페이지로 이동하는 함수
  }

  render() {
    const {posts, onGoToBoardView} = this.props
    return (
      <ul className="board-list">
        {posts.map((post) => (
          <li key={post.id} className="board-list__item" onClick={onGoToBoardView}>
            <div>{post.title}</div>
            <div>{post.user.username}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default BoardList;