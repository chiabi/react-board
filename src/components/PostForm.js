import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  }

  state = {
    newTitle: '',
    newBody: '',
  }
  handleTitleChange = e => {
    this.setState({newTitle: e.target.value});
  }
  handleBodyChange = e => {
    this.setState({newBody: e.target.value});
  }

  render() {
    const { onSubmit } = this.props;
    const { newTitle, newBody } = this.state;
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">타이틀: </label>
          <input name="title" type="text" 
            value={newTitle}
            onChange={this.handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="body">내용: </label>
          <textarea value={newBody} onChange={this.handleBodyChange}></textarea>
        </div>
        <button type="submit">등록</button>
        <Link to="/post" type="button">취소</Link>
      </form>
    );
  }
}

export default PostForm;