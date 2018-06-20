import React, { Component } from 'react';

class UserForm extends Component {

  static defaultProps = {
    username: '', // user name 입력
    password: '',  // user password 입력
    onChangeUsername: () => {}, // 유저 값 변경되면 실행되는 함수 
    onChangePassword: () => {} // 패스워드 값 변경되면 실행되는 함수 
  }

  render() {
    const {
      username,
      password,
      onChangeUsername,
      onChangePassword
    } = this.props;
    return (
      <React.Fragment>
        <input type="text" value={username} onChange={onChangeUsername} placeholder="username" aria-label="username" />
        <input type="password" value={password} onChange={onChangePassword} placeholder="password" aria-label="password" />
      </React.Fragment>
    );
  }
}

export default UserForm;