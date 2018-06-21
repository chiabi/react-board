import React, { Component } from 'react';

class UserForm extends Component {
  static defaultProps = {
    onSubmitUser: () => {}, // 전송시 이벤트
    buttonText: '', // 전송 버튼에 들어갈 텍스트
  }
  
  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmitUser(this.state.username, this.state.password);
  }

  render() {
    const { username, password } = this.state;
    const { buttonText } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={username} onChange={this.handleUsernameChange} placeholder="username" aria-label="username" required={true}/>
        <input type="password" value={password} onChange={this.handlePasswordChange} placeholder="password" aria-label="password" required={true}/>
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

export default UserForm;