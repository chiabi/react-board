import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardList extends Component {
  static defaultProps = {
    post: {
      title: '',      
      user: {
        username: ''
      }
    }
  }

  render() {
    const {post} = this.props
    const path = `/post/${post.id}`;
    return (
      <li key={post.id}>
        <Link to={path}>
          <div>{post.title}</div>
          <div>{post.user.username}</div>
        </Link>
      </li>
    );
  }
}

export default BoardList;