import React, { Component } from 'react';

class BoardView extends Component {
  static defaultProps = {
    id: 0,
    title: '',
    body: '',
    author: ''
  }
  
  render() {
    const {title, body, author} = this.props.post;
    return (
      <div className="board-view">
        <h2 className="board-view__title">{title}</h2>
        <div className="board-view__author">작성자: {author}</div>
        <p className="board-view__body">{body}</p>
      </div>
    );
  }
}

export default BoardView;