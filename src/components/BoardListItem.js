import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardList extends Component {
  static defaultProps = {
    id: '',
    title: '',
    author: ''
  }

  render() {
    const { id, title, author } = this.props
    const path = `/post/${id}`;
    return (
      <li>
        <Link to={path}>
          <div>{title}</div>
          <div>{author}</div>
        </Link>
      </li>
    );
  }
}

export default BoardList;