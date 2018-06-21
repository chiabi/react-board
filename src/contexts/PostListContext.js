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

    }
  }

  addNewPost = async () => {

  }

  render() {
    const value = {
      posts: this.state.posts
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

export { PostListProvider, Consumer as PostListConsumer };