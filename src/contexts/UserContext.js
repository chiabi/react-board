import React, { Component, createContext } from 'react';

import boardAPI from '../boardAPI';

const { Provider, Consumer } = createContext();
class UserProvider extends Component {
  state = {
    username: '',
    password: ''
  }
  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }
  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  }
  login = async e => {
    const payload = {
      username: this.state.username,
      password: this.state.password
    };
    const res = await boardAPI.post('/users/login', payload);
    localStorage.setItem('token', `Bearer ${res.data.token}`);
  }
  render() {
    const value = {
      username: this.state.username,
      password: this.state.password,
      changeUsername: this.changeUsername,
      changePassword: this.changePassword,
      login: this.login
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };