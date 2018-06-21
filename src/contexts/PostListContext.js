import React, { Component, createContext } from 'react';

import boardAPI from '../boardAPI';

const { Provider, Consumer } = createContext();
class PostListProvider extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    await this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const res = await boardAPI.get('/posts?_expand=user');
      const posts = res.data.map(post => ({
        id: post.id,
        title: post.title,
        author: post.user.username
      }))
      this.setState({posts})
    } catch (e) {
      alert(`${e.response.status}: 게시글 목록을 불러오는데 실패했습니다.`)
    }
  }

  addNewPost = async (title, body) => {
    try {
      const payload = {
        title: title,
        body: body
      }
      const res = await boardAPI.post('/posts', payload);
      console.log(payload)
      console.log(res.data)
    } catch (e) {
      alert(`${e.response.status}: 서버와 통신이 원할하지 않습니다. 다시 시도해주세요.`)
    }
  }

  render() {
    const value = {
      posts: this.state.posts,
      addNewPost: this.addNewPost
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

export { PostListProvider, Consumer as PostListConsumer };