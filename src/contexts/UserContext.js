import React, { Component, createContext } from 'react';

import boardAPI from '../boardAPI';

const { Provider, Consumer } = createContext();
class UserProvider extends Component {
  login = async (username, password) => {
    try {
      const payload = { username, password };
      const res = await boardAPI.post('/users/login', payload);
      localStorage.setItem('token', `Bearer ${res.data.token}`);
    } catch(e) {
      if(e.response && e.response.status === 400) {
        alert('등록되지 않은 사용자입니다. 아이디나 비밀번호를 확인해주세요.')
      } else if (e.response && e.response.status >= 500) {
        alert('서비스 이용이 원할하지 않으니 잠시후 다시 시도해주세요.')
      }
    }
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