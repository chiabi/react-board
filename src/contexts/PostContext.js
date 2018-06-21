import React, { Component, createContext } from 'react';

import boardAPI from '../boardAPI';

const { Provider, Consumer } = createContext();
class PostProvider extends Component {
  state = {
    posts: []
  }
  async componentDidMount() {
    this.fetchPosts()
  }
  fetchPosts = async () => {
    const res = await boardAPI.get('/posts?_expand=user');
    console.log(res)
    this.setState({
      posts: res.data
    })
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

export { PostProvider, Consumer as PostConsumer };