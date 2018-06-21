import React, { Component } from 'react';

import BoardListContainer from '../containers/BoardListContainer'

class BoardListPage extends Component {
  render() {
    return (
      <div>
        <h1>게시글 목록</h1>
        <BoardListContainer />
      </div>
    );
  }
}

export default BoardListPage;