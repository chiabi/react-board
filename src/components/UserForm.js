import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <input type="text" value={this.state.username} placeholder="username" aria-label="username" />
        <input type="password" password={this.state.password} placeholder="password" aria-label="password" />
      </React.Fragment>
    );
  }
}

export default UserForm;