import React, { Component } from 'react';

import BoardViewContainer from '../containers/BoardViewContainer'

class BoardViewPage extends Component {
  render() {
    const {id} = this.props
    return (
      <BoardViewContainer id={id} />
    );
  }
}

export default BoardViewPage;