import React, { Component } from 'react';

import UserForm from '../components/UserForm';
import UserFormButton from '../components/UserFormButton';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <UserForm />
        <UserFormButton />
      </div>
    );
  }
}

export default LoginPage;