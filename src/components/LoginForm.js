import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="username" aria-label="username" />
        <input type="password" placeholder="password" aria-label="password" />
        <button>Login</button>
      </div>
    );
  }
}

export default LoginForm;