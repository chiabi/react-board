import React, { Component } from 'react';

import { PostConsumer } from '../contexts/PostContext';
import BoardView from '../components/BoardView';

class BoardViewContainer extends Component {
  render() {
    const {id} = this.props;
    return (
      <PostConsumer>
        {({posts}) => {
          const post = posts.filter(post => parseInt(id) === parseInt(post.id))[0];
          return post && <BoardView id={id} post={post}/>
        }}
      </PostConsumer>
    );
  }
}

export default BoardViewContainer;