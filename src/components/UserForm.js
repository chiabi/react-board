import React, { Component } from 'react';

class UserForm extends Component {

  static defaultProps = {
    username: '', // user name 입력
    password: '',  // user password 입력
    onChangeInput: () => {} // 인풋 값 변경되면 실행되는 함수 
  }

  render() {
    const {
      username,
      password,
      onChangeInput
    } = this.props;
    return (
      <React.Fragment>
        <input type="text" value={username} onChange={onChangeInput} placeholder="username" aria-label="username" />
        <input type="password" password={password} onChange={onChangeInput} placeholder="password" aria-label="password" />
      </React.Fragment>
    );
  }
}

export default UserForm;