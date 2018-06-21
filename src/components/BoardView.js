import React, { Component } from 'react';

class BoardView extends Component {
  static defaultProps = {
    post: {} // 포스트
  }
  render() {
    const {post} = this.props;
    return (
      <div className="board-view">
        <h2 className="board-view__title">{post.title}</h2>
        <div className="board-view__author">작성자: {post.user.username}</div>
        <p className="board-view__body">{post.body}</p>
      </div>
    );
  }
}

export default BoardView;