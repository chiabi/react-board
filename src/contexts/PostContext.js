import React, { Component, createContext } from 'react';

import boardAPI from '../boardAPI';

const { Provider, Consumer } = createContext();
class PostProvider extends Component {
  state = {
    post: {}
  }

  async componentDidMount() {
    await this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const {id} = this.props;
      const res = await boardAPI.get(`/posts/${id}?_expand=user`);
      const post = {
        id: res.data.id,
        title: res.data.title,
        body: res.data.body,
        author: res.data.user.username
      }
      this.setState({post});
    } catch(e) {

    }
  }

  render() {
    const value = {
      post: this.state.post
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

export { PostProvider, Consumer as PostConsumer };