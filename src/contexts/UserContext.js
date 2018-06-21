import React, { Component, createContext } from 'react';

import boardAPI from '../boardAPI';

const { Provider, Consumer } = createContext();
class UserProvider extends Component {
  login = async (username, password) => {
    const payload = { username, password };
    const res = await boardAPI.post('/users/login', payload);
    localStorage.setItem('token', `Bearer ${res.data.token}`);
  }
  
  render() {
    const value = { login: this.login }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };